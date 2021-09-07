import { Component } from "@angular/core";


@Component({
    selector: 'app-greeter',
    template : `
        <h3>Greeter</h3>
        <hr>
        <label for="">User Name :</label>
        <input type="text" #txtUserName id="txtUserName">
        <input type="button" value="Greet" (click)="onGreetClick(txtUserName.value)">
        <div>{{message}}</div>
    `
})
export class GreeterComponent{
    message : string = "";

    onGreetClick(userName : string){
        this.message = "Hello " + userName;
    }
}