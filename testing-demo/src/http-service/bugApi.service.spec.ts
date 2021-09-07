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
        httpTestingController.verify();
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
})