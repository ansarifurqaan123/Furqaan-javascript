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
// const array = [10,11,12,13,14]
// console.log("A ",array);
// // const newarray = array.slice(0,3)
// // console.log(newarray);
// // console.log("B ",array);
// // slice me start and end point dena hota hai and 0 se index shuru krta hai and jis waqt slice krte hai us time tkk ka hi slicing hota hai .....
// // original as it is rhe gi

// const newarray = array.splice(1,2)
// console.log(newarray);
// console.log("B ",array);
//  splice me bhi start and end point daalna hota hai par splice me o bhi strt and end pount daalte hai.....
// to o/p show kre ga jaise slice me kiya par original form pura badal dega 
// jaise maine splce kra(1,2)--jo array me [11,12]hai to ye return kre ga par original array me se remove ho jaai ga
// and main splice jo start and end point daalenge utna pura aata hai jaise slice me ek step kam aata hai splice me pura aata hai

// ***************PART 2 OF ARRAY******************
// const marvels = ["Ironman","Hulk","Thanos"]
// const D_c = ["Superman","Batman","Wonder Women"]
// marvels.push(D_c)
// console.log(marvels);
// agar jasie muhe dono array ko merge karna hai to push method bht galat hai isme array ke andar array aaata hai na ki ek form bnata hai
// const all_heros = marvels.concat(D_c)
// console.log(all_heros);
// concat method se ham dono array ko merge kar skhte hai

// Par isse bhi easy tarika hai, jaise agar bht saara array rhe to concat methd se possible nhi hai 
// to iske liye ham use karenge SPREAD Method
// jaise agar teen array ko join krn hai to spread is best

// const marvels = ["Ironman","Hulk","Thanos"]
// const D_c = ["Superman","Batman","Wonder Women"]
// const indian = ["Shaktiman","Flying Jat","Krrish"]

// const all_heros = [...marvels,...D_c,...indian]
// console.log(all_heros);
// isme kitne bhi array rhe ye easily ek form bana de ga

// ek aur method jaise array ke andar bht saara array ho aur meko ek  array chahiye to is situation me ham use krnege FLAT method

// const combine = [1,2,3,4,5,[6,7,8],9,10,[1,2,4,[2,5,11]]]
// // ye aesa kuch array hai pr meko ek array chahiye and sab elemnt to use krnege
// const one_array = combine.flat(Infinity)
// console.log(one_array);

// kabhi ham file scrapping kar waai ya file apne paas mangwaai to is situation me file kaise bhi aa skhti hai string,boolean,number any form and meko usko ARRAY me convert krwaana hai

console.log( Array.isArray("Furqaan"));
// ye array nhi hai to Flase bataya O/P

console.log( Array.from("Furqaan"));
// to ye is From method se easily ham kisi bhi chiz ko array me convert kr skhte hai

// one more thing agar ham object ko array me convert krnege jaise ki ye
console.log( Array.from({name:"Furqaan"}));
// to isme array empty batai ga "[]" aesaa

// AB jaise bht saara and usko ek array me convert krna hai to 'From' nhi 'OF' use krnege jaise
const num_1 = 100
const num_2 = 150
const num_3 = 200
const num_4 = 250
const num_5 = 300
console.log(Array.of(num_1,num_2,num_3,num_4,num_5));
// to ye pura ek array me convert ho jaai ga









  