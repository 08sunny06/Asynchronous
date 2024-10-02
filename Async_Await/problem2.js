const fs = require("fs")

function makeDirectory(path){
    return new Promise((resolve,reject)=>{
        fs.mkdir(path,{recursive:true},(err) => {
            if(err)
                reject(err)
            else
                resolve("")
        })
    })
}

function readingFile(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,"utf-8",(err,data)=>{
            if(err)
                reject(err)
            else
                resolve(data)
        })
    })
}

function writingFile(path,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(path,data,(err)=>{
            if(err)
                reject(err)
            else
                resolve("")
        })
    })
}

function appendingFile(path,data){
    return new Promise((resolve,reject)=>{
        fs.appendFile(path,data,(err)=>{
            if(err)
                reject(err)
            else
                resolve("")
        })
    })
}

function deletingFile(path){
    return new Promise((resolve,reject)=>{
        fs.unlink(path,(err)=>{
            if(err)
                reject(err)
            else
                resolve("")
        })
    })
}

function sentenceCase(str){
    let regex = /[./?!](?=\s|$)/g
    str = str.split(regex)
    str = str.filter((item)=>item.trim()!=="")
    return str
}

async function lipsumTasks(){
    await makeDirectory("Async_Await/upgradedFiles")
    let contents =  await readingFile("Async_Await/lipsum.txt")
    await writingFile("Async_Await/upgradedFiles/text1.txt",contents.toUpperCase())
    await writingFile("Async_Await/filename.txt","text1.txt")
    let contents1 =  await readingFile("Async_Await/upgradedFiles/text1.txt")
    await writingFile("Async_Await/upgradedFiles/text2.txt",sentenceCase(contents1.toLowerCase()).join("\n"))
    await appendingFile("Async_Await/filename.txt","\ntext2.txt")
    let contents2 =  await readingFile("Async_Await/upgradedFiles/text2.txt")
    await writingFile("Async_Await/upgradedFiles/text3.txt",(contents2.split("\n").sort()).join("\n"))
    await appendingFile("Async_Await/filename.txt","\ntext3.txt")
}

async function deletFile(){
    let contents = await readingFile("Async_Await/filename.txt")
    contents = contents.split("\n")
    for(let i=0; i<contents.length; i++)
        await deletingFile(`Async_Await/upgradedFiles/${contents[i]}`)
}

module.exports = {lipsumTasks, deletFile}