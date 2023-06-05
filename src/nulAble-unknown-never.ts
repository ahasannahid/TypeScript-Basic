// // NullAble Type

// const searchName = (value : string | null) => {
//     if(value === null){
//         console.log('There is nothing to search')
//     }
//     else{
//         console.log('searching')
//     }
// }
// searchName(null);

// // Unknown Type

// // kmh ke meter per second korte cacchi

// const getMyCarSpeed = (speed : unknown) => {
//     // console.log(speed);
//     if(typeof speed === 'number'){
//         const convertedSpeed = (speed * 1000) / 3600
//         console.log(`My speed is ${convertedSpeed} meter per second`);
//     }
//     if(typeof speed === 'string'){
//         // const value = speed.split(' ') // array hisebe thakbe['10' , 'kmh']

//         const [value, unit] = speed.split(' ')



//         const convertedSpeed = (parseFloat(value) * 1000) / 3600
//         console.log(`My speed is ${convertedSpeed} meter per second`)
//     }

//     else{
//         console.log('There is wrong Type')
//     }
    
// }

// getMyCarSpeed(10);
// getMyCarSpeed('20 Kmh'); // 10 kmh ke split korte hobe
// getMyCarSpeed(true);

// // error through kora
// // throw new Error('Error is mortal');


// // Never Type(kokhono kisu return korbe na)

// function throwError(message : string) : never{
//     throw new Error(message);
// }

// // throwError('Everything is error');


 
