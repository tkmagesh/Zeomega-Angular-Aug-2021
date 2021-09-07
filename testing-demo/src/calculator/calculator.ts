export class Calculator{
    
    operationCount : number = 0;

    public add(a: number, b: number): number{
        this.operationCount++;
        return a + b;
    }

    public subtract(a: number, b: number): number{
        this.operationCount++;
        return a - b;
    }
}