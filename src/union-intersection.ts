// // Union
// // type NoobDeveloper = {
// //     name : string
// // };

// // type JuniorDeveloper = {
// //     name : string,
// //     experties : string,
// //     experience : number
// // };



// // InterSection
// type NoobDeveloper = {
//     name : string
// };

// // InterSection
// type JuniorDeveloper = NoobDeveloper & {
//     experties : string,
//     experience : number
// };

// // Enum Type. Enum Recommended na
// // indexing 0 theke suru hobe. Eitake overwrite kora jay. 
// enum Level{
//     junior = 'Junior',
//     mid = 'Mid',
//     senior = 'Senior'
// }

// type NextLevelDeveloper = JuniorDeveloper & {
//     leadershipExperience : number;
//     // level : string;
//     level : 'Junior' | 'Mid' | 'Senior';
//     // enum
//     // level : Level
// }

// // Union
// // const newDeveloper : NoobDeveloper | JuniorDeveloper = {
// //     name : 'Ahasan Nahid',
// //     experties : 'JavaScript',
// //     experience : 1
// // }


// // InterSection
// const newDeveloper : JuniorDeveloper = {
//     name : 'Ahasan Nahid',
//     experties : 'JavaScript',
//     experience : 1
// }

// const developer : NextLevelDeveloper = {
//     name : 'Nahid',
//     experties : ' TypeScript',
//     experience : 1,
//     leadershipExperience : 2,
//     level : 'Mid'
//     // Enum
//     // level : Level.senior
// }

