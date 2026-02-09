// FUNCTION AND PARAMETER
// function mtlb jaise ek code me ek aesa kaam hai o baar baar karana hai to usko ek pakage me pack kr denge and use sirf call kr ke work karate rhenge
// key word for function is "function" only
function repeat(){
    console.log("F");
    console.log("U");
    console.log("R");
    console.log("Q");
    console.log("A");
    console.log("A");
    console.log("N");
}
// repeat()
// jab bhi call krnege func ki to paranthesis laga na zaroori hai withoout ()iske function ko refernce khte hai 

// Function of add two numbers
// function sumof2number(a,b){
//    console.log(a+b);
   
// }
// const result = sumof2number(5,6)
// console.log("Result :",result);
// isme value aai gi par result ke variable me undifined aai ga 
// par agar mai variable store kre to kaise kya krnege

function sumof2number(a,b){
//    let result = a + b
//    return result
//    ek ye tarika hai and
   return a + b 
//    dusra ye tarika 
//    and return ke baad kuch bhi chize nhi likh skhte hai wo execute hi nhi ho ga
}
const result = sumof2number(5,9)
// console.log("Result :", result);
//  ab jo reuslt function ke andar hai and jo bahar hai wo dono alag hai ushe scope bolte hai ye bhi deep me aage pdhenge 

function Loggin(username){
    if(username===undefined){
        // if me (!username) ye bhi likh skhte hai dono same hai "!"iska mtlb opposite hota hai to jo if pe daale hai apun ye to mtlb username ka opposite....
         console.log("Please enter the username");
        return
        // return daalne ka maqsad ye hai ki agar ye line execute hoi to niche ka code read hi nhi ho ga
        }
    return `${username} just logged in`
}
// console.log(Loggin());
// aagr kuch nhi likhenge () iski value undefined just logged in aai gi to isme if statemnt use krnege
// isme ham ek DEFAULT value bhi de skhte hai function Lggin(usmername = "Ansari") agar kuch nhi hua to by deflt usrnme ANsari ka aa jai ga

// REST OPERATOR******
// Jiase add to cart me bht saari chize ek saat add krte jaate hai to usko kaise kya krte hai jaise kitni add kiye customer ne uska price kaise aai ga to wo kaise kre

// function calcartprice(...num1){
//     return num1
// }

// console.log(calcartprice(2));ek easily ho ga par zyada hua to kaise kre
// jaise spread kiye the "..." wese hi rest bhi hota hai "..." dono same hai bs jagah lagane ki aur lgne ki alag hai
// console.log(calcartprice(200,500,250,60,890));
// ye pura ek array me aai ga

function calcartprice(val1,val2,...num1){
    return num1
}
// console.log(calcartprice(200,500,250,60,890));
// isme kya ho ga 200,500 val 1 and val 2 le jaai ga respectively  and baaki ka rest pe aai ga 

// Object ko function me kaise pass krte hai and usko kaise access krte hai
const info = {
    username : "Furqaan",
    Email: "ansari.furqaan123"
}

function handleandpass(anyobjct){
    console.log(`The username is ${anyobjct.username} and Email is ${anyobjct.Email}`); 
}

// handleandpass(info)
// ab yaha pe anyobject jo hai function me wo ye hai ki function ko nhi pata hai ki kaunsa object and object ka kaunsi chiz access krna hai to is loye anyobjct daala...
// maine ki wo jo anyobjct jo hai wo function me bahar ke object ko handle krta hai isliye "." laga ke likhte hai

// ham direct object bhi pass kr skhte hai isme 
handleandpass({
    username : "Shadan",
    Email : "Shanda12"
})

//  ab ARRAY ko hndle kaise krta hai function
const NewArray = [500,600,800]

function handlearray(getarray){
    return getarray
}
// console.log(handlearray(NewArray));
//  jaise object ko chnge kiye wese hi array ko bhi chnge kr skhte hai
console.log(handlearray([550,650,850]));

