const fs = require("fs")

function mkdirPromise(path){
    return new Promise((resolve,reject)=>{
        fs.mkdir(path,(err)=>{
            if(err)
                reject(err)
            else
                resolve("successfully created a directory")
        })
    })
}

function readDirPromise(path){
    return new Promise((resolve,reject)=>{
        fs.readdir(path,(err,data)=>{
            if(err)
                reject(err)
            else
                resolve(data)
        })
    })
}

function createPromise(path,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(path,data,(err)=>{
            if(err)
                reject(err)
            else
                resolve("Successfully created all the files")
        })
    })
}

function deletePromise(path){
    return new Promise((resolve,reject)=>{
        fs.unlink(path,err=>{
            if(err)
                reject(err)
            else
                resolve("Successfully deleted all the files")
        })
    })
}

function createDeleteRandomFiles(limit){
    let path = "CustomPromises/jsonfiles"
    mkdirPromise(path)
    .then(()=>{
        for(let i=0; i<limit; i++)
            createPromise(`${path}/randomFile${i+1}.json`,"")
    })
    .catch(err=>readDirPromise("CustomPromises/jsonfiles")
    .then((data)=>{
        if(data.length>0){
            for(let i=0; i<data.length; i++)
                deletePromise(`${path}/randomFile${i+1}.json`)
        }
        else{
            for(let i=0; i<limit; i++)
                createPromise(`${path}/randomFile${i+1}.json`,"")
        }
    })
    .catch(err=>console.log(err)))
}
module.exports = {createDeleteRandomFiles}