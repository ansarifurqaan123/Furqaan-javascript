// while loop me condition check krna hota hai ki shi hai ki nhi
// while (condition) {
    
// }----- ye ho gaya while ka syntax
// par isko likha for ke jaisa hi jaat ahi ki initialize krna hai, increment krna hai same wese hi bs isko likhna khud se ho ga hame
// jaise "for" me ek hi line me sab daala jata hai, wese "while" sb khud se likha jaata hai jaise...
let index = 1
while (index <= 20) {
    // console.log(`The Value of ${index}`);
    index = index + 3
}
// array me kaise use kre
let Myarray = ["Shadan", "Owais", "Rayyan", "5","20"]
let array = 0
while (array < Myarray.length) {
    //console.log(`The Value of Myarray ${Myarray[array]}`);
    // ye ho gyaa array ko kaise print krte hai
    array = array + 1
}
// ek let array hai, sec let array ka indx hai, while me indx se main arry ko check krna hai
// console me main array se index array ko print krainge and indx array ko increment krenge warna wo chlta rhe ga

// Ab hai "do while loop" iska syntax
// do {
    
// } while (condition); ---- isme do phele kaam kardeta hai and condition baad me check krta hai while ke zariye

let score = 1
do {
    // console.log(`Value of dowhile ${score}`);
    score++
} while (score <= 15);

// main isme incremnt ke liye ++ hi lga na pdhe ga agr +1, ya +2 lagay to value ek hi ko print krta rhe ga continue
let score = 16
do {
    console.log(`Value of dowhile ${score}`);
    score++
} while (score <= 15);
// ab jaise scroe ko 16 kr diya to ye koi error nhi dikhaai ga 16 prnt kr dega and baad me cndtion check kre ga
// database se jab bhi value fetch krte hai wo array ke form me deta hai 
// and array pe loop laga na bht easy hai aesa chai code waale bhaiyya bole mai jb karuga tb pata chle ga