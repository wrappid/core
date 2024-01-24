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

import { readdirSync, statSync } from "fs";
// eslint-disable-next-line no-undef
import { extname, relative } from "path";

// eslint-disable-next-line no-undef
filenames = readdirSync(__dirname);
// eslint-disable-next-line no-undef
import { copySync } from "fs-extra";

// eslint-disable-next-line etc/no-commented-out-code
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
  let files = readdirSync(dir);

  for (let i in files){
    let name = dir + "/" + files[i];

    if (statSync(name).isDirectory()){
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
}

// eslint-disable-next-line etc/no-commented-out-code
//fs.rename

// eslint-disable-next-line etc/no-commented-out-code
// console.log(getFiles(SOURCE));
/**
 * 
 * @param {*} source 
 * @param {*} destination 
 * Get the filename (Take only .js files )
 *  create file in destination with rename(.docs.js)
 */
function componentDocsGenerator(source, destination){
  // eslint-disable-next-line no-console
  console.log(source);
  // eslint-disable-next-line no-console
  console.log(destination);
  // eslint-disable-next-line no-undef
  files = getFiles(source);
  // console.log(files);
  // eslint-disable-next-line no-undef
  files.forEach(file => {
    if (extname(file) === ".js"){
      // console.log(typeof(file));
      // eslint-disable-next-line no-console, no-undef
      console.log(relative( process.cwd(), file));
      copySync(file, destination, { overwrite: true | false });

      // eslint-disable-next-line etc/no-commented-out-code
      // let finalPath = path.join(destination,path.relative(file));
      // console.log(finalPath);
      // fs.writeFileSync(file,'',{force: true});
      // if(fs.statSync(file).isDirectory)
      // fs.copyFileSync(file, destination);
      
      // eslint-disable-next-line etc/no-commented-out-code
      // fs.renameSync()
    }
  });
  // eslint-disable-next-line etc/no-commented-out-code
  // try {
  //     fse.copySync(source, destination, { overwrite: true|false })
  //     console.log('success!')
  //   } catch (err) {
  //     console.error(err)
  //   }
}

componentDocsGenerator(SOURCE, DESTINATION);