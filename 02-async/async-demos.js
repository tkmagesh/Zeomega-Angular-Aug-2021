(function(){
    //Sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const result = x + y;
        console.log(`   [@service] returning result`)
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] triggering the service`)
        const result = addSync(x,y);
        console.log(`[@client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient;

    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@service] returning result`)
            callback(result);
        }, 4000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] triggering the service`)
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`)
        });
    }

    window['addAsyncClient'] = addAsyncClient;

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const p = new Promise(function(resolve, reject){
            setTimeout(function(){
                const result = x + y;
                console.log(`   [@service] returning result`)
                resolve(result);
            }, 4000);
        });
        return p;
    }

    /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`)
        var p = addAsyncPromise(x,y);
        p.then(function(result){
            console.log(`[@client] result = ${result}`)
        })
    } 
    */

    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`)
        var result = await addAsyncPromise(x,y);
        console.log(`[@client] result = ${result}`)
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;

})()