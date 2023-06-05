// // Normal Function
// // type na deur error na asar jonne tsconfig.json file e noImplicitAny false kore dite hobe.
// // function add(num1 : number, num2 : number):number {
// //     return num1 + num2;
// // }

// // Default Parameter //default parameter sudu second parameter e deua jabe
// function add(num1 : number , num2 : number = 10):number {
//     return num1 + num2;
// }

// add(2); 

// const addArrow = (num1 : number, num2 : number): number => num1+ num2;

// const arr = [1, 4, 5,];

// // const newArray = arr.map(element => element*element);
// const newArray = arr.map((element : number) => element*element);
// // function ke object er vitor use kora jay. tokhn etake function na bole method bola hoy

// const person : {
//     name: string,
//     balance: number,
//     addBalance(money : number) : void;
// } = {
//     name: 'Nahid',
//     balance: 5,
//     addBalance(money : number){
//         // return this.balance + money;
//         // return `My New Valance is ${this.balance + money}`
//         console.log(`My New Valance is ${this.balance + money}`)
//     }
// }

// // arrow function e this kaj kore na.
// // function e return type na thakle type hobe void.



// // spread operator

// const myFriends = ['abul', 'jamal', 'kamal'];
// const newFriends = ['rahim', 'karim', 'rubel',]

// myFriends.push(...newFriends)
// // console.log(myFriends);

// // rest operator

// const greatFriends = (...friends : string[]) : void=> {
//     friends.forEach((friend) => 
//     console.log(`Hi ${friend}`)
//     )
// }


// greatFriends('ahshem', 'hashem', 'bashem', 'kamel', 'ruso');



// // Array and object detructring

// const [bestFriend] = myFriends;

// const myBestFriend = {
//     fullName: 'bashar',
//     age: 24
// }

// const {fullName : myFullName} = myBestFriend;
// console.log(myFullName);
// // const {fullName} = myBestFriend;

// // const {fullName : string} = myBestFriend destructring e type  eivabe dile etake name alies hisebe nibe. mane fullName er onno kono name deua

// // destructring e type bole deua jabena
