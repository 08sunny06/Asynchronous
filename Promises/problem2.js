const fs = require("fs/promises")
const { join } = require("path")

function lipsumUpgrades(){
    fs.mkdir("Promises/modifiedFiles",{recursive:true}).then(()=>{
        fs.readFile("Promises/lipsum.txt","utf-8").then((data)=>{
            fs.writeFile("Promises/filename.txt","text1.txt").catch(err => console.log(err))
            fs.writeFile("Promises/modifiedFiles/text1.txt",data.toUpperCase()).then(()=>{
                fs.readFile("Promises/modifiedFiles/text1.txt","utf-8").then((data)=>{
                    fs.appendFile("Promises/filename.txt","\ntext2.txt").catch(err => console.log(err))
                    fs.writeFile("Promises/modifiedFiles/text2.txt",(data.toLowerCase().split(". ")).join("\n")).then(()=>{
                        fs.readFile("Promises/modifiedFiles/text2.txt","utf-8").then((data)=>{
                            fs.appendFile("Promises/filename.txt","\ntext3.txt").catch(err => console.log(err))
                            fs.writeFile("Promises/modifiedFiles/text3.txt",(data.split("\n").sort()).join("\n")).then(()=>{
                                fs.readFile("Promises/filename.txt","utf-8").then((data)=>{
                                    data = data.split("\n")
                                    setTimeout(()=>{
                                        console.log("Deleting files in 5sec")
                                        for(let i=0; i<data.length; i++)
                                            fs.unlink(`Promises/modifiedFiles/text${i+1}.txt`)
                                    },5000)}).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }).catch(err => console.log(err))
                    }).catch(err => console.log(err))
                }).catch(err => console.log(err))
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
}

module.exports = {lipsumUpgrades}