// *************** SCOPE *****************
// curly bracket ko scope bolte hai "{}" ab chaahe ye kisme bhi aai object ka curly bracket alag hai lekin baaki chize jaha jaha pe curly bracket aai gi .......
// function me if else me jaha bhi ushe kahte hai scope 
//  abhi jaise start me pdhe hai let, const, and var isme se let and const use kr skhte hai par var nhi ye aaj dekhte...


// ab ye pure ko if me daalege 
// if (true){
//     let a = 10
//     const b = 20
//     // var c = 30
// }
// brcket start to end ko scope bolte hai and line 8 se line 12 tkk ka jo bhi variable ya fun hai wo line 13 pe nhi aana chahiye(mtle brckt ke bahar agar jaa rhi hai to mtlb problem hai)
// ab isme "a"and "b" kbhi print nhi ho ga q ki wo andar hai par "c print ho ga isliye var declare nhi krte hai"
// console.log(a);
// console.log(b);
// console.log(c);
// ab c print nhi hona chahiye the isliye var ka discuss nhi krenge q ki agar koi programmer usko bahar var c = 300 daala ho par function me agar c = 30hus and wo usko check nhi kiya to print baar baar 30 ho ga jisse confusion ho ga
 
// {} iske andar ke chizo ko bolte hai "Block Scope" and bahar jo bhi hai usko kaha jaata hai "Global Scope" 
// "Global scope" me jo bhi likhenege wo "Block scope" me available hoti hai par "Block scope" ki chize "Global me available nhi hoti hai"
let a = 300
if (true){
    let a = 10
    const b = 20
    // console.log("Block Scope ka a: ", a);
    
}
// console.log(a);
// ab isme me global me bhi "a" hai and block me bhi "a" hai par dono apna work alag kr rhe hai q ki glbl waala glbl me and blck wala blck me don apas me ek dusre ko kaat nhi rhe hai
// and dono ko access krna ke tarika bhi aalag hai blck ko blck me and globl ko globl me krte hai

// ********** NESTED SCOPE **************
// child function access any thing from parent function

function one(){
    const surname = "Ansari"
    function two(){
        // const name1 = "Furqaan"
        // const name2 = "Owais"
        console.log(surname);
    }
    // console.log(name1);
    // ye jo comsole log hai ye kbhi print nhi ho ga q ki ye access kr raha hai blck scope ki chizo ko 
    // two()
    // yaha pe "two function" ko call kiye and isme log hai hai surname ka to surname print ho gaya  
}
one();
// agar two ko hata denge to two ka kuch bhi kbhi o/p nhi dega q ki two ko kbhi call hi nhi kiye hai 

// ab ikdm simple language me scope ka access and all kya hai ice-cream lene jaisa chota bacha bado se icecream maang sakhta hai par bade choto se nhi maang skhte
// wese hi scope me hai "one" bada hai and "two" chota hai
// to yhi "two" one se kuch bhi maang skhta hai par "one" two se nhi maang skhta  

// ab aese hi if and else me bhi hota hai
if(true){
    const surname = "Ansari"
    if(surname==="Ansari"){
        const name = " Furqaan"
        // console.log(surname + name);
        // ye ho ga q ki chota bade se maang raha hai
    }
    // console.log(name);
    // ye isliye o/p nhi dega q ki bada chote se maang raha hai
}
// console.log(surname);
// ye bhi nhi ho ga q ki ye bhi bada chote se maang raha hai (mtlb global block se maang raha hai)

// ********** INTRESTING ***************
// there are two syntax to write the function

// first
console.log(addone(5));
function addone(num){
    return num + 1
}


// second
addtwo(5)
const addtwo = function (num){
    return num + 2
}

// ye moment pe run karunga to koi error nhi aai ga mtlb sab function ko niche call kr raha hu
// one ke calling function ko upar le liya and to wo run bhi ho ga and o/p bhi de ga 
// second ko upar lunga to yaha pe error aai ga q ki second ko ham ek variable me hold kiye hai and koi bhi variable ka 
