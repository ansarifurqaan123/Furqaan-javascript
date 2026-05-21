// ++++++++++++++++ Immediately Invoked Function Expression (IIFE)++++++++++
// mtlb kisi bhi function kko immdiate invok krna ho to iife ka use karte hai
// aesa function q chahiye jo immediate invoke ho ?
// Ans :- 1 reason Kabhi ham databse fie likhte hai and chaahte hai ki jaise hi file open ho and datbse ka conncetion start ho jaai us case me iife ka use krte hai
// 2 reason jaise gobal scope me kai baar variable declare hote hai and wo variabe function ko kharb na kare us case me ham iife ka use karte hai 
// isiye iife ko leke ham ek new scope bana lenge jisse varible polute na kare and jaldi connect bhi ho jaai mtlb run

function ansari(){
    console.log('iife');
}
ansari()
// ye ho gaya normal fnction jo immedt  execute ho raha hai par iife nhi hai

(function ansari(){
    console.log('iife');
})();
// ye hua iife mtlb iife ka basic syntax hai "()()"ye ek parntehiss func ka hua and ek call ka

// isko arrow function pe bhi laga skhte hai
// jaise maine upar bhi iife fnc lagaya hai and niche arrow pe iife ko par ye run nhi ho ga
// q run nhi ho ga q ki upar waale fnction ko hamne ";" ye laga ke stop nhi kiya q ki zyada iife laga na kaam nhi hai par usko rok na bhi hai q ki usko nhi pata hai kaha ruk na hai
( ()=>{
    console.log('iife');
})()
// ab dono run ho ga ; laga ne baad

// ab jaise iife variable leta hai ki hi ofcorse leta hai 
( (name)=>{
    console.log(`iife ${name}`);
})('Furqaan')
// ye same normal fnc jaisa hi len den krta hai jaise ki
// (name) ye bracket fnction bata raha hai is ke baad {}isme pura fnctn likhe
// (Furqaan) ye waale me fnction ko call kiye simple

// Ye hai named iife
(function ansari(){
    console.log('iife');
})();

// Ye hai un-name iife
( (name)=>{
    console.log(`iife ${name}`);
})('Furqaan')

// imp note teen ()ye lgta hai ek fnctn ek call and ek pura fcnt ka wrap scope bana ne ke liye