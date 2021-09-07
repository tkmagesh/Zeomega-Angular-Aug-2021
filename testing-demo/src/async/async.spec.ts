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
})