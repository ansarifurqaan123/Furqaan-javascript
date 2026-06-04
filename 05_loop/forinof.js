// ******* FOR OF LOOP ************
//  ab ye jitna bhi array hai ye array specific loops hai 
// jaise array me object aata hai [{},{},{}] aese and in array me jaake inka koi object ke value nikal na hota hai
// to wo value ko forof, forin , ya foreach loop laga ke "." ya fir "square" notaion laga ke nikaal na hota hai

// syntx for of 
// for (const element of object) {
    
// } -- elemnt of on=bj mtlb kis ke upar aapko loop laga na hai commn progmmr log naam lete hai "num in numbers" ya fir "greet in greetings" 

const arr = [1,2,3,4,5,6,7,8,9,10]
for (const number of arr) {
    console.log(number);
    
}
// ye ho gaya simple way arr ko use kra ne ka for of me
// elemnt ko chnge kr ke hm kuch bhi naam de skhte hai and obj jaha likha ho usko chnge kr ke jo bhi arr ho ga uske naam se replace kr do
// for of ko strings pe bhi laga skhte hai

const sting = "Furq aan"
for (const str of sting) {
    // console.log(`Every char is print in for of ${str}`);
}

// MAP me value kaise set krte hai wo dekh te hai
// map bhi khud me ek object hai
const map = new Map()
map.set('Fu','Furqaan')
map.set('Sh','Shadan')
map.set('Ar','Arif')
map.set('Am','Amina')
// map me koi bhi do value baar baar nhi add kr skhte hai
// console.log(map);

// ab is map pe loop kaise laga ana hai wo dekhte hai
// ab jaise map me ek key hai and ek value to key ko and value ko kaise print kre wo dekhte hai

for (const [key,value] of map) {
    // console.log(key,':-',value);
}
// map ek object hai to ispe forof lag gaya par main OBJECT pe for of lageta hai ki nhi wo dekhte hai

const MyObject ={
    'Fu' : 'Furqaan',
    'Ow' : 'Owais',
    'Ar' : 'Arif'
}
for (const key of MyObject) {
    console.log(key);
    
}
// isko jb run kre ga to error aai ga mtlb object pe for of nhi lge ga

//ab object kispe lage ga wo jaante hai

// *********** FOR IN ************
const Object = {
    js : "Javascript",
    py : "Python",
    java : "Java",
    cpp : "C++",
    swift : "Swift"
}
for (const key in Object) {
    console.log(key);
    // key ke liye ye 
    console.log(Object[key]);
    // ye hua key ki value 
    console.log(`${key} shortcut hai ${Object[key]}`)
    // ye hua saat me print krne ka tarike
}

const shortfom = ["js","py","cpp","swift"]
for (const key in shortfom) {
    console.log(key);
    // ab jb ye likhnge to o/p index ka aai ga 0123 aesa 
    // array ki original key kaise nikaale
    console.log(shortfom[key]);
    // ye hua key print krne ka tari ka
     
}
// MAP ME "FORIN" NHI USE HOTA HAI
// summary array me forof and objct pe forin

// *****************FOR EACH LOOP****************
// main for each jo sir ek parameter nhi laata hai 3 parameter hota hai
// array.forEach(item , index , and array)
const programming = ["java","ruby","python","swift"]

programming.forEach( (prog)=>{
    // prog means item name
    console.log(prog);
    
})
// 1 type print kaarne ka
// for each me function laga ke array ko execute krna hota hai 
// par isme function ko callback function kaha gaya hai and isme name nhi lgta hai

programming.forEach( function (prog){
    console.log(prog);
    
})
// 2 type print karane ka

// ab is array ko ek function bana ke function ke thorugh bhi execute karaya jaa skhta hai

function printeverything(prog){
    // console.log(prog);
}
programming.forEach(printeverything)
// 3 type print karane ki

// zayda tar arrow fnc use hota hai foreach me

// main for each jo sir ek parameter nhi laata hai 3 parameter hota hai
// array.forEach(item , index , and array)

const programmings = ["java","ruby","python","swift","c++","kotlin"]

programmings.forEach( (item,index,array)=>{
    console.log(item,index,array);
    
})
// ye ho gaya basic 

// MAIN jab bhi ham value fetch karte hai database se to wo [{},{},{}]
// is form me aati hai mtlb object ke form me and usme se ek obj ka agar access lena ho to kaise lenge

const MainFetch = [
    {
        Surname : "Ansari",
        Name : "Furqaan",
        Age : 23
    },
    {
        Surname : "Shaik",
        Name : "Fatima",
        Age : 18
    },
    {
        Surname : "Khan",
        Name : "Shadan",
        Age : 20
    }
]
// ye aese form me aata hai isme se ek key ya value cahiye to kaise le

MainFetch.forEach( (item)=>{
    // console.log(item);
    
} )
// ye hua pura print karane ka code koi ek key  chaiye to...

MainFetch.forEach( (item)=>{
    console.log(item.Name);
} )
// for each ko agar variable me put kr ke execute krenge to wo undifined batai ga