//  ************Reduce************
const array = [1, 2, 3, 4];

0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// // Expected output: 10
// ye hai mdn ki note reduce ki  
// accumltor ka mtlb ek khaali array deta hai reduce jisme initialval jaati hai
// initialval mtlb kaha se shuru ho ga accm ab ye accm ek baar initial se value le ga fir jo rhe gi ushi ko leta rhe ga and 
// crrnt val pe daal ke jo bhi condition rhe gi usko perform kre ga

// example lete hai ab
// reduce ke parameter me hmesha do chize milti hai accum and currnval
const rdc = [1,2,3]

const totalrdc = rdc.reduce( function (acc,curval) {
    console.log(`Accumilator ${acc} and CurrentValue ${curval}`);
    // ye smjh me aane waali line hai ki kaise kya aage badh raha hai
    return acc + curval
},0 )
console.log(totalrdc);
// 0 initial val hai q ki acc ko pata nhi hai kaha se shuru krna hai 
// initial val hamesha func ke baad me laga te hai jab norml func me par arrow me nhi lagate hai

const totalrdc = rdc.reduce( (acc,curval) => acc + curval, 0)
// // ye ho gaya arrow function me reduce kaise use kare

console.log(totalrdc);

// Real life example lete hai shopping ka
const shoppingCart = [
    {
        Game: "God of War",
        Price: 1500
    },
    {
        Game: "Call of Duty",
        Price: 999
    },
    {
        Game: "Assasians Creed",
        Price: 1200
    },
    {
        Game: "Fifa",
        Price: 1200
    },
    {
        Game: "Gta 6",
        Price: 1999
    },
]
// ab meko pure game ki price ka total nikal na hai
const Totalprice = shoppingCart.reduce( (acc, item) => (acc + item.Price), 0)
// yaha pe item denote kiya jata hai har object ko q ki ek obj bht saara item laa raha hai
console.log(Totalprice);

