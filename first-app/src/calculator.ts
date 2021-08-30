export function add(x : number, y : number) : number {
    return x + y;
}

export function subtract(x : number, y : number) : number {
    return x - y;
}

function isOdd(x : number) : boolean {
    return x % 2 === 1;
}

function isEven(x : number) : boolean {
    return x % 2 === 0;
}

/* export default isOdd;

export default isEven; */

let utils = { isOdd, isEven };

export default utils;