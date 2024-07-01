/**
 * 
 * @param {*} oldJSON  First JSOM
 * @param {*} newJSON  Second JSON
 * @returns  {*} Merged JSON
 */
export const mergeJSON = (oldJSON = {}, newJSON = {} ) => {
  let convertedJSON = { ...oldJSON };

  if((Array.isArray(oldJSON) && !Array.isArray(newJSON)) || (!Array.isArray(oldJSON) && Array.isArray(newJSON)) ){
    throw new Error("JSON value type mismatch");
  }
  if(Array.isArray(oldJSON) && Array.isArray(newJSON)){
    return [...oldJSON, ...newJSON];
  }
  if(Object.keys(oldJSON).length <= 0){
    return newJSON;
  }
  
  for (const key in oldJSON) {
    if(Object.prototype.hasOwnProperty.call(newJSON, key)){

      let keyType = typeof oldJSON[key];

      if(keyType === "object" ){
        convertedJSON[key] = mergeJSON(oldJSON[key], newJSON[key]);
      }
    } 
  }
  return convertedJSON;
};