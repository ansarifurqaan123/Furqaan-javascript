const marks = 200
// console.log(marks);

const score = new Number(245.6524)
// console.log(score);

// console.log(score.toString());
// This use to convert the number into string

// console.log(score.toFixed(2));
// ye use hota hai o bhi number hai uske aage decimal point ka zero lagana jaise amazon me price me hota hai wesa.....
// jaise maine 3 lagaya fix me to O/P aaya 300.000 jaise koi number hota 245.6524 to agar mai fix(2)karta..
// to O/P value me aata 245.65 and fix hamesha string return karta hai

const another =  652.1265
// console.log(another.toPrecision(5))
// iska mtlb precision number ko ek specific digit me convert kr ke return karta hai
// jaise 652.1265 ab maine pric(2) liya to wo 2 number ko digit me daale ga baaki sb ko precide kar dega to O/P aai ga 6.5e+2 aesa
// and jaise maine pric ko(4 ya 5 diya) to value 652.1 and 652.13 respectively aai ga wo udhar .126 hai to wo round off kar ke value return kre ga .13 aai gi 

const Hundread = 1000000
// console.log(Hundread.toLocaleString('en-IN'));
// ye value ko coma me return kr ta hai and en-IN lagane ka mtlb ke indian value me return kre

// ********************MATHS***********************

// console.log(Math);

// console.log(Math.abs(-5));
// this method is used for removing the negative sign from the number

// console.log(Math.round(5.6))
// ye method use hota hai value ko round off(mtlb agar decimal ke baad 5 se upar hai num to wo badha ke de dega aur nhi hua to decimal value hata de ga) karne ke liye

// console.log(Math.ceil(4.1));
// ceil mtlb value ka decimal zara sa bhi badha rhe ga jaise (4.1 bhi hua to wo 5) return kar dega jo ke shi nhi hai

// console.log(Math.floor(4.9));
// floor mtlb value decimal ke baad kitna bhi bada rhe ga jaise(4.9 bhi hua to wo 4) return kre ga jo ke ye bhi shi nhi hai
// ISLIYE ZYADA TAR ROUND USE KARTE HAI AND HOTA HAI

// console.log(Math.sqrt(4));
// ye square root nikal ne ke liye use hota hai

// console.log(Math.min(5,9,2,10));
// for min value

// console.log(Math.max(100,500,575,689))
// for max value

// console.log(Math.random());
// iski value hamesha 0 se 1 ke bich me hi aai gi 0.9,0.8,1 lekin (1 se zyada nhi aai gi)

// console.log((Math.random()*10)+1);
// jaise random me 0 se 1 ki value aati hai par mujhe 1 se 10 ya ek startinh num se end num ke bich me value chahiye...
// to mai *10 se krunga jaise algebra me rhta hai 10 se multi krte hai to decimal kat jaata hai wese...
// wese hi yaha ek value shift ho jaai gi *100 se krunga to 2 value
// AND Main +1 isliye krte hai ki value one se hi shuru ho +1 nhi daalenge to value zero aa skhti hai jo ke nhi chahiye...

// Jaise meko 1 se shuru nhi krna hai to 10 se 20 ke bich me cahiye to mai kaise krunga aage ke code me hai...
const min = 10
const max = 20
// ab mujhe 10 se leke 20 ke bich random number chahiye....

console.log(Math.random()*(max-min));
// agar sirf ye code likehnge to value 0 se 20 ke bich me aai gi par apne ko 10 se 20 chahiye to uske liye...

console.log(Math.random()*(max-min + 1));
// isme 1 se shuru ho gi value pr 10 se chaiye q ki min value 10 hai

console.log(Math.random()*(max-min + 1)+min);
// ab value 10 se 20 ke bich me aai gi par meko point me nhi chaiye to floor use kr leneg

console.log(Math.floor(Math.random()*(max-min + 1)+min));
// ab value barabar 10 se 20 me aai gi and pint bhi nhi aai ga

//****************** EXPLANATION OF ABOVE SUM********************// 
// math.floor use kiye (decimal point hata ne ke liye)
// math.random (random value laane ke liye 0 se 1) me
// par meko chaiye 10 se 20 ke bich to isme mai math.random()ko * multi krunga max and min se....
// and wo max and min apas me minus ho ga isliye ki last value 20 hi rhe 20 se upar nhi aai..jo ban jaai ga ....
// math.random()*(max-min) 
// par yaha pe value 0 se shuru ho gi to iske liye mai max - min ko +1 krdunga to ab num start ho ga 1 se..
// mtlb math.random()*(max-min + 1) 
// par abhi bhi value 1 se shuru ho gi par hame chahiye 10...
//  se to is liye pure formula ko jaise *10 kiye the to wo ek decimal aage badh gaya tha wese hi idhar 
// *krenge min se q ki hame apne min value (10)se 20 ke bich me chahiye haina
// (math.floor(math.random()*(max-min + 1) + min)ab ye bana complte formula
// max - min + 1  mtlb ek range ki yaha se tkk ka




