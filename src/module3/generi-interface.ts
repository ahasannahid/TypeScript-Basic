type GenericTuple<x,y> = [x, y]

const relation: GenericTuple<string, string> = ['Nahid', 'gal gaddot']


type RelationWithSalaryType = {name:string, salary:number}

interface IRelationWithSalaryType {name:string, salary:number}

// not a good practice
const relationWithSalary : GenericTuple<object, string> = [
    {
        name: 'Nahid',
        salary: '5 TK'
    },
    'hawa'
]



// best practice
// const relationWithSalary2 : GenericTuple<{name:string, salary:number}, string> = [
//     {
//         name: 'Nahid',
//         salary: 111111
//     },
//     'hawa'
// ]
const relationWithSalary2 : GenericTuple<RelationWithSalaryType, string> = [
    {
        name: 'Nahid',
        salary: 111111
    },
    'hawa'
]

// interface
const relationWithSalary3 : GenericTuple<IRelationWithSalaryType, string> = [
    {
        name: 'Nahid',
        salary: 111111
    },
    'hawa'
]


// type GenericArray = Array<number>
type GenericArray<T> = Array<T>

// const rollNumbers:number[] = [44, 12, 4];
// const rollNumbers:Array<number> = [44, 12, 4];
// const rollNumbers:GenericArray = [44, 12, 4];
const rollNumbers:GenericArray<number> = [44, 12, 4];


// const rollNumbers2:string[] = ['44', '12', '4'];
// const rollNumbers2:Array<string> = ['44', '12', '4'];
const rollNumbers2:GenericArray<string> = ['44', '12', '4'];


// const rollNumbers3:Array<boolean> = [true, false];
const rollNumbers3:GenericArray<boolean> = [true, false];

// const userNameAndRollNumber: Array<{name:string, roll:number}> = [{
//     name: 'Mr x',
//     roll:  1
// },
// {
//     name: 'Mr y',
//     roll:  2
// }]




// const userNameAndRollNumber: GenericArray<{name:string, roll:number}> = [{
//     name: 'Mr x',
//     roll:  1
// },
// {
//     name: 'Mr y',
//     roll:  2
// }]


type NameRollType ={
    name:string,
    roll:number
}

const userNameAndRollNumber: GenericArray<NameRollType> = [{
    name: 'Mr x',
    roll:  1
},
{
    name: 'Mr y',
    roll:  2
}]
const userNameAndRollNumber2: GenericArray<NameRollType> = [{
    name: 'Mr z',
    roll:  1
},
{
    name: 'Mr u',
    roll:  2
}]



// Generic Interface
interface CrushIterface<T, U = null>{
    name: string,
    husband: T,
    wife?: U
}

const crush1 : CrushIterface<boolean, undefined> = {
    name: 'None',
    husband : true
}

const crush3 : CrushIterface<object, null> = {
    name: 'Kate',
    husband : {
        name: 'robi',
        salary: 0.01
    }
}
const crush4 : CrushIterface<{name: string, salary: number}, null> = {
    name: 'Kate',
    husband : {
        name: 'robi',
        salary: 0.01
    }
}

interface HusbandInterface{name: string, salary: number}
const crush5 : CrushIterface<HusbandInterface , string> = {
    name: 'Kate',
    husband : {
        name: 'robi',
        salary: 0.01
    },
    wife : 'ache'
}



interface PersonInterface{name: string, age: number}
const crush6: CrushIterface<PersonInterface, {name:string, age: number}>={
    name: 'kate',
    husband: {
        name: 'Nahid',
        age: 25
    },
    wife: {
        name: 'wings',
        age: 40
    }
}