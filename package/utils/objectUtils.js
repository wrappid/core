/**
 * This util function helps us to compare objects
 * Checks the following:
 * 1. All keys are equal
 * 2. All key-value pair matched
 *
 * Return true if object doesn't match
 * Return false if object match
 *
 * @param {*} obj1
 * @param {*} obj2
 * @returns [TRUE or FALSE]
 */
const compareObject = (obj1, obj2) => {
  let keysObj1 = obj1 && typeof obj1 === "object" ? Object.keys(obj1) : [];
  let keysObj2 = obj2 && typeof obj2 === "object" ? Object.keys(obj2) : [];
  if (keysObj1.length !== keysObj2.length) {
    return true;
  } else {
    for (var i = 0; i < keysObj1.length; i++) {
      let key = keysObj1[i];
      console.log("Key", key);
      if (!keysObj2?.includes(key) || obj1[key] !== obj2[key]) {
        console.log("FOUND", obj1[key], obj2[key]);
        console.log("TRUE RETURN");
        return true;
      } else {
        console.log("NOT FOUND", obj1[key], obj2[key]);
      }
    }
  }
  console.log("FALSE RETURN");
  return false;
};

module.exports = {
  compareObject,
};
