const fs = require("fs")

function lipsumModification() {
    fs.readFile("/home/shounak/Asynchronous/Call_back_drills/lipsum.txt", "utf-8", (err, data) => {
        if (err)
            console.log(err)
        else {
            fs.mkdir("Call_back_drills/updatedfiles", { recursive: true }, (err) => {
                if (err)
                    console.log(err)
                else {
                    fs.writeFile("/home/shounak/Asynchronous/Call_back_drills/filename.txt", "text1.txt", (err) => {
                        if (err)
                            console.log(err)
                    })
                    fs.writeFile("/home/shounak/Asynchronous/Call_back_drills/updatedfiles/text1.txt", data.toUpperCase(), (err) => {
                        if (err)
                            console.log(err)
                        else {
                            fs.readFile("/home/shounak/Asynchronous/Call_back_drills/updatedfiles/text1.txt", "utf-8", (err, data) => {
                                if (err)
                                    console.log(err)
                                else {
                                    fs.appendFile("/home/shounak/Asynchronous/Call_back_drills/filename.txt", "\ntext2.txt", (err) => {
                                        if (err)
                                            console.log(err)
                                    })
                                    fs.writeFile("/home/shounak/Asynchronous/Call_back_drills/updatedfiles/text2.txt", (data.toLowerCase().split(". ")).join("\n"), (err) => {
                                        if (err)
                                            console.log(err)
                                        else {
                                            fs.readFile("/home/shounak/Asynchronous/Call_back_drills/updatedfiles/text2.txt", "utf-8", (err, data) => {
                                                if (err)
                                                    console.log(err)
                                                else {
                                                    fs.appendFile("/home/shounak/Asynchronous/Call_back_drills/filename.txt", "\ntext3.txt", (err) => {
                                                        if (err)
                                                            console.log(err)
                                                    })
                                                    fs.writeFile("/home/shounak/Asynchronous/Call_back_drills/updatedfiles/text3.txt", (data.split("\n").sort()).join("\n"), (err) => {
                                                        if (err)
                                                            console.log(err)
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

function deleteFiles(){
    fs.readFile(`Call_back_drills/filename.txt`,"utf-8",(err,data)=>{
        if(err)
            console.log(err)
        else{
            data = data.split("\n")
            for(let i=0 ; i<data.length; i++){
                fs.unlink(`Call_back_drills/updatedfiles/${data[i]}`,(err)=>{
                    if(err)
                        console.log(err)
                })
            }
        }
    })
}

module.exports = {lipsumModification, deleteFiles}