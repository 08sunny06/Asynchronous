const fs = require("fs")

function mkdir(path){
    return new Promise((resolve,reject)=>{
        fs.mkdir(path,{recursive:true},(err)=>{
            if(err)
                reject(err)
            else
                resolve("successfully created a directory")
        })
    })
}

function createRandomFiles(path,data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{fs.writeFile(path,data,(err)=>{
            if(err)
                reject(err)
            else
                resolve("Successfully created all the files")
        })},2000)
    })
}

function deleteRandomFiles(path){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{fs.unlink(path,err=>{
            if(err)
                reject(err)
            else
                resolve("Successfully deleted all the files")
        })},5000)
    })
}

function createDeleteRandomFiles(){
    let path = "CustomPromises/jsonfiles"
    mkdir(path)
    .then(()=>{
        for(let i=0; i<5; i++)
            createRandomFiles(`${path}/randomFile${i+1}.json`,"")
    })
    .then(()=>{
        for(let i=0; i<5; i++)
            deleteRandomFiles(`${path}/randomFile${i+1}.json`)
    })
    .catch(err=>console.log(err))
}

module.exports = {createDeleteRandomFiles}