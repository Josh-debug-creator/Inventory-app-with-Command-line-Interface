// // Add inventory
// // Get all inventory


 const {Command} = require('commander')
const fs = require('fs')
const path = require('path')
 const baseDir = path.join(__dirname, 'Inventory')
 const program = new Command();
 


//  Define the create command
program
  .command('create <fileName> ')
  .description('create a new file')
  .action((fileName) => {
   createFile(fileName);
  });

// Defin the read command
program
.command('read <filename>' )
.description('read content of file')
.action(function(fileName){
    readFile(fileName)
})

// Defin the append command
program
.command('append <filename> <name> <quantity> <price>' )
.description('append product info to existing file')
.action(function (fileName, name, quantity, price){
  addItem(fileName, name, quantity, price)
})

// create empty file for products
function createFile (fileName){
  let extension = '.json'
  let fullPath = fileName + extension
  let file = path.join(baseDir,fullPath )
  fs.writeFile(file,'', function(err,result){
  
        if(err){
            console.log(err)
        }
        console.log(`File successfully created :${fileName}`);
    })
   
}





// Function to append a new item

function addItem(fileName, name, quantity, price) {
   let extension = '.json'
  let fullPath = fileName + extension
  let file = path.join(baseDir,fullPath )
    // check if file exists
if (fs.existsSync(file)){
const inventory =[]
 const newItem =  {
       name:name,
      quantity: parseInt(quantity),
      price: parseFloat(price)
              }
              inventory.push(newItem);
              console.log(inventory);
              console.log(`Item ${name} added to the inventory.`);
              
fs.appendFile(file,JSON.stringify(inventory), function(err){
  inventory.toString()
  if (err)
    throw err
  else return
})

}
   
// if file doesn't exist, return
else {
    console.log('File does not exist')
return
}
}

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
