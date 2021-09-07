import { DateService, Greeter } from "./greeter";

/* 
class FakeDateServiceForMorning{
    getCurrentDate() : Date {
        return new Date(2021, 1,1,9,0,0);
    }
}

class FakeDateServiceForNoon{
    getCurrentDate() : Date {
        return new Date(2021, 1,1,14,0,0);
    }
} 
*/


//using custom fake services
/* class FakeDateService{
    private getCurrentDateCalled : boolean = false;

    constructor(private dt : Date){

    }
    getCurrentDate(){
        this.getCurrentDateCalled = true;
        return this.dt;
    }

    isGetCurrentDateCalled() : boolean {
        return this.getCurrentDateCalled;
    }
}

fdescribe("greeter", () =>{
    it("Should display 'Good Morning!' when greeted before 12", () => {
        //const fakeDateServiceForMorning = new FakeDateServiceForMorning();
        const fakeDateServiceForMorning = new FakeDateService(new Date(2021, 1,1,9,0,0));
        const greeter = new Greeter(fakeDateServiceForMorning);
        const userName = 'User1'
        const expectedGreetMsg = `Hi User1, Good Morning!`
        const result = greeter.greet(userName);
        expect(result).toBe(expectedGreetMsg);
        expect(fakeDateServiceForMorning.isGetCurrentDateCalled()).toBe(true);
    })
    it("Should display 'Good Day!' when greeted after 12", () => {
        //const fakeDateServiceForNoon = new FakeDateServiceForNoon();
        const fakeDateServiceForNoon = new FakeDateService(new Date(2021, 1,1,14,0,0));
        const greeter = new Greeter(fakeDateServiceForNoon);
        const userName = 'User1'
        const expectedGreetMsg = `Hi User1, Good Day!`
        const result = greeter.greet(userName);
        expect(result).toBe(expectedGreetMsg);
        expect(fakeDateServiceForNoon.isGetCurrentDateCalled()).toBe(true);
    })
}) */

fdescribe("greeter", () =>{
    it("Should display 'Good Morning!' when greeted before 12", () => {
        const dateServiceSpy = jasmine.createSpyObj('DateService', {
            getCurrentDate: new Date(2021, 1,1,9,0,0)
        });
        const loggerSpy = jasmine.createSpyObj('Logger', ['log'])
        const greeter = new Greeter(dateServiceSpy, loggerSpy);
        const userName = 'User1'
        const expectedGreetMsg = `Hi User1, Good Morning!`
        const expectedLogMsg = `Greeting for User1 triggered`
        const result = greeter.greet(userName);
        expect(result).toBe(expectedGreetMsg);
        expect(dateServiceSpy.getCurrentDate).toHaveBeenCalled();
        expect(loggerSpy.log).toHaveBeenCalledWith(expectedLogMsg);
    });

    it("Should display 'Good Day!' when greeted after 12", () => {
        const dateServiceSpy = jasmine.createSpyObj('DateService', {
            getCurrentDate: new Date(2021, 1,1,14,0,0)
        });
        const loggerSpy = jasmine.createSpyObj('Logger', ['log'])
        const greeter = new Greeter(dateServiceSpy, loggerSpy);
        const userName = 'User1'
        const expectedGreetMsg = `Hi User1, Good Day!`
        const expectedLogMsg = `Greeting for User1 triggered`
        const result = greeter.greet(userName);
        expect(result).toBe(expectedGreetMsg);
        expect(dateServiceSpy.getCurrentDate).toHaveBeenCalled();
        expect(loggerSpy.log).toHaveBeenCalledWith(expectedLogMsg);
    });
}) 