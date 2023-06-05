// // ternary operator

// const age : number = 24;

// // if(age >= 18){
// //     console.log('Adult')
// // }
// // else{
// //     console.log('No')
// // }

// const isAdult = age >= 18 ? 'Yes' : 'No'

// // console.log(isAdult);

// // Nullish Coeslancing Operator(Double question Mark)
// // sudu null and undefined er jonne kaj kore
// // ** null or undefine er upor base kore ekta default value set kore dey.

// const isAuthenticatedUser = undefined;
// const userName = isAuthenticatedUser ?? 'Guess'

// // console.log(userName)

// type ManusType = {
//     name : string,
//     age : number,
//     address:{
//         city : 'No City',
//         road : 'No Road',
//         home ?:  '',
//     }
// }

// const manush1 : ManusType = {
//     name : 'Nahid',
//     age : 24,
//     address:{
//         city : 'No City',
//         road : 'No Road',
//     }
// }

// const home = manush1?.address?.home ?? 'No Home'  // default value hisebe No home dekhabe
// console.log({home});
