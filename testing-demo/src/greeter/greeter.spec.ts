import { TestBed } from "@angular/core/testing";
import { DateService, Greeter } from "./greeter";
import { Logger } from "./logger";

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

//using jasmine spy
/* fdescribe("greeter", () =>{
    it("Should display 'Good Morning!' when greeted before 12", () => {
        const dateServiceSpy = jasmine.createSpyObj('DateService', {
            getCurrentDate: new Date(2021, 1,1,9,0,0)
        });
        dateServiceSpy.whoAmI = 'DateServiceSpy';
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
})  */

//using the angular module
/* fdescribe("greeter", () =>{
    it("Should display 'Good Morning!' when greeted before 12", () => {
        const dateServiceSpy = jasmine.createSpyObj('DateService', {
            getCurrentDate: new Date(2021, 1,1,9,0,0)
        });
        const loggerSpy = jasmine.createSpyObj('Logger', ['log']);

        TestBed.configureTestingModule({
            providers: [
                Greeter,
                { provide : DateService, useValue : dateServiceSpy},
                { provide : Logger, useValue : loggerSpy}
            ]
        });

        const greeter = TestBed.inject(Greeter);
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
        const loggerSpy = jasmine.createSpyObj('Logger', ['log']);

        TestBed.configureTestingModule({
            providers: [
                Greeter,
                { provide : DateService, useValue : dateServiceSpy},
                { provide : Logger, useValue : loggerSpy}
            ]
        });

        const greeter = TestBed.inject(Greeter);
        const userName = 'User1'
        const expectedGreetMsg = `Hi User1, Good Day!`
        const expectedLogMsg = `Greeting for User1 triggered`
        const result = greeter.greet(userName);
        expect(result).toBe(expectedGreetMsg);
        expect(dateServiceSpy.getCurrentDate).toHaveBeenCalled();
        expect(loggerSpy.log).toHaveBeenCalledWith(expectedLogMsg);
        
    });

    
})  */

//refactoring the TestBed creation to the 'beforeEach'
/* fdescribe("greeter", () =>{
    let loggerSpy : jasmine.SpyObj<Logger>;
    let greeter : Greeter;
    
    beforeEach(() =>{
        loggerSpy = jasmine.createSpyObj('Logger', ['log']);
        TestBed.configureTestingModule({
            providers: [
                Greeter,
                DateService,
                { provide : Logger, useValue : loggerSpy}
            ]
        });
        greeter = TestBed.inject(Greeter);
    });

    it("Should display 'Good Morning!' when greeted before 12", () => {
        //Arrange
        const dateService = TestBed.inject(DateService)
        spyOn(dateService, 'getCurrentDate').and.returnValue(new Date(2021, 1,1,9,0,0));
        const userName = 'User1'
        const expectedGreetMsg = `Hi User1, Good Morning!`
        const expectedLogMsg = `Greeting for User1 triggered`

        //Act
        const result = greeter.greet(userName);

        //Assert
        expect(result).toBe(expectedGreetMsg);
        expect(dateService.getCurrentDate).toHaveBeenCalled();
        expect(loggerSpy.log).toHaveBeenCalledWith(expectedLogMsg);
        
    });

     it("Should display 'Good Day!' when greeted after 12", () => {
        //Arrange
        const dateService = TestBed.inject(DateService)
        spyOn(dateService, 'getCurrentDate').and.returnValue(new Date(2021, 1,1,14,0,0));
        const userName = 'User1'
        const expectedGreetMsg = `Hi User1, Good Day!`
        const expectedLogMsg = `Greeting for User1 triggered`

        //Act
        const result = greeter.greet(userName);

        //Assert
        expect(result).toBe(expectedGreetMsg);
        expect(dateService.getCurrentDate).toHaveBeenCalled();
        expect(loggerSpy.log).toHaveBeenCalledWith(expectedLogMsg);
        
    });

    
})  */

fdescribe("greeter", () =>{
    let loggerSpy : jasmine.SpyObj<Logger>;
    let greeter : Greeter;
    let dateServiceSpy : jasmine.SpyObj<DateService>;

    beforeEach(() =>{
        loggerSpy = jasmine.createSpyObj('Logger', ['log']);
        dateServiceSpy = jasmine.createSpyObj('DateService', ['getCurrentDate']);

        TestBed.configureTestingModule({
            providers: [
                Greeter,
                { provide : DateService, useValue : dateServiceSpy},
                { provide : Logger, useValue : loggerSpy}
            ]
        });
        greeter = TestBed.inject(Greeter);
    });

    it("Should display 'Good Morning!' when greeted before 12", () => {
        //Arrange
        
        dateServiceSpy.getCurrentDate.and.returnValue(new Date(2021, 1,1,9,0,0));
        const userName = 'User1'
        const expectedGreetMsg = `Hi User1, Good Morning!`
        const expectedLogMsg = `Greeting for User1 triggered`

        //Act
        const result = greeter.greet(userName);

        //Assert
        expect(result).toBe(expectedGreetMsg);
        expect(dateServiceSpy.getCurrentDate).toHaveBeenCalled();
        expect(loggerSpy.log).toHaveBeenCalledWith(expectedLogMsg);
        
    });

     it("Should display 'Good Day!' when greeted after 12", () => {
        //Arrange
        dateServiceSpy.getCurrentDate.and.returnValue(new Date(2021, 1,1,14,0,0));
        const userName = 'User1'
        const expectedGreetMsg = `Hi User1, Good Day!`
        const expectedLogMsg = `Greeting for User1 triggered`

        //Act
        const result = greeter.greet(userName);

        //Assert
        expect(result).toBe(expectedGreetMsg);
        expect(dateServiceSpy.getCurrentDate).toHaveBeenCalled();
        expect(loggerSpy.log).toHaveBeenCalledWith(expectedLogMsg);
        
    });

    
}) 