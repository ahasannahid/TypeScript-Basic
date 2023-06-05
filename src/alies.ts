// // Type alies
// // string, object, array, boolean, function sob khetrei kaj kore.

// type CrushType = {
//     name : string,
//     age ?: number,  //Optional Type
//     profession : string,
//     address : string
// }

// const crush1: CrushType = {
//     name : 'Purnima',
//     age : 22,
//     profession : 'student',
//     address : 'Dhaka'
// };

// const crush2: CrushType = {
//     name : 'Bushra',
//     // age : 24,
//     profession : 'housewife',
//     address : 'Mymensingh'
// };

// const crush3: CrushType = {
//     name : 'Alia',
//     age : 27,
//     profession : 'housewife',
//     address : 'Mumbai'
// };

// type CrushMarriedType = boolean;

// const isCrushMarried : CrushMarriedType = false;


// type CourseNameType = string;
// const courseName : CourseNameType = 'Next level web development' ;

// type OperationType = (x : number, y : number) => number
// // function alies

// const calculate = (number1 :number, number2 :number, operation:OperationType) => {
//     return operation(number1, number2);
// }
// // const calculate = (number1 :number, number2 :number, operation:(x:number, y:number)=> number) => {
// //     return operation(number1, number2);
// // }

// calculate(10, 20,(x,y) => x+y);
// calculate(10, 20,(x,y) => x-y);
// calculate(10, 20,(x,y) => x*y);
// calculate(10, 20,(x,y) => x/y);