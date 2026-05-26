// For loop mtlb kuch kaam jo continue chlte rhe jab tkk ka unko rokenge nhi
// loop means hi whi hua na ek loop jo chlte rhe
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }---- ye ho gaya syntax iska
// summazrizing and expanding the syntax of for loop 
// let indx = 0----means variable, index<arr.lngt--means index ki lngth arr lngth se kam hona chahiye
// ye dono ke baad code andar aata hai fir aagr andar ki chize shi jaar hi hai fir wo for ko aage badhane ke liye 
// index++--- ke pass jata hai---means for ke indx ka jo lngth hai wo aage badhai ga aage ke liye
// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     console.log(element);
             
// }  ---- ye ho gaya smple loop 1 se lke 10 tk ka print karane ke liye

for (let i = 0; i <=10 ; i++) {
    const element = i;
    if (element==7) {
        // console.log("7- its for mssg smjh ne ke liye ki phele kya aai ga and if ka use kaise kare");
    }
    // console.log(element);
    
}

for (let i = 1; i  <=10 ; i ++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 1; j <=10 ; j++) {
        if (j==5) {
            // console.log(`5 detected now we out`);
            break
        }
    // console.log(`Inner loop ${j} and Outer loop ${i}`);
    }
}
// ye code hai ki loop me loop kaise use kre isliye jaise bahar ka jo loop hai jise hmne outer loop naam diye hai...
// otr loop ek baar chl ke innr loop me aai ga fir innki value hamne kaha tkk ke diye hai 10 to wo jb tkka 10vlu complet nhi kr de ga jb tk ka outtr pe nhi jaai ga 
// jb cmplte kre ga tb otr pe jaa ke otr ka loop chlai ga fir otr valu 2 ki ho gi and so on 

for (let i = 1; i  <=10 ; i ++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 1; j <=10 ; j++) {
    // console.log(`Inner loop ${j} and Outer loop ${i}`);
    // console.log(i + "*" + j + "=" + i*j);
    
    }
}
// ye code hai do nm ko apas me multipy krne ke liye

// Zyada tar loop array pe hi wokr krne bolta ha 
// to ek expm oop me lete hai
let myArray = ["Furqaan","Rayyan",5,2,10,3]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}
// ye ho gyaa ikdm basic array ko loop me chalane ka tarika 
// "index++" ye bht zaruri hai agar ye nhi hua to loop "0" index e ruk ke whi run krta rhe ga infinte times

// "break" jaise ki loop start to end tkk ka contine chlta hai to bich me rokne ke liye break use krte ha jaise ki switch me dekhe the 

for (let i = 1; i <= 15; i++) {
    if (i==10) {
        // console.log(`10 is detected ${i}`);
        break
    }
//    console.log(`value of i is${i}`);
}

// Continue mtlb jaise brk me bahar aajata hai loop ke wesa nhi ho ga bas jo bich me kaam karana hai wo krega lekin loop pura complete kre ga
for (let i = 1; i <= 20; i++) {
    if (i==15) {
        console.log(`${i} Detected for Continue`);
        continue
    }
   console.log(`value of i is ${i}`);
}
// jaise value of i "15" me nhi dikha and wo detctd wala print kara ke aage nikal gya mtlb continue kr diya
// yahi farak hai continue and break me brk rok ke bahar aajat hai par continue bahar hi aata hai