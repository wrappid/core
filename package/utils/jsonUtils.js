/**
 * 
 * @param {*} oldJSON  First JSOM
 * @param {*} newJSON  Second JSON
 * @returns  {*} Merged JSON
 */
// export const mergeJSON = (oldJSON = {}, newJSON = {} ) => {
//   let convertedJSON = { ...oldJSON };

//   if((Array.isArray(oldJSON) && !Array.isArray(newJSON)) || (!Array.isArray(oldJSON) && Array.isArray(newJSON)) ){
//     throw new Error("JSON value type mismatch");
//   }
//   if(Array.isArray(oldJSON) && Array.isArray(newJSON)){
//     return [...oldJSON, ...newJSON];
//   }
//   if(Object.keys(oldJSON).length <= 0){
//     return newJSON;
//   }
  
//   for (const key in oldJSON) {
//     if(Object.prototype.hasOwnProperty.call(newJSON, key)){

//       let keyType = typeof oldJSON[key];

//       if(keyType === "object" ){
//         convertedJSON[key] = mergeJSON(oldJSON[key], newJSON[key]);
//       }
//     } 
//   }
//   return convertedJSON;
// };

export const mergeJSON = (oldJson = {}, newJson = {} ) => {
    
  if((Array.isArray(oldJson) && !Array.isArray(newJson)) || (!Array.isArray(oldJson) && Array.isArray(newJson)) ){
    throw new Error("JSON value type mismatch");
  }
  if(Array.isArray(oldJson) && Array.isArray(newJson)){
    return [...oldJson, ...newJson];
  }
  if(Object.keys(oldJson).length <= 0){
    return newJson;
  }
  const convertedJSON = { ...oldJson };

  for (const key in newJson) {
    if(Object.prototype.hasOwnProperty.call(oldJson, key)){
      const keyType = typeof newJson[key];

      if(keyType === "object" ){
        convertedJSON[key] = mergeJSON(oldJson[key], newJson[key]);
      } else {
        convertedJSON[key] = newJson[key];
      }
    } else{
      convertedJSON[key] = newJson[key];
    }
  }
  return convertedJSON;
};