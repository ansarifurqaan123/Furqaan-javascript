// ye jaise hamne else if ke liye use kiye na agar bht saari condition ka check karna hai to elseif use krte the
// wese hi easy way me "switch" case use krte hai agar bht zyada condition hoti hai to

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } It is a syntax of Switch

const Days = 10
switch (Days) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Write proper Num of Days bcz days are only 7");
        break;
}