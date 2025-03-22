let arr1 = [1, 2, 3, 4, 5, 6]
let arr2 = [4, 3, 5]


//// map

// Array.prototype.mymap=function(cb){
//     let newarr=[]

//     for (let i = 0; i < this.length; i++) {
//        let elm=this[i]

//        let val=cb(elm,i,this)

//        newarr.push(val)

//     }
//     return newarr
// }

// let val=arr2.mymap((elm)=>{
//     return elm*2
// })
// console.log(val)

////Filter

// Array.prototype.myFilter = function (cb) {
//     let newArr = []

//     for (let i = 0; i < this.length; i++) {
//         let ele = this[i];

//         if (cb(ele, i, this)) { 
//             newArr.push(ele);
//         }

//     }
//     return newArr
// }

// let value = arr1.myFilter((ele) => {
//    return ele%2===0;
// })
// console.log(value);


////foreach

// Array.prototype.myForeach = function (cb) {

//     for (let i = 0; i < this.length; i++) {
//         cb(this[i], i, this);
//     }
// }

// arr2.myForeach((elm) => {
//     console.log(elm * 2);
// });


////reduce

// Array.prototype.myreduce = function (cb,initialValue) {
//     let acc = initialValue !== undefined ? initialValue : this[0];
//     let startIndex = initialValue !== undefined ? 0 : 1;

//     for (let i = startIndex; i < this.length; i++) {
//         acc = cb(acc, this[i], i, this);
//     }

//     return acc;
// }

// let value = arr2.myreduce((acc,ele) =>{
//     return acc*ele
// },1)
// console.log(value);

