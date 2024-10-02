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
        fs.writeFile(path,data,(err)=>{
            if(err)
                reject(err)
            else
                resolve("Successfully created all the files")
        })
    })
}

function deleteRandomFiles(path){
    return new Promise((resolve,reject)=>{
        fs.unlink(path,err=>{
            if(err)
                reject(err)
            else
                resolve("Successfully deleted all the files")
        })
    })
}

// function createDelete()
// {
//     let path = "Async_Await/jsonfiles"
//     mkdir(path)
//     .then(()=>{
//         for(let i=0; i<5; i++)
//             createRandomFiles(`${path}/randomFile${i+1}.json`,"")
//     })
//     .then(()=>{
//         for(let i=0; i<5; i++)
//             deleteRandomFiles(`${path}/randomFile${i+1}.json`)
//     })
//     .catch(err=>console.log(err))
// }

// createDelete()

async function createRandom(){
    let res = await mkdir("Async_Await/jsonfiles")
    for(let i=0; i<5; i++)
        await createRandomFiles(`Async_Await/jsonfiles/randomFiles${i+1}.json`,"")    
}

async function deleteRandom(){
    for(let i=0; i<5; i++)
        await deleteRandomFiles(`Async_Await/jsonfiles/randomFiles${i+1}.json`)
}

module.exports = {createRandom, deleteRandom}