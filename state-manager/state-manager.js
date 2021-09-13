let StateManager = (() =>{
    let _currentState = undefined;
    let _subscribers = [];
    let _reducer = undefined;

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function')
            _subscribers.push(callback);
    }

    //private utility function
    function _emitChange(){
        _subscribers.forEach(callback => callback())
    }

    function dispatch(action){
        let reducerResult = _reducer(_currentState, action)
        if (reducerResult === _currentState) return;
        _currentState = reducerResult;
        _emitChange();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function') 
            throw new Error('Invalid arguments(s). Reducer is mandatorty to create the store')
        _reducer = reducer;
        const store =  { getState, subscribe, dispatch };
        return store;
    }

    return { createStore }
})();