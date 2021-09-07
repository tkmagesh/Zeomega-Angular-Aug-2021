import { Injectable } from "@angular/core";
import { Logger } from "./logger";

export class DateService{
    getCurrentDate() : Date {
        return new Date();
    }
}

@Injectable()
export class Greeter{
    constructor(private dateService : DateService, private logger : Logger){

    }
    public greet(userName : string) : string {
        this.logger.log(`Greeting for ${userName} triggered`);
        if (this.dateService.getCurrentDate().getHours() < 12){
            return `Hi ${userName}, Good Morning!`;
        } else {
            return `Hi ${userName}, Good Day!`;
        }
    }
}