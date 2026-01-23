// ***********PART 1 OF ARRAY*****************//
// array should be in "[]" this brackect
// array is 'Object' aur ek array ke variable me bht saa element daal skhte hai
// array in s is resizeable and in one array has many variety string,num,boolean etc
// array ke value ko access kiya jaata hai uske idexing form se 
// array make shallwo copies of file mtlb jiska refrence same hota hai rather than a deep copies jiska refrence same nhi hoti hai
// DECLARING OF ARRAY TYPE MEANS
//  1 type to declare the array const array = [10,11,12,13,14,15]
//  2 type to declare the array const arry1 = new Array(1,2,1,21,)
//  3 type const hero = ["ironman","hulk"]
// console.log(array[2]); for finding the index

// *********** Method of array************//
// const array = [10,11,12,13,14]
// array.push(9)
// array.push(15)
// // push is used to add element in array
// // console.log(array);
// array.pop()
// pop is used to remove the element jo last me and recent add hua hai
// array.unshift(20)
// unshift method value ko starting me add kar deta hai array ke o ke bade array jaise 10000 ka ho uske liye shi nhi hai aur khi khi shi hai
// array.shift()
// shift is used to remove the recent elemnt which add in array 

// console.log(array.includes(10));
// include is used to find the element in array me emlnt hai ki nhi iske liye and O/P True ya False me aai ga

// console.log(array.indexOf(14));
// ye used hota hai ki emlnt kaunse index pe hai array me usko find krne ke liye.....
// and agar koi emlnt ka index ham find kar rhe hai and wo emlnt array me nhi hai to O/P value "-1" aai gi

// const arrjoin = array.join()
// console.log(array);
// console.log(arrjoin);
// join method array ko string form me convert kr deta hai mtlb type chnge ho jaata hai and bn jaat hai string

// Method Slice and Splice      
const array = [10,11,12,13,14]
console.log("A ",array);
// const newarray = array.slice(0,3)
// console.log(newarray);
// console.log("B ",array);
// slice me start and end point dena hota hai and 0 se index shuru krta hai and jis waqt slice krte hai us time tkk ka hi slicing hota hai .....
// original as it is rhe gi

const newarray = array.splice(1,2)
console.log(newarray);
console.log("B ",array);
//  splice me bhi start and end point daalna hota hai par splice me o bhi strt and end pount daalte hai.....
// to o/p show kre ga jaise slice me kiya par original form pura badal dega 
// jaise maine splce kra(1,2)--jo array me [11,12]hai to ye return kre ga par original array me se remove ho jaai ga
// and main splice jo start and end point daalenge utna pura aata hai jaise slice me ek step kam aata hai splice me pura aata hai










  