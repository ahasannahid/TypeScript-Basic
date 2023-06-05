let emni: any;

emni = 'Next level web development';

(emni as string).length;
// <string>emni .length;(Type assertion angle bracket diye evabeu lekha jay)
// as syntex use kora better solution
function kgToGram (param: string | number) : string | number | undefined{
    if(typeof param === 'string'){
        const value = parseFloat(param) * 1000
        return `The converted result is : ${value} Gram`
    }
    if(typeof param === 'number'){
        const value = param * 1000
        return `The converted result is : ${value} Gram`
    }
}

const resultToBeNumber = kgToGram(1000) as number;

const resultToBeString = <string>kgToGram('1000');

type CustomeErrorType = {
    message: string
}

try{

}
catch(err){
    console.log((err as CustomeErrorType).message)
}