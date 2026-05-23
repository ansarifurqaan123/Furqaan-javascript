// Truthy and Falsthy ye dono ko ka mtlb hai ki direct assume kr lete hai ki value true hi ho gi ya false hi ho gi
const userid = []
// if(userid){
//     console.log("Logg in");    
// }
// else{
//     console.log("Write userid");
// }
// jaise is code me sirf user id ka show hai case me to value aai gi par har chiz ki vaue alag aai gi wo jaante hai ham

// Falsy Values:-
// false, 0, -0, BigInt 0n, "", null , undefined, NaN

// Truthy Values:-
// "0"(ye srprising truthy value hai), isme false bhi aai gi to wo bhi truthy val ho gi 'false', smple space bhi hua agar string me to wo truthy value ho gi
// {},[], function(){} ye sb truthy value hai

// empty array and empty object ko kaise handle(check) direct nhi kiya jaata hai, kre ab ye dekhenge
// if (userid.length === 0){
//     console.log('array is empty');
// }
// length q liye q ki array hamesha length se hi check kiya jata hai ki kitni hai kaise hai

const emptyobj = {}

if (Object.keys(emptyobj).length===0){
    console.log("Object is empty")
}
// Object.keys(emptyobj) code me jb ye likhte hai to ye pura ek array bana ke deta hai and array ko kaise check krnege wo to pta hi hai lngth se 

// Ab hai Nullish coalescing operator "??" ye use kiya jata hai Null and undifined inke liye
let val1
// val1 = 10 ?? 20....isme koi bhi null nhi hai isliye wo frst value hi le lega
// val1 = null ?? 50....isme null hia islye wo second value le ga
// val1 = null ?? 10 ?? 50.. isme frst value e ga wo hamesha
val1 = undefined ?? 15
console.log(val1);
// ye use tab kiya jaat ahi jab firebase ya khi se jab value mangwaa te hai tb ek nhi do values aati hai to usme zyada tar value Nul or Undeifned bhi ho skhti hai islye use krte hai

// Terniary Operator 
// is me "?" ye hota hai and iska 
// stamnt and syntax hai :- "condition ? true : false"
// exmp
const ps5price = 45000
ps5price <= 40000 ? console.log("You can Buy") : console.log("You cant buy");
