export class DateService{
    getCurrentDate() : Date {
        return new Date();
    }
}
export class Greeter{
    constructor(private dateService : DateService){

    }
    public greet(userName : string) : string {
        if (this.dateService.getCurrentDate().getHours() < 12){
            return `Hi ${userName}, Good Morning!`;
        } else {
            return `Hi ${userName}, Good Day!`;
        }
    }
}