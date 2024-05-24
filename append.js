// Defin the append command
program
.command('append <filename> <name> <quantity> <price>' )
.description('append product info to existing file')
.action(function (fileName, name, quantity, price){
  addItem(fileName, name, quantity, price)
})


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

 program.parse(process.argv);