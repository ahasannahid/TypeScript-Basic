// arrow function
const createArray=(param:string):string[]=>{
    return [param];
}

// generic arrow function

const createArray1=<T>(param:T):T[]=>{
    return [param];
}

const result1 = createArray('Banglaesh')
const result2 = createArray1<string>('true')