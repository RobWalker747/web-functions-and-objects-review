//Question 1
// const avgNum = (num1, num2) => {
//     let avg = (num1 + num2)/2
//     return avg;
// }
// console.log(avgNum(4,6));

//Question2 
// const avgNum3 = (num1, num2, num3) => {
//     let avg = (num1+ num2 + num3) / 3
//     return avg;
// }
// console.log(avgNum3(1,3,5));

// // //Question3
// const avgArr = (arr) => {
//     let avg = 0;
//     for(let i = 0; i < arr.length; i++){
//         avg += arr[i];  
//     }
//     return avg / arr.length
// }

// console.log(avgArr([4,6]))

//question4
// const nuArr = (arr) => {
//     let newArr =[] 
//     for(let i = 0; i <= arr.length; i++) {
//         if(arr[i] % 2 === 1){
//             newArr.push(arr[i])
//         }         
//     }
//     return newArr
// }
// console.log(nuArr([1,2,3,4,5,6]))

// //Question5
// const nuArr = (arr) => {
//     let newArr =[] 
//     for(let i = 0; i <= arr.length; i++) {
//         if(arr[i] / 2 === 1){
//             newArr.push(arr[i])
//            return("True")
//         } else {
//             return("False")
//         }         
//     }
//     // return newArr
// }
// console.log(nuArr([-4,3,-2,4]))

// //Question6
// const lwStr = (arr) => {
//     // let lwc = [];
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = arr[i].toLowerCase();
//     }
//     return arr;
// }
// console.log(lwStr(["HELLO", "THERE", "THESE", "ARE", "SOME", "STRINGS"]));

// //Quesrtion7
// const comStr = (arr) => {
// return arr.join(" ");
   
// }
// console.log(comStr(["It's", "not", "a", "bug.", "It's", "an", "undocumented", "feature!"]));

// //Question8
// const ranNum = (max) => {
//  return Math.floor(Math.random()*max)
// }

// console.log(ranNum(100))

// //Question9
// const absVa = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//       arr[i] = Math.abs(arr[i]);
//       sum += arr[i]

//     }
//     return sum
// }
// console.log(absVa([3,-4,5,-6]));

//Question10
const findCelsius = (num) => {
    let fah = num;
    let cel;
        cel = ((fah - 32)* 5/9)
        return cel   
}
console.log(findCelsius(212))