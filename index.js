// // Add inventory
// // Get all inventory


 const {Command} = require('commander')
const fs = require('fs')
const path = require('path')
 const baseDir = path.join(__dirname, 'Inventory')
 const program = new Command();
 

// Defin the read command
program
.command('read <filename>' )
.description('read content of file')
.action(function(fileName){
    readFile(fileName)
})


// read file
function readFile (fileName){
  let extension = '.json'
  let fullPath = fileName + extension
  let file = path.join(baseDir,fullPath )
  if (fs.existsSync(file)){
    fs.readFile(file, 'utf-8', (err, data) =>
        {
            if (err)
                throw err;
            else {
     console.log(data)
     
            }
        })
    
      }
      else console.log("file does not exist")
    }




program.parse(process.argv);
