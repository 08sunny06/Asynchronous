const fs = require("fs/promises")

function createDeleteJsonFiles(total){
    fs.mkdir("Promises/jsonFiles").then(()=>{
        for(let i=0; i<total; i++)
            fs.writeFile(`Promises/jsonFiles/randomFile${i+1}.json`,"")
    }).catch((err)=>{
        if(err){
            fs.readdir("Promises/jsonFiles").then((data)=>{
                if(data.length>0){
                    for(let i=0; i<data.length; i++)
                        fs.unlink(`Promises/jsonFiles/randomFile${i+1}.json`).catch((err)=>console.log(err))
                }
                else{
                    for(let i=0; i<total; i++)
                        fs.writeFile(`Promises/jsonFiles/randomFile${i+1}.json`,"").catch((err)=>console.log(err))
                }
            }).catch((err)=>console.log(err))
        }  
    })
}

module.exports = {createDeleteJsonFiles}

