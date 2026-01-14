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