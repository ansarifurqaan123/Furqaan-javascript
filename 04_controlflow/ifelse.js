// Control flow means ki jo hamara pura code ho ga wo conditional based pe run ho true hai to true wala run ho and false hoto false wala 
// mtlb pura code ek saat run na ho ushe kahte hai control flow
// first hai if and else
if (true){

}
// true ho gi condtion to if me jaainge warna nhi, ab true to smjh ne ke liye par yaha real world me comparison karna ho ga operator ke use se
// the operators are
// <(less than),>(greater than),<=(less than equal to),>=(greater than eql to),
// ==(checking equal to), !=(not equal to), ===(this use for comparsing two thing with euqalty+type also)
// for exm
if (2 === "2"){
    console.log("Equal");
    // here o/p will never come bcs frst 2 is integer and scnd 2 is string thats y we use "===" for checkng the type
}

// IF-ELSE EXM
const temperature = 75
if(temperature <= 47){
    console.log("Temperature is frequent u can live");
}
else{
    console.log("Temperature is wid u cant live");
}

const score = 200
if(score > 150){
    const power = "RUN"
    console.log(`Use Power: ${power}`);    
}
console.log(`Use Power ${power}`);
// ---bahar power ki value use hi nhi ho gi q ki if and else ki jo brckts hai wo apna ek scope bana deti hai and uske andar ki chize bahar glbl scpe me use nhi ho gi

// jaise ek aur tarika hota hai implicit way ushe khte hai jisse ek line me pura code likhte hai par wo acha nhi hai
const bal = 1000
if(bal<5000) console.log("less"), console.log("Greater"); 
// ye immature code hai ishe koi psnd nhi krta hai

//ab jaise ek se zydaa cndition ko compare karna ho to use krte hai else if
const Balance = 1600
if(Balance<900){
    console.log("Less Than 900");
}
else if (Balance<1000){
    console.log("Less Than 1000");
}
else if (Balance<=1500){
    console.log("Equal to 1500")
}
else{
    console.log("Greater than 1500");
}

// ab aata hai "AND" condition iske liye use krte hai "&&" ye sttemnt and syntx
//  real life exp ki shopping krna hai and shooping ke liye loggin and credit card dono chahiye
const userLoggedin = true
const creditCard = true
if(userLoggedin && creditCard){
    console.log("You can Shop");
}
// isme ek bhi statemnt false hua to code run nhi ho ga

// ab "OR" conditon iske liye use krte hai "||" ye sttment and syntx
// expm meko user ko shopping krne dena hia agar uske paas koi ek bhi chiz hai to bhi
const LoggingfromGoogle = false
const LoggingfromAmazon = true
if(LoggingfromGoogle || LoggingfromGoogle){
    console.log("You can shop");
}
// isme koi ek bhi shi hua to code run ho ga