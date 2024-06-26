//push , concate,...split, flat
const superHeros = ["Batman", "Spiderman"]

const hindiHeros=  ["Bheem", "TomnJerry"]

//console.log(superHeros , hindiHeros)

//superHeros.push(hindiHeros)

//superHeros.concat(hindiHeros)

//const allHeros = superHeros.concat(hindiHeros)

//console.log(allHeros)

let allHeros = [...superHeros, ...hindiHeros]

//console.log(allHeros)

//Correction all array values in line.
const  another_array = [1,2,3 , [4,5],6,7,[7,8]]

const real_array =another_array.flat(Infinity)

//console.log(real_array);

//Checking is value array or not
//cover array from string

console.log(Array.isArray("Prathmesh"))
console.log(Array.from("Prathmesh"))
console.log(Array.from({Name : "Prathmeesh"}))//**imp concept */

//Convert values into the array using #of.
let score_1 = 100
let score_2 = 200
let score_3 = 300

console.log(Array.of(score_1,score_2,score_3))



