const cvs = require('csv-parse')
const fs = require('fs')
const result=[]




exports.readFile=(filename)=>{
    fs.createReadStream(`./src/uploads/${filename}`)
    .pipe(cvs({}))
    .on('data',(data)=>result.push(data))
    .on('end',()=>{
        return result
    })
}