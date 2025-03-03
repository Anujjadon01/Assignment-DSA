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

// let arr5=[8,4,3,2,1,8];
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
// let a=[1,3,4,5,2];
// console.log(a[0]);
// console.log(a.length-1);


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

// let arr = [1, 2, 2, 3, 4, 3, 5]
// let obj = {};
// let res = [];
// k = 1;

// function oneoccuring() {
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]]) {
//             obj[arr[i]] += 1
//         } else {
//             obj[arr[i]] = 1
//         }
//     }
//     for (let key in obj) {
//         if (obj[key] === k) {
//             res.push(key)

//         }
//     }
//     console.log(res);
// }
// oneoccuring()



// hayorder function Q

// map..............

// Q=1
// function add(arr){
//     let p=arr.map((ele)=>ele+ele);
//     return p;
// }
// let arr=[1,2,3];
// console.log(add(arr));

// Q=2

// let arr=[0,25,100];
// function m(arr){
//     let che=arr.map((ele)=>(ele*9/5+32));
//     return che;
// }
// console.log(m(arr));

// Q=3

// function up(ob){
//     let p=ob.map((ele)=>ele.name);
//     return p;
// }
// let ob=[{name: "Alice", age: 25}, {name: "Bob", age: 30}];
// console.log(up(ob));

// Q=5

// function squar(arr){
//     let p=arr.map((ele)=>ele*ele);
//     return p;
// }
// let arr=[2,3,4];
// console.log(squar(arr));

// Q=4
// function capitalizeWords(arr) {
//     return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// }
// console.log(capitalizeWords(["hello", "world"]));


// foreach................

// Q=1
// let str=["apple", "banana", "cherry"];
// function p(str){
//     let a=str.forEach((ele)=>console.log(`${ele}`));
//     return a;
// }
// p(str);

// Q=3

// let arr = [1, 2, 3, 4, 6,8];
// let sum = 0;
// function p(arr) {
//     arr.forEach(ele => {
//         if (ele % 2 === 0) {
//             sum++;
//         }
//     });
//     return sum;
// }
// console.log(p(arr));

// Q=2

// let arr=[1,2,3,4];
// let sum=0;
// function add(arr){
//     arr.forEach(e=>{
//         sum+=e;
//     })
//     return sum;
// }
// console.log(add(arr));

// Q=4
// let arr=[{item: "apple", price: 100}, {item: "banana", price:50}];
// function p(arr){
//     arr.forEach(item=>{
//         item.price=item.price*0.9;
//     });
//     return arr;
// }
// console.log(p(arr));

// Q=5
// let str=["hello","world"];
// let result=[];
// function p(str){
//     str.forEach(ele=>{
//         result.push(ele+"!");
//     })
//     return result;
// }
// console.log(p(str));


// let arr=[{name: "Alice", age: 25}, {name: "Bob", age: 30}];
// function o(arr){
//     let p=arr.map((ele)=>ele.name);
//     return p;
// }
// console.log(o(arr));



// filter..............

// Q=1
// let arr=[1, 2, 3, 4, 5, 6];
// function even(arr){
//     let ev=arr.filter((ele)=>ele%2===0);
//     return ev;
// }
// console.log(even(arr));

// Q=2
// let arr=[-3, 4, -1, 6, -7, 9,0];
// function na(arr){
//     let che=arr.filter((ele)=>ele>=0);
//     return che
// }
// console.log(na(arr));

// Q=3
// let str=["apple", "banana", "cat", "strawberry"];
// let p=str.filter((ele)=>ele.length>5);
// console.log(p);

// Q=5
// let arr=[{name: "Alice", age: 17}, {name: "Bob", age: 20}];
// let p=arr.filter((ele)=>ele.age>=18);
// console.log(p);

// Q=4

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function prime(arr) {
//     let primes = arr.filter(isPrime);
//     console.log(primes);
// }

// prime(arr);








// date 12..........................

// Q=1
// function prim(a){
//     if(a<2){
//         return false;
//     }
//     for (let i = 2; i < a; i++) {
//         if(a%2===0){
//             return false;
//         }

//     }
//     return true
// }
// console.log(prim(59));

// Q=2
// function st(a){
//     let ar=a.split("")
//     let stre="";
//     for (let i = ar.length-1; i>=0; i--) {
//         stre+=ar[i]

//     }
//     return stre
// }
// console.log(st("anuj"));

// Q=3
// function fe(a){
//     if(a===0||a===1){
//         return 1;
//     }
//     return a*fe(a-1);
// }
// console.log(fe(5));

// Q=4
// function add(arr){
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i];

//     }
//     return sum;
// }
// let arr=[1,2,3]
// console.log(add(arr));

// Q=5
// function isPalindrome(str) {
//     let i = 0;
//     let b = str.length - 1;

//     while (i < b) {
//         if (str[i] !== str[b]) {
//             return false;
//         }
//         i++;
//         b--;
//     }
//     return true;
// }
// console.log(isPalindrome("mam"));





// Date 13 february........................

// Q=1
// function p(arr1,arr2){
//     let a=[...arr1,...arr2];
//     return a;
// }
// let arr1=[1,2,3,4];
// let arr2=[5,6,7]
// console.log(p(arr1,arr2));

// q=2

// const person = { name: "Alice", age: 25 };
// function p(person){
//     let a={...person,age:30};
//     return a;
// }
// console.log(p(person));

// Q=3

// function p(...arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i];
//     }
//     return sum;

// }
// console.log(p(5, 10, 15, 20));

// Q=4

// const numbers = [1, 2, 3, 4, 5, 6];
// let [A,B,...c]=numbers;
// console.log((`first = ${A} second = ${B} rest = [${c}]`));


// Q=5

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// let a={...obj1,...obj2}
// console.log(a);

// Q=6

// const user = { id: 101, name: "John", role: "Admin" }
// function p(user){
//     let {role,...p}=user;
//     return p
// }
// console.log(p(user));


// Q=7

// const numbers = [45, 78, 12, 89, 23];
// function p(numbers){
//    let max=Math.max(...numbers);
//     return max;
// }
// console.log(p(numbers));


// Q=8

// function greet(firstName, ...messages) {
//        console.log(`"${firstName}:${messages.join(", ")}"`);
//     }

// greet("Alice", "Hello", "Good Morning", "How are you?");

// Q=9

// let a="apple";
// let b="Banana";
// [a,b]=[...[b,a]];
// console.log(`a = ${a}, b = ${b}`);


// Q=10

// const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];
// console.log([...nestedArr].flat(2));



// Date..................15

// Q=1
// const smallest=(array,k)=>{
//     for (let i = 0; i < array.length; i++) {
//     for (let j = array.length-1; j>i; j--) {
//     if (array[j]>array[j-1]) {
//     [array[j],array[j-1]]=[array[j-1],array[j]]
//     }
//     }
//     }
//     return array[k-1]
//     }
// const arr = [[3, 5, 1], [12, 7, 9], [14, 10, 4]];
// let array=arr.flat(2);
//     const k=3
//     console.log(smallest(array,k))

// Q=2
// const arr = [1, 2, 4,5,6,7];
// function che(arr,n){
//     let p=(n * (n + 1)) / 2
//     let sum=arr.reduce((ele,e)=>ele+e);
//     let c=p-sum;
//     return c;
// }

// console.log(che(arr,7));


// Q=3


// function concatenateArrays(arr1,arr2){
//     let a=[...arr1,...arr2];
//     return a;
// }
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log(concatenateArrays(arr1,arr2));

// Q=4

// const str = "JavaScript is great and JavaScript is fun!";
// let newstr = str.split(" ");
// let obj={}

// function words(newstr) {
//     for (let i = 0; i < newstr.length; i++) {
//         if (obj[newstr[i]]) {
//            console.log(newstr[i])
//            break;
//         }else{
//             obj[newstr[i]]=1
//         }    

//         }

// }

// words(newstr);


// Q=5

// const arr = [2, 7, 11, 15];

// function sum(arr,tar) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i]+arr[j]==tar) {
//                 console.log([i,j]);   
//             }
//         }
//     }
// }

// sum(arr,9)

// const str = "JavaScript is great and JavaScript is fun!";
// let newstr = str.split(" ");
// function words(newstr) {
//     for (let i = 0; i < newstr.length; i++) {
//         if (i===0) {
//            console.log(newstr[i])

//         }else if(i===newstr.length-1){
//            console.log(newstr[i])

//         }    

//         }

// }

// words(newstr);



// pdf.........................................Q


// const arr=[1,2,3,4,5]
// let res=[]
// function a(arr) {
//     for (let i = arr.length-1; i >=0; i--) {
//         res.push(arr[i])
//     }
//     console.log(res);

// }

// a(arr)



// const arr=[1,2,3,4,5]

// let max=0
// let min=arr[0]

// function maxx(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>max) {
//             max=arr[i]
//         }else if(min>arr[i]){
// min=arr[i]
//         }
//     }
//     console.log(max,min);

// }

// maxx(arr)


// const arr=[4,5,1,2,3]
// let k=5
// function kthmax(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j]<arr[j+1]) {
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }

//     console.log(arr[k-1]);

// }

// kthmax(arr)




// let arr = [-1, 1, 1,-2, 1];
// function move(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j]>arr[j+1]) {
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     console.log(arr);

// }

// move(arr)



// let arr = [1, 0, 3, 1, 1, 1, 0, 0, 3, 3, 0, 1]
// let a0=0
// let a1=0
// let a3=0

// function count(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]===0) {
//             a0++
//         }else if(arr[i]==1){
//             a1++
//         }else if(arr[i]==3){
//             a3++
//         }
//     }

//     console.log(a0,a1,a3);


//     for (let j = 0; j < arr.length; j++) {
//         if (a0>0) {
//             arr[j]=0
//             a0--
//         }else if(a1>1){
//             arr[j]=1
//         a1--
//         }else if(a3>3){
//             arr[j]=3
//         a3--
//         }
//     }
// console.log(arr);

// }

// count(arr)


// let arr=[-2,1,-3,4,-1,2,1,-5,4]
// let min=0
// let max=arr[0]
// function findsub(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         min=Math.max(arr[i],min+arr[i])
//         max=Math.max(min,max)
//     }
//     console.log(max);

// }
// findsub(arr)



// const arr1=[2,5,9,6,3,8,9,7,1]
// let res=[]
// let arr=arr1.sort()
// function duplicate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]!==arr[i+1]) {
//             res.push(arr[i])
//         }
//     }
//     console.log(res);

// }

// duplicate(arr)




// const arr1 = [1, 3, 5, 7];
// const arr2 = [0, 2, 6, 8, 9];

// let arrn1=arr1.length
// let arrn2=arr2.length

// function a() {
// let i=0
// let j=0
// while(i<arrn1){
//     if (arr1[i]>arr2[j]) {
//         [arr1[i],arr2[j]]=[arr2[j],arr1[i]]
//     }
//     i++
// }
// console.log([...arr1,...arr2].sort());

// }

// a()



// const arr = [8, 4, 2, 1];
// let count=0
// let res=[]
// function repeat(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i]>arr[j]) {
//                 res.push([arr[i],arr[j]])
//             count++
//             }
//         }
//     }
//     console.log(res,count);

// }

// repeat(arr)


// const arr = [7, 1, 5, 3, 6, 4]
// let maxprofit=arr[0]
// let pro=0

// function buysell(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       maxprofit =Math.min(maxprofit,arr[i])
//       let profit=arr[i]-maxprofit
//      pro=Math.max(profit,pro)
//     }
//     console.log(pro);

// }

// buysell(arr)




// const arr = [7, 1, 5, 3, 6, 4];
//  const k = 10;

//  function equal(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i]+arr[j]==k) {
//                 console.log(arr[i],arr[j]);

//             }
//         }
//     }
//  }

//  equal(arr)



// const arr1 = [7, 1, 5, 3, 6, 4];
// const arr2 = [1, 3, 6, 8, 3, 0];
// const arr3 = [1, 3, 9, 1, 2, 0];

// let a1=new Set(arr1)
// let a2=new Set(arr2)
// let a3=new Set(arr3)

// let a=[...a1].filter((ele)=>a1.has(ele)&&a2.has(ele)&&a3.has(ele))
// console.log(a);





// const arr = [7, 4, 4, 4, 6];
// let min=arr[0]
// let max=arr[0]
// function findsub(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2!==0){
//         min=Math.max(arr[i],min+arr[i])
//         max=Math.max(min,max)
//     }
// }
//     console.log(max);

// }
// findsub(arr)



// const arr = [1, 2, 4, 5, 6, 2];
// let min=0
// let max=arr[0]
// function findsub(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         min=Math.max(arr[i],min+arr[i])
//         max=Math.max(min,max)
//     }
//     console.log(max);

// }
// findsub(arr)




// const arr = [1, 2, 4, 5, 6, 2];
// let min=0
// let max=arr[0]
// function findsub(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         min=Math.max(arr[i],min*arr[i])
//         max=Math.max(min,max)
//     }
//     console.log(max);

// }
// findsub(arr)





// const arr1=[[1,2,3],[4,5,6,7],[8,9,10]]

// let arr=arr1.flat()
// let k=3
// let a=arr.sort((a,b)=>b-a)
// console.log(a[k-1]);




// const arr1=[1,2,3,9,3,5,2]
// let arr=arr1.sort()
// let res=[]

// function removedup(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr.includes(arr[i],i+1)) {
//             res.push(arr[i])
//         }
//     }
//     console.log(res);

// }

// removedup(arr)



// const arr=[1,2,3,5]

// function first(arr) {
//     console.log(arr[0]);
// console.log(arr[arr.length-1]);

// }

// first(arr)


// const arr1=[1,2,3,5];
// let n=5;
// let sum=0
// let a=n*(n+1)/2

// for (let i = 0; i < arr1.length; i++) {
//     sum+=arr1[i]
// }
// console.log(a-sum);



// let n1=[[1],[2]]
// let n2=[3,[4,5]];

// let a=[...n1,...n2].flatMap((ele)=>ele)

// console.log(a);



//  let str1 ='aafffeeeeccc'

//  let obj={}
// let arr=[]
//  function findOccuring(str1) {
//     for (let i = 0; i < str1.length; i++) {
//         if (obj[str1[i]]) {
//             obj[str1[i]]+=1
//         }else{
//             obj[str1[i]]=1
//         }
//     }

//     for (const key in obj) {
//         arr.push(key,obj[key])
//     }

//     console.log(arr.join(""));

//  }

//  findOccuring(str1)





//  let str1 = [1, 1,1, 2, 2,3,3,3,4 ];
//  let obj={}
//  function findOccuring(str1) {
//     for (let i = 0; i < str1.length; i++) {
//         if (obj[str1[i]]) {
//             obj[str1[i]]+=1
//         }else{
//             obj[str1[i]]=1
//         }
//     }

//     for (const key in obj) {
//         if (obj[key]!==2) {
//             console.log(key);

//         }
//     }


//  }

//  findOccuring(str1)





// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let target = 6


// function binary(arr,target) {
//     let start=0
//     let end=arr.length-1
//     let i=0
//     while(i<=end){
// let mid=Math.floor((start+end)/2)

// if (arr[mid]==target) {
//     return mid
// }else if(arr[mid]<target){
// start=mid+1
// }else{
//     end=mid-1
// }
//     }
//     return -1
// }

//  console.log(binary(arr,target))



//  let str1="hello world hello"
// let str=str1.split(" ")
// let obj={}
// function repeat() {

//     for (let i = 0; i < str.length; i++) {
//         if (obj[str[i]]) {
//             obj[str[i]]+=1
//         }else{
//             obj[str[i]]=1
//         }
//     }

//     for (const key in obj) {
//         if (obj[key]>1) {
//             console.log(key);

//         }
//     }


// }

// repeat()



// let arr=[2,7,11,15]
// let target=9

// function sum(arr,target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i]+arr[j]==target) {
//                 console.log([i,j]);

//             }
//         }
//     }
// }

// sum(arr,target)



// let str1="abccccdd"
// let str=str1.split("")
// let length=0
// let obj={}
// let flag=false


// function maxlength() {
//    for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//         obj[str[i]]+=1
//     } else {
//         obj[str[i]]=1
//     }

//     for (const key in obj) {
//         if (obj[key]%2==0) {
//             length+=obj[key]
//         }else{
//             length=obj[key]-1
//             flag=true
//         }
//         }
//     if (flag) {
//         length++
//     }
//     }

// console.log(length);

//    } 
// maxlength()




// linked list................

// Q=1

// class node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }
// let a = new node(1)
// let b = new node(2)
// let c = new node(3)
// let temp = new node(4)
// a.next = b
// b.next = c
// let head = a;
// let current = head;
// function firstadd() {
//     temp.next = current
//     current = temp
//     while (current != null) {
//         console.log(current.data);
//         current = current.next
//     }
// } 
// firstadd()


// Q=2

// class node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }
// let a = new node(1)
// let b = new node(2)
// let c = new node(3)
// let temp = new node(4)
// a.next = b
// b.next = c
// let head = a;
// let current = head;
// function Lastadd() {

//     while (current != null) {
//         console.log(current.data);
//         current = current.next
//     }
//     temp.next = current
//     current = temp

//     while (current != null) {
//         console.log(current.data);
//         current = current.next
//     }
// } 
// Lastadd()

// Q=3

// class node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }
// let a = new node(1)
// let b = new node(2)
// let c = new node(3)
// let d = new node(4)
// let e=new node(5)
// a.next = b
// b.next = c
// c.next=d
// d.next=e
// let head = a;
// let current = head;
// function Lastadd(current,tl,position) {
//     while (current!= null && current.data!=position) {
//         console.log(current.data);
//         current = current.next
//     }
// tl.next=current
//     current=tl
//     head=current
//     while(current!=null){
//         console.log(current.data);
//         current = current.next
//     }

// } 
// Lastadd(current,new node(10),3)


// Q=4.............

// class node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }
// let a = new node(1)
// let b = new node(2)
// let c = new node(3)
// let d = new node(4)
// let e=new node(5)
// let tl=new node(20)
// a.next = b
// b.next = c
// c.next=d
// d.next=e
// let head = a;
// let current = head;
// function Lastadd() {
//     if(current!=null){
//         current=current.next
//     }
//    while(current!=null){
//     console.log(current.data);
//     current=current.next
//    }

// } 
// Lastadd()


// Q=5.............

// class node{
//     constructor(data){                                    
//         this.data=data
//         this.next=null
//     }
//     }
    
//     let a=new node(1)
//     let b=new node(2)
//     let c=new node(3)
//     let d=new node(4)
//     let temp=new node(10)
    
//     a.next=b
//     b.next=c
//     c.next=d
    
//     let head=a
//     let current= head
    

//     function removeend(current,temp) {

// while (current.next.next!=null) {
//     console.log(current.data);
//     current=current.next
// }
// current.next=null
// head=current

//     while (current !==null) {
//         console.log(current.data);
//         current=current.next
//     }

// }


// removeend(current,temp)




// Q=6

// class node{
//     constructor(data){                         
//         this.data=data
//         this.next=null
//     }
//     }
    
//     let a=new node(1)
//     let b=new node(2)
//     let c=new node(3)
//     let d=new node(4)
//     let temp=new node(10)
    
//     a.next=b
//     b.next=c
//     c.next=d
//     let n=2
//     let head=a
//     let current= head
    
//     function removekth(current,n) {
        
    

//  while (current.next.next!==null && current.data!==n ) {
//     console.log(current.data);
//     current=current.next
    
//  }

//  current=current.next
    
//     while (current !==null) {
//         console.log(current.data);
//         current=current.next
//     }


//     }

//     removekth(current,n)



// Q=7



// class node{
//     constructor(data){                                 
//         this.data=data
//         this.next=null
//     }
//     }
    
//     let a=new node(1)
//     let b=new node(2)
//     let c=new node(3)
//     let d=new node(4)
//     let temp=new node(10)
    
//     a.next=b
//     b.next=c
//     c.next=d
    
//     let head=a
//     let current= head
    
    
//     while (current !==null) {
//         console.log(current.data);
//         current=current.next
//     }


// Q=8

// class node{
//     constructor(data){                                          
//         this.data=data
//         this.next=null
//     }
//     }
    
//     let a=new node(1)
//     let b=new node(2)
//     let c=new node(3)
//     let d=new node(4)
//     let temp=new node(10)
    
//     a.next=b
//     b.next=c
//     c.next=d
    
//     let head=a
//     let current= head

//     function search(current,value) {
//         let position=0
//         while (current!==null) {
//             if (current.data==value) {
//                 console.log("value=",value,"position=",position);
                
//             }
//             current=current.next
//             position++
//         }
//     }

//     search(current,2)



// Q=10

// class node{
//     constructor(data){                      
//         this.data=data
//         this.next=null
//     }
//     }
    
//     let a=new node(1)
//     let b=new node(2)
//     let c=new node(3)
//     let d=new node(4)
    
//     a.next=b
//     b.next=c
//     c.next=d
    
//     let head=a
//     let current= head


//     function revrselist(current) {
        
//     let arr=[]
    
//     while (current !==null) {
//         arr.push(current.data)
//         current=current.next
//     }

// while (arr.length>0) {
//     console.log(arr.pop());
    
// }

//     }

//     revrselist(current)