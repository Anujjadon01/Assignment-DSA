// Q=1

// let arr=[1,2,3,4,5,6];
// for (let i = arr.length-1; i >=0 ; i--) {
//     console.log(arr[i]);  
// }

// Q=2

// let arr2=[1,2,3,5,6];
// let max=arr2[0];
// let min=arr2[0];
// for (let i = 0; i < arr2.length; i++) {
//     if(arr2[i]>max){
//         max=arr2[i];
//     }else if(arr2[i]<min){
//         min=arr2[i];
//     }
    
// }
// console.log(max,min);

// Q=3

// let arr3=[2,1,4,3,5,6];
// let newarr=arr3.sort((a,b)=>a-b);
// let k=6;
// console.log("min",newarr[k-1]);

// let arr3=[2,1,4,3,5,6];
// let newarr=arr3.sort((a,b)=>b-a);
// let k=3;
// console.log("maximum",newarr[k-1]);

// Q=4

// let arr4=[1,-2,2,3,-5,4,-6];
// for (let i = 0; i < arr4.length; i++) {
//     for (let j = arr4.length; j >i ; j--) {
//         if(arr4[j]<arr4[j-1]){
//             [arr4[j],arr4[j-1]]=[arr4[j-1],arr4[j]]
//         }
//     }
// }
// console.log(arr4);

// Q=5

// let arr5=[8,4,3,2,1];
// let count=0;
// for (let i = 0; i < arr5.length; i++) {
//     for (let j = i; j < arr5.length; j++) {
//         if(arr5[i]>arr5[j]){
//             count++;
//             console.log([arr5[i],arr5[j]]); 
//         }
        
//     }
// }
// console.log(count);

// Q=6

// let arr6=[1,2,-2,3,-4,5,-3,6];
// let max_sum=arr6[0];
// let sum=0;
// for (let i = 0; i < arr6.length; i++) {
//     sum=Math.max(arr6[i],sum+arr6[i]);
//     max_sum=Math.max(sum,max_sum);
    
// }
// console.log(max_sum);

// Q=7

// let array=[1,3,4,2,5];
// let newarr=array.sort((a,b)=>b-a);
// let n=3;
// console.log("largest",newarr[n-1]);

// Q8
// let a=[1,2,3,4];
// console.log(a[0]);
// console.log(a.length);


// Q=9

//  let srt1="abcccdffes"
//  let obj={};
// for (let i = 0; i < srt1.length; i++) {
//     if(obj[srt1[i]]){
//         obj[srt1[i]]+=1;
//     }else{
//         obj[srt1[i]]=1
//     } 
// }
// console.log(obj);

// Q=10

let arr = [1,2,2,3,4,3,5]                                       
let obj = {};
let res = [];
k = 1;

function oneoccuring() {
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1
        } else {
            obj[arr[i]] = 1
        }
    }
    for (let key in obj) {
        if (obj[key] === k) {
            res.push(key)

        }
    }
    console.log(res);
}
oneoccuring()









