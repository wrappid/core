/**
 * 
 * @param {*} objects 
 * @returns 
 */
export const mergeJSON = (objectStruct, objects) => {
  let mergedObject = {};

  /**
   * @todo
   * 
   * Case1
   * object1 = {
   *    a: [1,2,4]
   *    b: "hello",
   *    c: [[1,2],[a,b]]
   *    d: {a1: "a1", b1: "b1"}
   * }
   * object1 = {
   *    a: [1,2,4]
   *    b: "hello",
   *    e: [[1,2],[a,b]]
   *    c: {d: "a1", b1: "b1"}
   * }
   * 
   * Rules
   * 1.1 only same level will be merged
   * 1.2  
   */
  Object.keys(objectStruct)?.forEach((key) => {
    let value = objects.map(eachObj => eachObj[key]);

    mergedObject[key] = value;
  });
  return mergedObject;
};