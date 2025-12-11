// var a;  //Global scope
// a = 10;
// var a = 20;

// //let b;  //block scope
// b = 10;

// const c=10;  //block scope


// var p = 20; //number
// var q = "Hello";  //string
// var bool = true;  //boolean
// var r;  //undefine
// var s = null; //null
// var big = 1234567890123456789012345678901234567890n;
// var symbol = Symbol('Hello');

// console.log(typeof p);
// console.log(typeof q);
// console.log(typeof bool);
// console.log(typeof r);
// console.log(typeof s);
// console.log(typeof big);
// console.log(typeof symbol);



// var arr = [1,2,3,4,5];  //array
// //console.log(arr); 

// var Object = {  //Object
//     name:"priyaraj",
//     age: 20,
// }

// console.log(typeof arr);
// console.log(typeof object);




// // Arithmetic Operator(+,-,*,/,%)
// var a = 10;
// var b = "10";//30
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// //Relational Operator(<, >, <=, >=, ==, !=)
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b); 

// //Assignment Operator(=,+=,-=,*=,/=,%=)
//  a = 10;
// console.log(a);
//  a += 10;
// console.log(a);
// a -= 10;
// console.log(a);
//  a *= 2;
// console.log(a);
//  a /= 2;
// console.log(a);
//  a %= 2;
// console.log(a); 


// //Logical Operator(&&,||,!)
// a = true;
// b = false;
// console.log(a&&b);
// console.log(a||b);
// console.log(!a);    

// //for loop
// for(let i = 1;i<=10;i++){
//     console.log(i);
// }
// //while loop
// int a = 0;
// while(a===5){
//     a++;     
//     console.log(a);             
   
// }  
// console.log(a);         


// a=0;
// do{
//     console.log(a);             

// }while(a===1);      

// //Conditional Statement
// a=5;
// if(a%2 == 0){
//     console.log("Even");
// }

// // terinary Operator(?:)
// //syntax
// // condition ?value:value;
// a = 10;
// var result = a%2 == 0 ? "Even":"Odd";
// console.log(result);

// // if else
// if(a%2 == 0)  console.log("Even");
// else  console.log("Odd"); 
    

// //if else if
// var mark = 90;
// if(mark>=90)  console.log("O");
// else if(mark>=70)  console.log("A");
// else if(mark>=50)  console.log("B");
// else console.log("Fail");   

// //switch case
// day = 1;
// switch(day){
//     case 1:
//         {
//         console.log("Sunday");
//         break;
//      }
//     case 2:
//       {
//         console.log("Monday");
//         break;
//       }
//     case 3:
//         {
//         console.log("Tuesday");
//         break;
//       }
//       case 4:
//         {
//         console.log("Wednesday");
//         break;
//       }
//       case 5:
//         {
//         console.log("Thursday");
//         break;
//       }
//       case 6:
//         {
//         console.log("Friday");
//         break;
//       }
//       case 7:
//         {
//         console.log("Saturday");
//         break;
//       }
//     default:
//         console.log("Invalid number");
// }  


// // terinary Operator(?:)
// mark = 90;
// var result = mark>=90 ? "O":mark>=70 ? "A":mark>=50 ? "B":"Fail";
// console.log(result);


// //Spread Operator(...)
// const a = [10,20,30];
// const b = [...a,40,50];
// console.log(a);
// console.log(b);


// // Destrructuring Operator
// //Array
// const [name,age,marks]=["priya",16,90]
// console.log(name);
// console.log(age);
// console.log(marks);

// //Object
// const {name,age,marks} = {
//     name:"priya",
//     age:16,
//     marks:90
// }
// console.log(name);
// console.log(age);
// console.log(marks);


// function add() {
//     console.log(10+20);
// }
// add();

// function add(a,b) {
//     console.log(a+b);
// }
// add(10,20);  //Parameter



// //Arrow Function
// var addParam =(a,b)=>{
//     console.log(a+b);
// }
// addParam(10, 20);
// console.log(typeof addParam);

// //for.in  in used index value
// var arr = [1,2,3,4,5];
// for(let i in arr){
//     console.log(i);
// }

// //for.of(values)  /of used values
// for(let i of arr){
//     console.log(i);
// }
// //for each
// var arr = [1,2,3,4,5];
// arr.forEach((value,index) =>{
//     console.log(value,index);
// })


// // class & object
// class Person{
//     name;
//     age;
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     display(){
//         console.log(this.name,this.age);
//     }
// }
//     var p1 = new Person("priyaraj", 16);
//     p1.display();




// num = 35;
// if(num % 5 == 0 && num % 7 == 0) {
//      console.log("Divisible by 5 and 7");
// }
// else{
//     console.log("Not Divisible by 5 and 7");
// } 

// // prime number programs
// function isPrime(n){
//     if(n <= 1) return false;

// for(let i = 2;i < n;i++){
//     if(n % i === 0) {
//         return false;
// }
// }
// return true;
// }
// console.log(isPrime(5));
// console.log(isPrime(10)); 

// var a = 10;
// var flag = true;
// if(a<=1) flag = false;

// else{
//     for(let i = 2;i <= a/2;i++){
//         if(a % i === 0){
//             flag = false;
//             break;
//         }
//     }
// }
// const result = flag===true ? "Prime":"NotPrime";
// console.log(result);

// //Palindrome 
// var a = 121;
// var temp = a;
// var rev = 0;
// while(a > 0){
//     var rem = a % 10;
//     rev = rev * 10 + rem;
//     a = Math.floor(a / 10);
// }
// if(temp === rev) console.log("Palindrome");
// else console.log("Not Palindrome");


// const a = 10; //Global scope
// if(true){
//    var b = 20;   // var global scope  // let block scope
//    console.log(a);
// }
// console.log(a,b);
 

// // Hoisting   let & const not happened hoisting
// var a;     //by javascript automatically
// console.log(a);
// var a = 10;


// add();
// function add(){
//     console.log(10+20);
// }


// // for..in(Object)  //values
// var obj = {
//     name:"priyaraj",
//     age:16,
//     marks:90
// };
// for(let i in obj){
//     console.log(i, obj[i]);
// }


// //Call Back Function
// var demo = ()=>{
//     console.log("Hello World");
// }
// var main = (callback)=>{
//     console.log("Main called");
//     callback();
// }
// main(demo);

// var main = (callback)=>{
//     console.log("Main called");
//     callback();
// }
// main(()=>{
//     console.log("Hello World");
// });

// var add = (a,b,callback)=>{
//     var result = a + b;
//     callback(result);
// }
// add(10, 20,(res)=>{
//     console.log(res);
// });


// //setTimeout
// console.log("Hello World");
// var Demo=()=>{
//     setTimeout(()=>{
//         console.log("Processing");
//     },2000)
// }
// Demo();


// //Template Literals
// var age = 18;
// var name = "priya"
// var str = 'priya age is ${age}'
// console.log(str);
// console.log(`${name} age is ${age}`);
// console.log(name +"age is"+age);

// //Map
// var arr = [1,2,3,4,5];
// var double = arr.map(num=>num*2); //**3
// console.log(double)


// //Filter
// var even = arr.filter(num=>num%2===0);
// console.log(even);

// //Reducer
// var total = arr.reduce((sum,num)=>(sum+num),0);  //count sum+1
// console.log(total)

// //arr in even
// var evenCount = arr.map(num=>num**3).filter(num=>num%2===0).reduce((sum,num)=>(sum+1),0);
// console.log(evenCount);


// filter
// var student = [
//     {name:"priyaraj",
//      marks:90},
//      {name:"pooja",marks:88},
//      {name:"amudha",marks:91},
//      {name:"madhu",marks:87},
// ];
// var studentMarks = student.filter(s=>s.marks>88);
// console.log(studentMarks);

// //map
// var studentName = student.map(s=>s.name);
// console.log(studentName);

// //reduce
// var totalMarks = student.reduce((sum,s)=>(sum+s.marks),0);
// console.log(totalMarks);
// var avg = totalMarks/student.length;
// console.log(avg);

// //promise
// const promise = new Promise((resolve,reject)=>{
//     var success = true; //false
//     if(success){
//         resolve("Success");
//     }
//     else{
//         reject("Failed");
//     }
// })
// promise.then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("success")
//     },2000)
// })
//  promise.then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// const getData=()=>{
//     return fetch('https://jsonplaceholder.typicode.com/posts')
// }
// getData().then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// const getData = async(req,res)=>{
//    var res = await fetch('https://jsonplaceholder.typicode.com/posts')
//    var data = res.json();
//    console.log(data); 
// }
// getData();

// const getData = async(req,res)=>{
//     try{
//          var res = await fetch('https://jsonplaceholder.typicode.com/posts')
//    var data = res.json();
//    console.log(data); 
//     }catch(err){
//         console.log(err);
//     }   
// }
// getData();