const func = require("/home/shounak/Asynchronous/CustomPromises/problem1.js")

let createDelete = func.createDeleteFile
let succes = func.successfulExecution
let failure = func.failedExecution

createDelete(false).then(succes,failure)