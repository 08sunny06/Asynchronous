const fs = require("fs/promises")
const { join } = require("path")

function sentenceSpliter(text){
    let sentRegex = /[.\?!](?=\s|$)/g;
    const sentence = text.split(sentRegex)
    const cleanSent = sentence.filter(item => item.trim()!=="")
    return cleanSent
}

function lipsumUpgrades() {
    fs.mkdir("Promises/modifiedFiles",{recursive:true})
    .then(()=>fs.readFile("Promises/lipsum.txt","utf-8"))
    .then((data)=>fs.writeFile("Promises/modifiedFiles/text1.txt",data.toUpperCase()))
    .then(()=>fs.writeFile("Promises/filename.txt","text1.txt"))
    .then(()=>fs.readFile("Promises/modifiedFiles/text1.txt","utf-8"))
    .then((data)=>fs.writeFile("Promises/modifiedFiles/text2.txt",sentenceSpliter(data.toLowerCase()).join("\n")))
    .then(()=>fs.appendFile("Promises/filename.txt","\ntext2.txt"))
    .then(()=>fs.readFile("Promises/modifiedFiles/text2.txt","utf-8"))
    .then((data)=>fs.writeFile("Promises/modifiedFiles/text3.txt",(data.split("\n").sort()).join("\n")))
    .then(()=>fs.appendFile("Promises/filename.txt","\ntext3.txt"))
    .then(()=>fs.readFile("Promises/filename.txt","utf-8"))
    .catch((err)=>console.log(err))
}

function deleteFiles(){
    fs.readFile("Promises/filename.txt","utf-8")
    .then((data)=>{
        data=data.split("\n")
        for(let i=0; i<data.length; i++)
            fs.unlink(`Promises/modifiedFiles/${data[i]}`)
    })
}

module.exports = { lipsumUpgrades, deleteFiles }