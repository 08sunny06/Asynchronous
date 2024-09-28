const fs = require("fs")

function creatingFile(path) {
    fs.writeFile(path, "", (err) => {
        if (err)
            console.log(err)
    })
}

function deletingFile(path) {
    fs.unlink(path, (err) => {
        if (err)
            console.log(err)
    })
}


function createDeleteFile(cond) {
    return new Promise((resolve, reject)=>{
        fs.mkdir("CustomPromises/jsonFiles",{recursive:true},(err)=>{
            if(err)
                console.log(err)
            else{
                if(cond){
                    for(let i=0; i<5; i++)
                        resolve(creatingFile(`/home/shounak/Asynchronous/CustomPromises/jsonFiles/randomFile${i+1}.json`))
                }
                else{
                    for(let i=0; i<5; i++)
                        reject(deletingFile(`/home/shounak/Asynchronous/CustomPromises/jsonFiles/randomFile${i+1}.json`))
                }
            }
        })
    })
    return ""
}

function successfulExecution(getResolve){
    console.log(getResolve)
}

function failedExecution(getRejected){
    console.log(getRejected)
}

module.exports = {createDeleteFile, successfulExecution, failedExecution};
