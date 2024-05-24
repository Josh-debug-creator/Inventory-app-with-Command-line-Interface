//  Define the create command
program
  .command('create <fileName> ')
  .description('create a new file')
  .action((fileName) => {
   createFile(fileName);
  });


  
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

  program.parse(process.argv);