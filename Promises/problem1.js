const fs = require("fs/promises")

function createJsonFiles(limit){
    fs.mkdir("Promises/jsonFiles")
    .then(()=>{
        for(let i=0; i<limit; i++){
            fs.writeFile(`Promises/jsonFiles/randomFile${i+1}.json`,"")
        }
    })
    .catch(err=>fs.readdir("Promises/jsonFiles")
    .then((data)=>{
        if(data.length>0){
            for(let i=0; i<data.length; i++)
                fs.unlink(`Promises/jsonFiles/randomFile${i+1}.json`)
        }
        else{
            for(let i=0; i<limit; i++)
                fs.writeFile(`Promises/jsonFiles/randomFile${i+1}.json`,"")            
        }
    })
    .catch(err=>console.log(err)))
    
}

module.exports = {createJsonFiles}

