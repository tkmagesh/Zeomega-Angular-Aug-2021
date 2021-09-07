import { Calculator } from "./calculator";

fdescribe('Calculator', ()=> {
    it('should add two postive number', ()=> {
        //arrange
        const calculator = new Calculator();
        const x = 100, y = 200;
        const expectedResult = 300;

        //act
        const result = calculator.add(x, y);

        //assert
        expect(result)
            .withContext("Simple addition is failing")
            .toBe(expectedResult);
    })
    it('should add two negative number', ()=> {
        //arrange
        const calculator = new Calculator();
        const x = -100, y = -200;
        const expectedResult = -300;

        //act
        const result = calculator.add(x, y);

        //assert
        expect(result).toBe(expectedResult);
    })
    xit('should fail', () => {
        fail()
    });
})