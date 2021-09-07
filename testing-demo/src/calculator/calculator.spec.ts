import { Calculator } from "./calculator";

describe('Calculator', ()=> {

    let calculator: Calculator ;

    beforeEach(() => {
        calculator = new Calculator();
    })

    it('should add two postive number', ()=> {
        //arrange
        
        const x = 100, y = 200;
        const expectedResult = 300;

        //act
        const result = calculator.add(x, y);

        //assert
        expect(result)
            .withContext("Simple addition is failing")
            .toBe(expectedResult);
        expect(calculator.operationCount).toEqual(1);
    });

    it('should add two negative number', ()=> {
        //arrange
        //const calculator = new Calculator();

        const x = -100, y = -200;
        const expectedResult = -300;

        //act
        const result = calculator.add(x, y);

        //assert
        expect(result).toBe(expectedResult);
        expect(calculator.operationCount).toEqual(1);
    });

    it('should fail', () => {
        fail()
    });
})