// object ko do tarike e define kr skhte hai 1) literal ki tarah and 2) constructor ki tarah
// constructor ke tor pe agar obect ko likehnge to wo singleton ke concept me aata hai 
// and literal ke taur pe likhenege to wo saadha rhta hai

// literal object
const sym  = Symbol("8262")
const User = {
    name : "Ansari Mohd Furqaan",
    age : 24,
    mobile_no : 8262990986,
    [sym] : "8262",
    city : "Bhiwandi",
    Email : "ansari.furqaan123@gmail.com",
    Islogged_in : false,
    LogginDay : ["Monday","Thursday","Saturday"]
}
// ye ho gaya mera Object 
// isko access do tarike se kar skhte hai
// console.log(User.name);
// console.log(User["name"]);
// ye dono same hai par object me key hamesha STRING ke Form me hoti hai agar....
// key aesi kuch ho gi "name" : "Ansari Furqaan" to isko access krna possible nhi hai
// isliye '[""]' square bracket ke notation me access kr te hai
// dono hi method shi hai par zayada tark (.) wala use hota hai User.name,Email ect aese

// abhi aise SYMBOL daalna hai object me as a key to uske kaise daalte hai wo Upar ke object me hai
// console.log(User[sym]);
// syntax hai symbol ka (sym = Symbol("8262")) ye hua syntax and key me usko ye bracket me dalna hota hai...
// key ---aese-->[sym] : and then value

// for changing the value in the obj simple tke the object file with .and key value and chnge it
// User.Email = "ansarifurqaan007@yahoo.com"
// console.log(User);

// aur agar meko pure object ko freeze krna ho jisse value change na ho to uske liye...syntax
// Object.freeze(User)
// User.Email = "shaikh@gmail.com"
// change nhi hua  ki pura object freeze kr diya....

// ab ek function lagainge apne object me

User.greeting = function(){
    console.log("Assalamualaikum");
}
// ye ek simple function hua haina 

// ab meko kisi special key me function laga na hai jaise greeting meko name pe laga na hai to iske liye..
User.greeting2 = function(){
    console.log(`Assalamualaikum ${this.name}`);
}
// phle to backtext laga na rhe ga "(`)" ye and ishi me notation bhi dena ho ga ${} aesa par isme (this.name,Email) etc aese work karwaana ho ga function ko  
// to kuch is taraha bane ga syntaxt (`Assalamualaikum ${this.name}`)
// console.log(User.greeting());
// console.log(User.greeting2());


// Object ko do tarike se likh skhte hai jaise
const commiteeUser = new Object()
// ye hai 1 tarika second
const ComiteeUsers = {}
ComiteeUsers.id = "furqaan123"
ComiteeUsers.name = "Mohd Furqaan"
ComiteeUsers.email = "ansari@gmail.com"

// console.log(ComiteeUsers);
// ye pura hp gaya ek object jisko is tarah se bna skhte hai


// ab object ke and object kaise hota hai and usko kaise access ya jo bhi krte hai.....
const regularUser = {
    e_mail : "AnsFurq@gmail.com",
    fullname : {
      username :{
        Firstname : "Furqaan",
        Lastname : "Ansari"
     }           
    }
}
// console.log(regularUser.fullname.username.Firstname);
// ye dot laga laga ke jitni bhi depth me apni nesting hai usko access kr skhte hai
// and jaise bich ki koi chiz na ho to usme '?' ye laga dene ka to if else ye sb ka jhamela nhi rhe ga 

// ab object ko merge kaise kre jaise array me kiye hai wese hi object me bhi karna hai
const obj1 = {1:"A",2:"B"}
const obj2 = {3:"C",4:"D"}
const obj3 = {5:"E",6:"F"}
const obj4 = {7:"G",8:"H"}

// const obj5 = {obj1,obj2,obj3,obj4}
// ye syntax se whi ho ga object ke andar object aainge

// const obj5 = Object.assign({},obj1,obj2,obj3,obj4)
// ye syntax se ek object bane ga and ise "{}" isme ye jo empty bracket lagai ye zaroori hai isliye ki jitna bhi object merge karna hai wo sab ye empty string me chle jaai....
// empty bracket ek tarike se target hai jo return karta hai source ko as a new target ye zyada depth me jaane ki zaroorat nhi hai bs use karna hai itna dimaag me rkho....
// par ye bhi bht hactik hai kitna likhte rhenge isliye jaise array me use kre wese hi SPREAD method

const obj5 = {...obj1,...obj2,...obj3,...obj4}
// ye sab se best trika hai merge karne ka jisko khte hai SPREAD method

// jaise khi se object aaya wo array ke form me aata hai jiase hamara comittee user waala
// console.log(ComiteeUsers);
// console.log(Object.keys(ComiteeUsers));
// ye syntax puri keys bata deta hai
// console.log(Object.values(ComiteeUsers));
// ye value ke liye
console.log(Object.entries(ComiteeUsers));
// isme array me array band ke aata hai har ek key:value ka

// jaise object me koi property hai ki nhi ye pata krna hai to manually check krlo ya fir usse pucho(hasOwnProperty)and propert ko("aese kr ke likhna")...syntax se

console.log(ComiteeUsers.hasOwnProperty("age"));










