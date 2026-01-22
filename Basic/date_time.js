// **********DATE*************
let mydate = new Date ()
// console.log(typeof mydate); type of mydate is OBJECT
// console.log(mydate.toString()); 
// this is for real time and date with time

// console.log(mydate.toDateString()); 
// this is for only day,month,date,year

// console.log(mydate.toISOString()); 
// this come in number form 2026-01-22 and time 11:17:03 like this

// console.log(mydate.toLocaleString()); 
// this come in 1/22/2026, 11:18:52 like this 

// for declaring or yabto pata karna date ke baare me kaunsi se date ko kya tha the date the syntax is like
// let decDate = new Date("10-20-2025")
// console.log(decDate.toDateString()); 

// for declaring date and time
// console.log(decDate.toLocaleString()); 
// for declaring like MM-DD-YY
// console.log(decDate.toLocaleString()); 

// ******TIME STAMP  ****** mtlb pole bana kisko zyda mila poles jaise insta pe ya quiz type kaun jeeta aesa
let timeStamp = Date.now() 
// syntax Date.now mtlb abhi ki date
// console.log(timeStamp);
// timpe stamp always come in milisecond

// console.log(mydate.getTime());
// ye ho gaya compare karna milisecond me aaj ki date ko

// console.log((Math.floor(Date.now()/1000)));
// date ko milisec me se second me convert krna hai agar to usko 1000 divide kar dene ka......
// divide krne baad valued point me aai gi to usko simple floor me daal do

let NewDate = new Date()
console.log(NewDate.getDay());
// for day
console.log(NewDate.getMonth()+1);
// for month par jaise mai january me kr raha hu to value 0 aarhi hai q ki pc me value 0 se shuru hoti hai t.....
// to iske liye simply +1 kr dene ka to value shi aai gi

// acha tarika hai string interpoltion kar ke karna 
// console.log(`today the day is ${NewDate.getDay()} and month is ${NewDate.getMonth()+1}`);

// For customizing the date in obect type jaise muhe cahhiye

console.log(NewDate.toLocaleString('default',{
    month : "long",
    weekday : "long"
}));










