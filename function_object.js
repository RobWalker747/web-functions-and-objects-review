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

//Question5
const nuArr = (arr) => {
    let newArr =[] 
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] % 2 === 1){
            newArr.push(arr[i])
        }         
    }
    return newArr
}