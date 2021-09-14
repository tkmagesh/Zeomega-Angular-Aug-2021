import { Component } from "@angular/core";
import { increment, decrement } from './spinner.actions'
import { Store } from '@ngrx/store';

@Component({
    selector : 'app-spinner',
    template : `
        <h3>Spinner</h3>
        <hr>
        <input type="button" value="Decrement" (click)="onDecrementClick()">
        <span>[{{counter}}]</span>
        <input type="button" value="Increment" (click)="onIncrementClick()">
    `
})
export class SpinnerComponent{

    public counter : number = 0;

    constructor(private store : Store<{spinner : number}>){
        this.store.select('spinner')
            .subscribe(counter => this.counter = counter);
    }

    onIncrementClick(){
        const action = increment();
        console.log(action);
        this.store.dispatch(action);
    }
    onDecrementClick(){
        this.store.dispatch(decrement());
    }
}