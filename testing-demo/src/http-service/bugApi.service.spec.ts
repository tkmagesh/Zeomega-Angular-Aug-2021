import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BugApiService } from './bugApi.service';
import testData from './test-data'
import { Bug } from './bug.model';

fdescribe('BugApi service', () => {
    let bugApi : BugApiService;
    let httpTestingController : HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BugApiService
            ], 
            imports : [
                HttpClientTestingModule
            ]
        });
        bugApi = TestBed.inject(BugApiService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    })

    it('should be created', () => {
        expect(bugApi).toBeTruthy();
    });

    it('should get all bugs', () => {

        //arrange
        const testBugs = testData.bugs;

        //act
        bugApi.getAll()
            .subscribe(bugs => {
                expect(bugs.length).toBe(3);
            });

        //assert 
        const req = httpTestingController.expectOne(bugApi.serviceEndPoint);
        expect(req.request.method).toBe('GET');
        req.flush(testBugs);
        
    });

    it('should save a new bug', () => {
        const newBugData : Bug = {
            id : 0,
            name : 'test bug',
            isClosed : false,
            createdAt : new Date()
        };

        bugApi
            .save(newBugData)
            .subscribe(newBug => {
                expect(newBug.id).not.toBe(0);
                expect(newBug.name).toBe(newBugData.name);
            })
        
        const req = httpTestingController.expectOne(bugApi.serviceEndPoint);
        expect(req.request.method).toBe('POST');
        req.flush({...newBugData, id : 1});
    })

    it("should be able to save an existing bug", () => {
        const existingBugData : Bug = {
            id : 1,
            name : 'Test bug',
            isClosed : false,
            createdAt : new Date()
        }

        bugApi
            .save(existingBugData)
            .subscribe(updatedBug => {
                expect(updatedBug)
                    .withContext('failed to save new bug')
                    .toBeTruthy()
                expect(updatedBug.id)
                    .withContext('failed to save new bug')
                    .toBe(1, 'failed to save new bug')
            });

        const req = httpTestingController.expectOne('http://localhost:3000/bugs/1');
        expect(req.request.method).toBe('PUT')
        req.flush({...existingBugData});
    
    });

    it("should throw an error when deleting a non existent bug", () => {
        const bugToRemove = { 
            id : 300,
            name : 'Dummy Bug',
            isClosed : false,
            createdAt : new Date()
        };

        bugApi
            .remove(bugToRemove)
            .subscribe(() => {
                fail('should not have been able to delete a non existent bug');
            }, err => {
                expect(err).toBeTruthy();
                expect(err.error.type).toBe('Bug does not exist');
            });
        
        const req = httpTestingController.expectOne(`${bugApi.serviceEndPoint}/300`);
        expect(req.request.method).toBe('DELETE');
        req.error(new ErrorEvent('Bug does not exist'));

    })
})