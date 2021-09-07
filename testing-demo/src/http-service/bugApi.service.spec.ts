import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BugApiService } from './bugApi.service';

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

        //act
        bugApi.getAll()
            .subscribe(bugs => {
                expect(bugs.length).toBe(2);
            });

        //assert
        const req = httpTestingController.expectOne(bugApi.serviceEndPoint);
        expect(req.request.method).toBe('GET');
        req.flush([
            {
                id : 1,
                title : 'Bug 1',
                description : 'Bug 1 description',
                isClosed : false
            },
            {
                id : 2,
                title : 'Bug 2',
                description : 'Bug 2 description',
                isClosed : false
            }
        ]);
        httpTestingController.verify();
    })
})