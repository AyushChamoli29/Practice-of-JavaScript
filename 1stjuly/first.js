// 1

// let age=56;
// if(age>=18){
//     console.log("Adult");
// }
// else{
//     console.log("Minor");
// }

// 2

// let score=Math.round(Math.random()*100);
// if(score>=80){
//     console.log(`Your score is ${score}, Excellent`);
//     return;
// }
// else if(score>=60){
//     console.log(`Your score is ${score}, Pass`);
//     return;
// }
// else{
//     console.log(`Your score is ${score}, Fail`);
// }

// 3

// for (let index = 1; index < 100; index++){
//     if(index%3===0){
//         console.log(index);
//     }
// }

// 4

// let num=10;
// let sum=0;
// console.log((num*(num-1))/2);

// 5

// const arr=['apple','banana','orange'];
// console.log(arr.length,arr[1]);

// 6

// let obj={
//     name:'John',
//     age:30,
//     city:'New York'
// };
// for (const key in obj) {
//     console.log(key,":-",obj[key])
// }

// 7

// let first_name=1;
// let last_name=2;
// console.log(first_name,last_name);

// 8

// const score=[85,92,78,90,88];
// let sum=0;
// for (const element of score) {
//     sum+=element;
// }
// let size=score.length;
// console.log(sum,sum/size);

// function counting(){
//     let count=0;
//     function counter(){
//         count++;
//         return count;
//     }
//     return counter;
// }

// const ans=counting();
// console.log(ans());
// console.log(ans());
// console.log(ans());

// const arr=[9,5,2,8,0,7,3,6,1];

// const ans=arr.reduce((acc,element)=>{
//     acc+=element;
//     return acc;
// },0)

// console.log(ans);

// const cart = [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 1200,
//     quantity: 1,
//     category: "Electronics"
//   },
//   {
//     id: 2,
//     name: "Phone",
//     price: 800,
//     quantity: 2,
//     category: "Electronics"
//   },
//   {
//     id: 3,
//     name: "Headphones",
//     price: 150,
//     quantity: 3,
//     category: "Accessories"
//   },
//   {
//     id: 4,
//     name: "Mouse",
//     price: 40,
//     quantity: 2,
//     category: "Accessories"
//   },
//   {
//     id: 5,
//     name: "Keyboard",
//     price: 90,
//     quantity: 1,
//     category: "Accessories"
//   }
// ];

// const total=cart.reduce((acc,item)=>{
//     acc+=item.price;
//     return acc;
// },0);

// console.log(total);

// const arr=[1,2,3,4,5,6,7,8,9,10];
// function double(num){
//     return num*2;
// };

// const ans=arr.map(double);

// console.log(ans);

// 3

// const evensum=(arr)=>{
//     let sum=0;
//     for (const element of arr) {
//         if(element%2==0){
//             sum+=element;
//         }
//     }
//     return sum;
// }
// const array=[1,2,3,4,5,6]
// console.log(evensum(array));

// 4

// const str="Hello";
// let str1="";
// let arr=str.split("");
// let arr1=[];
// for(let i=arr.length-1;i>=0;i--){
//     arr1.push(arr[i]);
// }
// str1=arr1.join("");
// console.log(str1);

// const str="Hello";
// const str1=str.split("").reverse().join("");
// console.log(str1);

// 5

// const ans=(arr,n)=>{
//     for (const element of arr) {
//         if(element===n){
//             return "found";
//         }
//     }
//     return "not found";
// }
// const arr=[1,2,3,4,5,6,7,8,9];
// const num=20;
// console.log(ans(arr,num));

// 6

// const ans=(str)=>{
//     str=str.toUpperCase();
//     let str1=str.toUpperCase().split("").reverse().join("");
//     if(str===str1){
//         return "Palindrome";
//     }
//     else{
//         return "Not a palindrome";
//     }
// }

// const name="NAmana";
// console.log(ans(name));

// 7

// const arr1=[1,2,3,4,5,7,10,56];
// const arr2=[3,4,5,6,7,56];

// const ans=(arr1,arr2)=>{
//     let arr3=[];
//     for (const element1 of arr1) {
//         for (const element2 of arr2) {
//             if(element1===element2){
//                 arr3.push(element1);
//             }
//         }
//     }
//     return arr3;
// }
// console.log(ans(arr1,arr2));

// const arr1=[1,2,3,4,5,7,10,56];
// const arr2=[3,4,5,6,7,56];

// const arr3=arr1.filter((num)=>arr2.includes(num));
// console.log(arr3);

// 8

// const obj1={
//     a:1,
//     b:2
// };
// const obj2={
//     b:3,
//     c:4
// };

// const obj3={...obj1,...obj2};
// console.log(obj3);

// 9

// const scores = {
//     math: 90,
//     science: 80,
//     english: 100
// };
// let totalscore=0;
//   for (const key in scores) {
//     totalscore+=scores[key];
//   }
// const arr=Object.keys(scores);
// const size=arr.length;

// let max=0;
// for (const key in scores) {
//     if(scores[key]>max){
//         max=scores[key];
//     }
// }

//   console.log(`Total score:${totalscore} \n Average marks: ${totalscore/size} \n Maximum marks:${max}`);

// 1

// const ques = [1, [2, 3], [4, [5, 6]]];
// function flat(arr) {
//   let ans = [];
//   for (const element of arr) {
//     if (Array.isArray(element)) {
//       for (const sub of element) {
//         ans.push(sub);
//       }
//     } else {
//       ans.push(element);
//     }
//   }
//   return ans;
// }

// const a = flat(ques);
// console.log(a);

// 2

// const users = [
//   { id: 1, name: 'A' },
//   { id: 2, name: 'B' },
//   { id: 1, name: 'A duplicate' }
// ];

// const ans1=new Set();
// const ans2=users.filter((user)=>{
//   if(ans1.has(user.id)){
//     return false;
//   }
//   else{
//     ans1.add(user.id);
//     return true;
//   }
// });

// console.log(ans2);

// 10

const users = [
  { country: "USA", name: "A" },
  { country: "UK", name: "B" },
  { country: "USA", name: "A duplicate" },
];

const ans = users.reduce((acc, item) => {
  if (!acc[item.country]) {
    acc[item.country] = [];
  }
  acc[item.country].push(item);
  return acc;
}, {});

console.log(ans);
console.log("Hello");
console.log("Everyone");
