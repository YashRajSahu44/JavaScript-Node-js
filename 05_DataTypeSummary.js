// Primitive
//There are 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt..
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const Temp = null
let userEmail = undefined

const id = Symbol('123')
const androId = Symbol('123')

const bigNumber = 46736067486390835984n  //n represents bigInt


//RefrenceType / Non-Primitive
//Arrays, Objects, Functions

const Aot = ["Eren" , "Mikasa" , "Armin"]; //Example of array

//Object : Stored inside Curly Brace {}
let myObj = {
    name : 'Yash',
    age : 18,
}

const myFunction = function(){
    console.log("keep Moving Forward");
}

// How to dtermine DataType?
console.log(typeof isLoggedIn);
