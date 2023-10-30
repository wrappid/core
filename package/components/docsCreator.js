const SOURCE = "/Users/kc/Desktop/test/source";
const DESTINATION = "/Users/kc/Desktop/test/destination/";
/**
 * @todo
 * 1. Get all the folder from components directory and console.log each of them(recursive)
 * 2.Inside each folder find all the compnent files and console.log each of them (call inside first func)
 *  hint readDirSync readFileSync  
 * 
 * #2
 * 1. A function componentDocsGenerator(source<Folder Path core Package >, destination<folder Path in guideModule>) 
 * hint writeFileSync mkdirSync 
 */

const { log } = require("console");
const fs = require("fs");
const path = require("path");

filenames = fs.readdirSync(__dirname);
const directory = "./";
const fse = require("fs-extra");

// function getFiles (dir, files_){
//     let allDir=[];
//     let files = fs.readdirSync(dir);
//     for (var i in files){
//         var name = dir + '/' + files[i];
//         if (fs.statSync(name).isDirectory()){
//             getFiles(name, files_);
//         } else {
//             // console.log('-',name)
//             allDir.push(name)
//         }
//     }
//     return allDir;
// }
// getFiles('./');



function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}

//fs.rename

// console.log(getFiles(SOURCE));
/**
 * 
 * @param {*} source 
 * @param {*} destination 
 * Get the filename (Take only .js files )
 *  create file in destination with rename(.docs.js)
 */
function componentDocsGenerator(source, destination){
  console.log(source);
  console.log(destination);
  files = getFiles(source);
  // console.log(files);
  files.forEach(file => {
    if (path.extname(file) === '.js'){
      // console.log(typeof(file));
      console.log(path.relative( process.cwd(), file));
      fse.copySync(file,destination , { overwrite: true|false })

      // let finalPath = path.join(destination,path.relative(file));
      // console.log(finalPath);
      // fs.writeFileSync(file,'',{force: true});
      // if(fs.statSync(file).isDirectory)
      // fs.copyFileSync(file, destination);
      
      // fs.renameSync()
    }
  });
  // try {
  //     fse.copySync(source, destination, { overwrite: true|false })
  //     console.log('success!')
  //   } catch (err) {
  //     console.error(err)
  //   }
}

componentDocsGenerator(SOURCE, DESTINATION);