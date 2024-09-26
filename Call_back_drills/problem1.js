const fs = require("fs")

function createDeleteFiles(){    
    fs.mkdir("Call_back_drills/jsonFiles",(err)=>{
        if(err){
            fs.readdir("/home/shounak/Asynchronous/Call_back_drills/jsonFiles",(error,data)=>{
                if(error){
                    console.log(error)
                }
                else{
                    if(data.length>0){
                        for(let i=0; i<data.length; i++){
                            fs.unlink(`/home/shounak/Asynchronous/Call_back_drills/jsonFiles/randomFiles${i+1}.json`,(err)=>{
                                if(err)
                                    console.log(err)
                            })
                        }
                    }
                    else{
                        for(let i=0; i<5; i++)
                            fs.writeFile(`/home/shounak/Asynchronous/Call_back_drills/jsonFiles/randomFiles${i+1}.json`,"",(err)=>{
                                if(err)
                                    console.log(err)
                            })
                    }
                }
            })
        }
        else{
            for(let i=0; i<5; i++)
                fs.writeFile(`/home/shounak/Asynchronous/Call_back_drills/jsonFiles/randomFiles${i+1}.json`,"",(err)=>{
                    if(err)
                        console.log(err)
                })
        }
    })
}

module.exports = {createDeleteFiles};