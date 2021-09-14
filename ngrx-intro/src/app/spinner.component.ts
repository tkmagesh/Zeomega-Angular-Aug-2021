import { Component } from "@angular/core";
import { increment, decrement, reset } from './spinner.actions'
import { Store } from '@ngrx/store';

@Component({
    selector : 'app-spinner',
    template : `
        <h3>Spinner</h3>
        <hr>
        <div>
            <label>Delta :</label>
            <input type="number" #txtDelta>
        </div>
        <input type="button" value="Decrement" (click)="onDecrementClick(txtDelta.value)">
        <span>[{{counter}}]</span>
        <input type="button" value="Increment" (click)="onIncrementClick(txtDelta.value)">
        <br/>
        <input type="button" value="Reset" (click)="onResetClick()">
    `
})
export class SpinnerComponent{

    public counter : number = 0;

    constructor(private store : Store<{spinner : number}>){
        this.store.select('spinner')
            .subscribe(counter => this.counter = counter);
    }

    onIncrementClick(value : string){
        const action = increment(parseInt(value));
        console.log(action);
        this.store.dispatch(action);
    }
    onDecrementClick(value : string){
        this.store.dispatch(decrement(parseInt(value)));
    }
    onResetClick(){
        this.store.dispatch(reset());
    }
}