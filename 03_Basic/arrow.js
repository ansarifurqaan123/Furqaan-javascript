// ++++++++++++++++++++ This +++++++++++++++
const user = {
    username: "Furqaan",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to the Website`);
        console.log(this);
    }
}
// this use hota hai current context jo bhi rhe hai usko print kre ga 
// user.welcomeMessage()
// user.username = "Owais"
// user.welcomeMessage()
// console.log(this);

// yaha pe current context change hua mera to owais print ho ke aai ga
// in short 'this' function use kiya jaata hai jaise koi context hai mtlb jo lihe ho agar usko koi bhi access kare to ham this krenge 
// ki uspe koi bhi aai aur use kre to wo use ho jai ek "hardcore" na rhe wo

// ab this kya hai wo jaante hai
//jaise ki maine do jagah this ko consoe log kiya ek function me and ek pure node enviro se bahar....
//jo functn ke andar tha usne pura context print kr ke diya ki phele aap ka user furqaan tha to kya context tha then aap ne change kiya owais pe to kya context hai ye pura bataya
//par jo func envir se bahar log karne bola to usne empty "{}object" de diya ki mtlb kuch context rhna bhi chahiye na bhaai daalne ke iye 
// mtlb simple ye hai ki this ek object hai jo current jo bhi context hai usko hold krta hai
// Main chiz yaha pe this ko cosolge log krenge to empty {object} aata hai par browser pe krenge to alag aata hai....
// browser pe run krenge to window tab aata hia phele browser me hi run hota tha na ab iska engine bahar nikal ke kisi ne node and alag alag name de diye hai
function samjhna(){
    console.log(this);
}
// jab ye function pe this ko use kr ke call krenge to bht saari inner value aai gi this ki function ke andar
function samjhna(){
    let username="Owais"
    console.log(this);
}
// jab aesa krenge to bhi same upar waale ki tarah bht si value aai gi gobal and all
function samjhna(){
    let username="Owais"
    console.log(this.username);
}
// par jab yaha pe karenge to o/p aai ga undefined q ki this sirf object me hi use hoke o/p deta hai "Function"me use nhi hota hai
// samjhna()

// +++++++++++++++++++ Arrow +++++++++++++++++++++++
//Syntax of arrow function "()=>{}" ye hai

const arr_samjhna = ()=>{
    // console.log(this);
}
arr_samjhna()
// abhi bhi empty object aai gi this ki value sirf object hi pe che ga 
//  ab proper arrow function krnege

// 1 way
const addTwoNumber = (num1,num2) => {
    return num1 + num2
}

// 2 way is "implicit" yaha pe one line me function code likh skhte hai and isme "Parenthesis and Return" nhi likhna padhta hai q ki ek hi line me hai na 
const addTwoNumber = (num1,num2) => num1 + num2
console.log(addTwoNumber(4,5))

// 3 way yaha pe ye waa parenthesis laga skhte hai par {} ye wala lagao ge to return likhna pdhe ga
const addTwoNumber = (num1,num2) => (num1 + num2)

//  4 way agar object print krna hai arrow function me to kaise kro ge
const addTwoNumber = (num1,num2) => {username:"Furqaan"}
console.log(addTwoNumber(4,5));
// yaha value undefined aai gi ham basicaly onj ko {}ishi me wrap krte hia pr arrow fnctn me

const addTwoNumber = (num1,num2) => ({username:"Furqaan"})
// yaha pe {}isse phele ek aur parenthesis laga na pdhta hai ()ye wala tab jaa ke print ho ga objct
console.log(addTwoNumber(4,5));

