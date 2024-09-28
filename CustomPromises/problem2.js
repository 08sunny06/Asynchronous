const fs = require("fs")
const path = require("path")

function sentenceSpliter(text){
    let sentRegex = /[.\?!](?=\s|$)/g;
    const sentence = text.split(sentRegex)
    const cleanSent = sentence.filter(item => item.trim()!=="")
    return cleanSent
}

function mkdirPromise() {
    return new Promise((resolve, reject) => {
        fs.mkdir("CustomPromises/changedfiles", { recursive: true }, (err) => {
            if (err)
                reject(err)
            else
                resolve("successfully created a directory")
        })
    })
}

function readPromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err)
                reject(err)
            else
                resolve(data)
        })
    })
}

function writePromise(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err)
                reject(err)
            else
                resolve("Successfully written the data")
        })
    })
}

function appendPromise(path, data) {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err) => {
            if (err)
                reject(err)
            else
                resolve("appended a new file")
        })
    })
}

function deletePromise(path){
    return new Promise((resolve,reject)=>{
        fs.unlink(path,(err)=>{
            if(err)
                reject(err)
            else
                resolve("deleted file")
        })
    })
}

function changeLipsum(){
    mkdirPromise()
    .then(()=>readPromise("CustomPromises/lipsum.txt"))
    .then((data)=> writePromise("CustomPromises/changedfiles/text1.txt", data.toUpperCase()))
    .then(()=>writePromise("CustomPromises/filename.txt", "text1.txt"))
    .then(()=>readPromise("CustomPromises/changedfiles/text1.txt"))
    .then((data)=> writePromise("CustomPromises/changedfiles/text2.txt", (data.toLowerCase().split(". ")).join("\n")))
    .then(()=>appendPromise("CustomPromises/filename.txt", "\ntext2.txt"))
    .then(()=>readPromise("CustomPromises/changedfiles/text2.txt"))
    .then((data)=>writePromise("CustomPromises/changedfiles/text3.txt", sentenceSpliter(data).join("\n")))
    .then(()=>appendPromise("CustomPromises/filename.txt", "\ntext3.txt"))
    .then(()=>readPromise("CustomPromises/filename.txt"))
    .then((data)=>{
        data = data.split("\n")
        setTimeout(()=>{for(let i=0; i<data.length; i++)
            deletePromise(`CustomPromises/changedfiles/text${i+1}.txt`)},5000)
    })
    .catch(err => console.log(err))
}

changeLipsum()

