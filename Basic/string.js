const name= "Furqaan"
const Repo = "100 "
// console.log(name + Repo + "Ansari"); Dont write the code like this

console.log(`Hello My name is ${name} and My RepoCount is ${Repo}`); 
// // string interpolition^ upar ki line ko ye khte hai ye moder way hai string ko add kar ne ka jiska.....
// // syntax hai "${}" ye AND isme method bhi easily use kar skhte hai ${.DOT laga ke}

const Familyname = new String("Ansari-FA")
// //Ye bhi ek tarika string likhne ka

console.log(Familyname.toUpperCase());
console.log(Familyname.charAt(4));
// // ye use hota hai kaunsa character kaunsi pos pe hai uske liye

console.log(Familyname.indexOf('r'));
// // ye use hota hai ki charcter kaunse index pe hai wo jaan ne ke liye

const NEW = Familyname.substring(1,7)
console.log(NEW);
// // It's use for substring it never get negative value

const ANOTHER = Familyname.slice(-8,5)
console.log(ANOTHER);
// // It's use for slicing the string it get neagtive value also

const newName = "     Shaikh     "
console.log(newName);
console.log(newName.trim());
// //  Trim work on blank space aur wo string ke blank space ko hata deta hai

const url = "https://AnsariFurqaan.com/Ansari%20Furqaan"
console.log(url.replace("%20","and"));
// //Replave method use for replacing something in string 

console.log(url.includes("Shaikh"));
// // Include method use for finding something in the string

const Rep_Array = "Ansari-Furqaan-8262"
console.log(Rep_Array.split("8262"));
// // Its use for converting into array and removing something from the string

const Try = "Ansari-Shaikh"
console.log(Try.bold("Ansari"));




