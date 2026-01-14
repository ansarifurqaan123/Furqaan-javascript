// There are two types of Data types Primitive and Non-Primitive
// Primitive Data Types:-
// There are 7 types of data types:- String, Number, Boolean, null, undefined, BigInt etc
const score = 100
const value = 100.75
const LoggedIn = true
const Tempr = null
let percentage;
 
const ID = Symbol('1254')
const OtherValue = Symbol('1254')
// Symbol ki value chaahe same ho par Symbol kabhi same nhi ho ga isliye O/P me false aaya
 
const BigNumber = 145262114587954211200n
// BigInt ke liye Number ke aage "n" laga na zaroori hai tabhi ho BigInt banta hai
console.log(typeof(BigNumber));


// Non-Primitive Datatypes
//  Array, Object, Function
const Hero = ["superman","iron man","Hulk"]
//  Ye ho gaya Array

const Obj = {
    Name : "Furqaan",
    Age : 23,
    Location : "Bhiwandi"
}
// Ye ho gaya Object we Know that ki Object ko "{}" is brackect se defined kiya jaata hai

const Function = function(){
    console.log("Hello Bhai")
}
// Ye ho gaya Function function to pata hai ki kaise likhte hai 
// IMP Array & Object ke datatype ko Function hi kaha jaata hai---And--- Function ke data type ko "ObjectFunction" kaha jaata hai

// *******************MEMORY**************//
// / *******MEMORY DIAGRAM NOTE BOOK ME HAI***********
// There are two types of Memory Stack and Heap
// Stack(Primitive ke liye) and Heap(Non-Primitive ke liye)
// Eg:
let MyName = "Furqaan"
let anotherName = MyName
anotherName = "Shadan"
console.log(MyName);
console.log(anotherName);
// Stack memory me ye hota hai ki jitna variable ke hisaab se place di jaati hai......
// aur jab ham kisi ki value leke change krte hai tab original variable ek "COPY" uska de deta hai dusre ko use karne ke liye ......
//  isliye Original Value Change nhi ho gi Stack me

let OneUser = {
    Email : "fur1@gmail.com",
    Name : "Furqaan"
}
let TwoUser =  OneUser
TwoUser.Email = "Furq@007.com"

console.log(OneUser);
console.log(TwoUser);
//  Heap Memory me ye hota hai ki access and pura chize wo ek hi jagah pe hota hai aur wo ek se leta hai jisme pura function hota....
//And jab wo leta hai ya fir apun koi change karte hai to wo pura change kar deta hai 

