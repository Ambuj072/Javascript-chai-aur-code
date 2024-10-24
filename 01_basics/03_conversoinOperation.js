let score ="33"
console.log(typeof score); //string
let valueNumber =Number(score)
console.log(typeof valueNumber)//number

let newScore="33abc"
console.log(typeof newScore)
let valueNewScore=Number(newScore)
console.log(valueNewScore);//NaN
console.log(typeof valueNewScore)//number

let updatedScore =null
console.log(typeof updatedScore)//object
let valueUpdatedScore=Number(updatedScore)
console.log(valueUpdatedScore)//0
console.log(typeof valueUpdatedScore);//Number

let newUpdatedScore=undefined
console.log(typeof newUpdatedScore)//undefined
let valueNewUpdatedScore=Number(newUpdatedScore)
console.log(valueNewUpdatedScore)//NaN
console.log(typeof valueNewUpdatedScore);//number

let isScore=true
console.log(typeof isScore);//boolean
let numberIsScore=Number(isScore)
console.log(numberIsScore);//1
console.log(typeof numberIsScore)//number

//if converting in Number
/*
"33"=>33
"33abc"=>NaN
null=>0
undefined=>NaN
true=>1 
false=>0
*/


let name=""
let intoBool=Boolean(name)
console.log(intoBool);//false
console.log(typeof intoBool);//Boolean

//if converting in boolean
/*
""=>false
"Ambuj"=>true
1=>true
0=>false
*/

let number=33
let converStr=String(number)
console.log(converStr);//33
console.log(typeof converStr)//string

//if converting in string
/*
33=>"33"
*/










