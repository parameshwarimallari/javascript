
// function hello(name){
// console.log("hello  "+name);

// const { useContext } = require("react")

// }
// hello("parmi ");
// hello("suchitra ");


// function sum(a,b){
// return a+b;
// }
// console.log(sum(2,4));
// console.log(sum(5,10));

//

// function square(number){
// return number*number
// }
// console.log(square(5));

// function average(arr){
// return (arr[0]+arr[1]+arr[2])/3;
// }
// console.log(average([2,5,2]));

// function one(str){

// }
// function greet(){
//     console.log("good morning");

// }
// function wish(fun){
// console.log(fun());

// }
// wish(greet);

// function add(x,y){
// return x+y;

// }
// function calculate(fun,num1,num2){
// var result=fun(num1,num2);
// console.log(num1+num2,"calculate fun",result);

// }
// calculate(add,10,20);

// function sayName(){
// console.log("function sayNmae");

// }
// function greetUser(fun,name){
// fun();
// }
// greetUser(sayName,"hai");

// function cook(){
// console.log("cooking");

// }
// function study(){
// console.log("studying");

// }
// function doTask(a,b){
// a();
// b();
// }
// doTask(cook,study);


// function one(a){
// console.log("from one");
// console.log(a);
// }
// function two(){
//     console.log("from two");

// }
// one(two);
// one(function(){
//     console.log("from anonymous");
// });


// A (a,b)
// A(()=>console.log("function a"),
// ()=>console.log("function b")

// );




// function print(mult,sum){
// console.log(mult(2));

// console.log(sum(10));
// }

// print(x=>x*2,x=>+10);


// function A(a){
// A(10,20);
// }
// console.log(A((a,b)=>a+b));


// function A(a){
// return a(10,20);
// }

// console.log(A((a,b)=>a+b));

// function A(name){
// return name("parmi");
// }
// A(name=>console.log("hello",name));

// function check(num){
// return num(9);
// }
// console.log(check(a=>a%2==0?"even":"odd"));

// function A(num){
// return num(10);
// }
// console.log(A(num=>num>10?"true":"false"));


// function A(a){
// console.log(a("parmi","manisha"));

// }

// A((a,b)=>{
//     if(a.length>b.length){
// return a.length,a;
//     }else if(b.length>a.length){
// return b.length,b;
//     }else if(a.length==b.length){
// return "equal length",a,b
//     }
// })

// console.log('start');
// setTimeout(()=>console.log("first callback"),3000);
// for(let i=0;i<50000;i++){
// console.log("i");

// }
// setTimeout(()=>console.log("second callback"),1000);





// console.log("Start");
// setTimeout(()=>console.log("inside setTimeout"),0);
// console.log("End");
// function order(orderid){
// return Promise(resolve,reject)

// }
// order(1234)

// function sayHello(callback){
//     console.log("hello parmi");
//     callback();

// }
// sayHello(()=>console.log("bye parmi"));
// function addNumbers(a,b,callback){
// console.log(a+b);
// callback(a+b);



// }
// addNumbers(10,20,(a)=>console.log(a*2));


// function wakeup(callback){
//     console.log("woke up");
//     callback();

// }
// function BrushTeeth(callback) {
//     console.log("brushed teeth");
//     callback();
// }
// function breakFast(){
//     console.log("Ate breakfast");

// }


// wakeup(()=>BrushTeeth(()=>breakFast()));


// function wokeup(callback){
//    setTimeout(()=>{
// console.log("woke up");
// callback();
//    },1000 )}


// function brshedteeth(callback){
//     setTimeout(()=>{console.log("🪥 Brushed teeth")
//     callback()},2000);

// }
// function breakFast(){
//    setTimeout(()=>{console.log("ate breakfast")},3000
//    );
// }
// wokeup(()=>brshedteeth(()=>breakFast()));

// function OrderPlaced(callback) {
//     setTimeout(() => {
//         console.log("order Placed")
//         callback()
//     }, 1000);

// }
// function dispatched(callback) {
//     setTimeout(() => {
//         console.log("order Dispatched");
//         callback()
//     }, 1000);
// }
// function delivery(callback) {
//     setTimeout(() => {
//         console.log("out for delivery")
//         callback()
//     }, 1000
//     );
// }
// function delivered() {
//     setTimeout(() => {
//         console.log("Delivered")
//     }, 1000);
// }
// OrderPlaced(() => {
//      dispatched(() => {
//         delivery(() => {
//             delivered()
//         }) ;
//     });
//  });

// function order(orderid, callback) {
//     setTimeout(() => {
//         ;
//     }, 1000);
//     callback(`order${orderid} placed`);
// }
// function dispatched(orderid, callback) {
//     setTimeout(() => {
//         callback(`order${orderid} dispatched`);

//     }, 1000);

// }
// function shipping(orderid, callback) {
//     setTimeout(() => {
//         callback(`order${orderid} shipping`);
//     }, 1000);

// }
// function delivered(orderid, callback) {
//     setTimeout(() => {
//         callback(`order${orderid} delivered`);
//     }, 1000);

// }

// order(1234, (orderes) => {
//     console.log(orderes); dispatched(1234, (dis) => {
//         console.log(dis)
//         shipping(1234, (shres) => {
//             console.log(shres), delivered(1234, (del) => { console.log(del) }
//             )
//         })
//     })
// }
// );


// let prom=new Promise((resolve,reject)=>{
//     resolve();
// });
// prom.then(()=>console.log("success")
// );

// function hello(callback){
// return new Promise(callback())
// }
// hello(()=>{console.log("hello")
// });

// function hello(callback){
// callback();
// return new Promise((resolve,reject)=>{
//     resolve();
// });
// }
// hello(()=>console.log("from hello")
// );

// Promise.resolve().then(()=>console.log("success"));
// Promise.reject().catch(()=>console.log("reject"));



// function sum(a,callback) {
//     return callback(a+b);
// }
// function add() {
//     return callback();
// }
// function sub() {
//     return callback();
// }
// function div() {
//     return callback();
// }
// sum(10,()=>{});



// function substract(a,b,callback){
// callback(a-b);
// }
// substract(20,10,(a)=>{console.log(a);
// });

// function greetUser(username, callback) {
//     console.log(`hi ${username}!`);
//     callback();

// }
// greetUser("parmi", () => console.log("have a greatday")
// );
// function mul(a,b,callback){
// return callback(a*b)
// }
// console.log(mul(10,10,(a)=>console.log(a)
// ));






// function Order(orderid) {

//     return new Promise((resolve, reject) => {
//         console.log(`order${orderid} placed`);
//         resolve()
//     })
// }
// function Dispatched(orderid) {

//     return new Promise((resolve, reject) => {
//         console.log(`order ${orderid}dispatched`);
//         resolve()
//     });
// }
// function shippingorder(orderid) {

//     return new Promise((resolve, reject) => {
//         console.log(`order${orderid} shipping`);
//         resolve()
//     });
// }
// function deliver(orderid) {
//     console.log(`Order${orderid} delivered`)
// }

// Order(1234).then(()=>Dispatched(1234))
//            .then(()=>shippingorder(1234))
//            .then(()=>deliver(1234))













// const url = "https://fakestoreapi.com/products"


// fetch(url).then((data) => data.json())
//     .then(data => {
//         for (let i = 0; i < data.length; i++) {
//             console.log(data[i])
//         }
//     })



// const url="https://dummyjson.com/quotes"
// fetch(url).then((data)=>data.json()).then((data)=>{for(let i=0;i<data.quotes.length;i++){
// console.log(data.quotes[i].quote)
// }})

// const url="https://dummyjson.com/todos"
// fetch(url).then((data)=>data.json()).then((data)=>{for(let i=0;i<data.todos.length;i++)
//     console.log(data.todos[i].todo)
// })













// const url="https://jsonplaceholder.typicode.com/photos"
// fetch(url).then((data)=>data.json())
//           .then((data)=>{
//             for(let i=0;i<data.length;i++){
//     console.log(data[i].title)
// }})






















// const url="https://randomuser.me/api/"
// fetch(url).then((data)=>data.json()).then((data)=>{for(let i=0;i<data.length;i++){
// console.log(data[i])
// }})

// const url='https://pokeapi.co/api/v2/pokemon/ditto'
// fetch(url).then((data)=>data.json()).then((data)=>{for(let i=0;i<data.length;i++){
//     console.log(data[i])
// }})


// fetch("http://localhost:3000/Student/",{
// "method":"delete" ,
// }).then(data => data.json()).then(data => console.log(data))


// let option={
//    "method":"POST",
//    "headers":{
//     "Context-Text":"application/json"
//    }

// }
// fetch("https://dummyjson.com/todos").then(data=>{return data.json()}).then(data=>console.log(data))
// .fetch("http://localhost:3000/data",option)
// .then()









// console.log()

// let data=[
//      {
//       "id": 1,
//       "todo": "Do something nice for someone you care about",
//       "completed": false,
//       "userId": 152
//     },
//     {
//       "id": 2,
//       "todo": "Memorize a poem",
//       "completed": true,
//       "userId": 13
//     },
//     {
//       "id": 3,
//       "todo": "Watch a classic movie",
//       "completed": true,
//       "userId": 68
//     },
//     {
//       "id": 4,
//       "todo": "Watch a documentary",
//       "completed": false,
//       "userId": 84
//     }
// ]
// let options={
//     "method":"POST",
//     "headers":{
//         "Context-Type":"application/json"
//     }
// }
// for(let i=0;i<data.length;i++){
// let obj=data[i]
// console.log(obj);
// options.body=JSON.stringify(obj)
// fetch("http://localhost:3000/data",options)
// .then(response=>{
//     if(response.ok){
// console.log(response.statusText)
//     }else{
//        console.log("nt entered")
//     }
// }
// )
// }

// console.log("helooo");
// alert("jgdd................")


// let a = [10, 20, 30, 40, 50, 4]
// // let a=new Array()
// // let a=Array()
// // a.push(90)
// // console.log(a)
// // a.unshift(80)
// // console.log(a);
// // a.pop()
// // console.log(a);
// // a.shift()
// // console.log(a);
// // console.log(a.slice(0,2));
// // a.splice(0,2,"hello")
// // console.log(a);

// // console.log(a[1]);
// // console.log(a.at(1));



// // let myName='parmi'
// // console.log( +myName);

// let data = [
//     {
//         "id": 1,
//         "todo": "Do something nice for someone you care about",
//         "completed": false,
//         "userId": 152
//     },
//     {
//         "id": 2,
//         "todo": "Memorize a poem",
//         "completed": true,
//         "userId": 13
//     }
// ]
// let options = {
//     "method": "POST",
//     "headers": {
//         "Content-Type": "application/json"
//     }
// }
// data.forEach(element => {
//     // console.log(element)
//     options.body = JSON.stringify(element)
//     fetch("http://localhost:3000/data", options).then(res => {
//         if (res.ok) {
//             console.log(res.statusText)
//         } else {
//             console.log("not created")
//         }
//     }
//     )
// })


//    const arr = [4, 5, 6];
//    const result = arr.map(num => num + 1).filter(num => num > 5);
//    console.log(result);

// const arr = [1, 2, 3];
//    const result = arr.map((num) => {
//      console.log(num);
//    });

//    console.log(result);
//   const arr = [1, 3, 6, 8];
// let some=arr.filter(num => num > 5)
// console.log(some);
//  const arr = [4, 5, 6];
//    const result = arr.filter((num, index) => index % 2 === 0);
//    console.log(result);

//  const arr = ['apple', 'banana', 'cherry'];
//    const result = arr.filter(word => word.length > 5);
//    console.log(result);
//  const arr = [1, null, 2, undefined, 3]
// let a= arr.filter(num => !!num);
// console.log(a);
//   const arr = [1, 2, 3,4];
//     const result = arr.filter((num, index, array) => array.includes(num + 1));
//     console.log(result);

//  const arr = [10, 20, 30];
//   let s=  arr.forEach(num => {return num});
//   console.log(s);

// const arr = [1, 2, 3];
//     arr.forEach((num, index) => {
//       if (index === 1) return;
//       console.log(num);
//     });
//  const arr = [1, 2, 3, 4];
//     const result = arr.map(num => num * 2).filter(num => num > 5);
//     console.log(result)




// async function x(){

//    let res=await Promise.resolve(setTimeout(()=>{

//    }),2000)
//    console.log(res)
// }
// x()
// console.log("completed")
// Promise.resolve("A")
//   .then(val => { throw "Error in then"; })
//   .catch(err => console.log(err));
Promise.resolve("Start")
  .finally(() => console.log("Finally called"))
  .then(val => console.log(val));



  






   
  




































