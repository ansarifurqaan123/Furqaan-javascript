// jiase for eack me hamne dekha tha ki ham pure array ka access le skhte hai par 
// agar us array ke value me kuch condition karwaana ho ya kuch alag chahiye to kaise aur kya karenege ?
// Ans :- is case me use karte hai "filter"

// **************Filter****************
const Mynums = [1,2,3,4,5,6,7,8,9,10]
const Mainnums = Mynums.filter((numbers) => numbers > 5 )
console.log(Mainnums);
// ye hua bsc syntx filter k

const Mainnums = Mynums.filter((numbers) => {
    numbers > 5 
})
// is case me o/p me khali array aai ga q ki hamne pdha hai {}ye ek new scope bana deta hai and iske liye "return" use karna pdhta hai
const Mainnums = Mynums.filter((numbers) => {
    return numbers > 5 
})

console.log(Mainnums);
// yhi same ko agar for each me lga na ho to laga skhte hai par bht hectic hai lekin kaise krte hai dekhna zaroori hai

const Mynums = [1,2,3,4,5,6,7,8,9,10]
const Mainnums = []
Mynums.filter( (numbers) => {
    if (numbers > 5) {
     Mainnums.push(numbers)
    }
})
console.log(Mainnums);
// same o/p aai ga par ye thoda lonhform hai dono shi hai

// ***Filter ke liye example lenge best*******
const Movies = [
    {title:"Harry potter", genre:"Fantasy", release: 2002, part: 8},
    {title:"Avengers", genre:"Action", release: 2005, part: 12},
    {title:"Twilight", genre:"Vampires", release: 2003, part: 17},
    {title:"Hera pheri", genre:"comedy", release: 2005, part: 3},
    {title:"Narnia", genre:"Fantasy", release: 2002, part: 7},
    {title:"Dumb and Dumbers", genre:"comedy", release: 2000, part: 2},
    {title:"Iron man", genre:"Action", release: 1999, part: 3},
] 
// ye ek movies list hai and user ko movies dekhna hai and hame uske hisaab se usko movies dikhana
let userMovies = Movies.filter( (Mp4) => Mp4.genre === "Fantasy" )
userMovies = Movies.filter(  (Mp4)=> {
    return Mp4.release >= 2003
    // abhi ye code likhne me 3 movie suggston me aai action vam comd par user ko chote part waali movies chaiye
    return Mp4.release >= 2003 && Mp4.part <= 3 && Mp4.genre === "comedy"
})

console.log(userMovies);

// ********* Map*************
// ab ye use krte hai arr me kuch chnge ya kuch conditin laga ne ka
const Mynums = [1,2,3,4,5,6,7,8,9,10]
const Numss = Mynums.map( (numbers) => numbers + 10)
console.log(Numss);

// Chain jisko (chaining bhi khte hai) Kaise lagai mtlb ek saat bht saare map and filter use krna

const Numss = Mynums
            .map( (numbers) => numbers * 10 )
            .map((numbers) => numbers +1)
            .filter((numbers) => numbers >= 51)
console.log(Numss);
// 1) numbers jo hai wo return kr ke ek saat value denge q ki Numss ko numbers kya hai nhi pata 
// 2) diffrnce btween map and filter
// map :- isme operation karte hai and condition rhti hai , filter :- isme true and false ki condtion hoti hai

            




