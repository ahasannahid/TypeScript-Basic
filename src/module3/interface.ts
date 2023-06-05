// // similer with type alias 

// type User = {
//     name : string;
//     age : number;
// };

// type rollNumber = number;

// type extendedUser = User & {
//     role : string;
// }

// interface IUser{
//     name : string;
//     age : number;
// }

// interface IExtendedUser extends IUser{
//     role : string
// }

// // object type data er jonne besi use hoy.

// // const userWithTypeAlias: User = {
// //     name : 'Type alias',
// //     age : 100
// // }


// const userWithInterface: IUser = {
//     name : 'Interface',
//     age : 200
// }

// // interface caile extend kora jay

// const user: IExtendedUser = {
//     name : 'IExtendedUser',
//     age : 20,
//     role : '08'
// }

// // object : object, function, array(special type of object)(eisob e interface use hobe. primtive e alias use korte hobe)

// // functin with type alias
// type addNumbersType = (num1:number, num2:number) => number

// const addNumber : addNumbersType = (number1, number2)=>number1 + number2
// // function e type alias besi use korbo

// // functin with interface

// interface IAddNumbers {
//     (num1:number, num2:number) : number
// }

// const addNumber2 : IAddNumbers = (number1, number2)=>number1 + number2


// // Array

// type rollNumbersType = number[]

// interface IRollNumberType {
//     [index : number] : number
// }

// const rollNumbers : IRollNumberType = [1, 4, 5]; //[index]