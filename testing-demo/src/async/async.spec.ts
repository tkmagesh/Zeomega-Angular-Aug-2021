import { fakeAsync, flush } from "@angular/core/testing";

fdescribe('Async tests', ()=> {
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
})