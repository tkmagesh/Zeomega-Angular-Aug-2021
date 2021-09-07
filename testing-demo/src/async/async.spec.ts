import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";
import { Observable, of } from "rxjs";

describe('Async tests', ()=> {
    it('should test for async operations', (done) => {
        function addAsync(x : number,y : number, callback : (result : number) => void){
            setTimeout(function(){
                const result = x + y;
                callback(result);
            }, 4000);
        }

        addAsync(10,20,function(result){
            console.log('result = ', result);
            expect(result).toBe(30)
            done();
        })
    })
    it("testing multiple async operations", fakeAsync(() => {
        let test1 = false;
        setTimeout(function(){
            test1 = true;
        }, 3000);

        let test2 = false;
        setTimeout(function(){
            test2 = true;
        }, 5000);

        flush(); //waits for the event queue to be empty (after all the macrotaks are executed)
        expect(test1).toBe(true);
        expect(test2).toBe(true);
    }))

    it("testing a promise", fakeAsync(() => {
        let test1 = false;

        let promise = new Promise((resolve, reject)=>{
            test1 = true;
            resolve(100)
        })

        expect(test1).toBe(true);
    }))

    it("testing a promise with timeout async operation", fakeAsync(() => {
        let counter = 0;
        Promise
            .resolve()
            .then(() => {
                counter = 10;
                setTimeout(() => {
                    counter += 1;
                }, 2000)
            })

        expect(counter).toBe(0);
        flushMicrotasks();
        expect(counter).toBe(10);
        flush()
        expect(counter).toBe(11);
    }));

    it("testing time interval based async operations with timeline", fakeAsync(() => {
        let counter = 0;

        Promise.resolve()
            .then(() => {
                counter = 10;
                setTimeout(() => {
                    counter += 1
                }, 2000)
            });
        
        expect(counter).toBe(0);
        flushMicrotasks(); //=> waits for microtasks to be completed
        expect(counter).toBe(10);
        tick(500);
        expect(counter).toBe(10);
        tick(500)
        expect(counter).toBe(10);
        tick(500)
        expect(counter).toBe(10);
        //flush(); //=> waits for all the macrotasks to be completed
        tick(500)
        expect(counter).toBe(11);
    }))

    it('async testing of observables', fakeAsync(() => {
        /* let counter = 0;
        const observable = new Observable(subscriber => {
            subscriber.next(10);
            subscriber.next(20);
            subscriber.next(30);
            subscriber.complete();
        });

        observable.subscribe(
            value => counter += value,
            error => console.log(error),
            () => console.log('complete')
        );

        expect(counter).toBe(0);
        flushMicrotasks();
        expect(counter).toBe(30); */

        let test = false;
        const test$ = of(test);
        test$.subscribe(val => {
            test = true;
            console.log('inside subscribe function')
        })
        flush();
        expect(test).toBe(true);
    }));
})

/* 
    Microtasks - Promise & Observables
        flushMicrotasks() - waits for all the microtasks to be executed

    Macrotasks - Timers, XHR, DOM events
        flush() - waits for all the macrotasks to be executed

    Macrotask may contain multiple microtasks
    A macrotask is said to be completed ony after all the associated microtasks are completed
*/

