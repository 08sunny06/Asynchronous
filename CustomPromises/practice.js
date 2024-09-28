const { on } = require("events")
const fs = require("fs")

function erroR(){
    return ("Sorry can't do tasks")
}

function add(num1,num2){
    return num1+num2
}

function subtract(num1,num2){
    return num1-num2
}

function multiply(num1,num2){
    return num1*num2
}

function divide(num1,num2){
    return num1/num2
}

function promiseMyOwn(mytasks){
    return new Promise((resolve,reject)=>{
        if(mytasks)
            resolve(console.log(mytasks))
        else
            reject((erroR()))
    })
}

// function onSuccess(completed){
//     console.log(completed)
// }

function onFailure(failed){
    console.log(failed)
}

// let res = promiseMyOwn(add(21,34)).then(onSuccess,onFailure)
// let final = promiseMyOwn(subtract(add(21,34),24)).then(onSuccess,onFailure)

// console.log(res,final)
promiseMyOwn(add(34)).then().catch(onFailure)