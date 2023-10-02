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
export const compareObject = (obj1, obj2) => {
  let keysObj1 = obj1 && typeof obj1 === "object" ? Object.keys(obj1) : [];
  let keysObj2 = obj2 && typeof obj2 === "object" ? Object.keys(obj2) : [];

  if (keysObj1.length !== keysObj2.length) {
    return true;
  } else {
    for (let i = 0; i < keysObj1.length; i++) {
      let key = keysObj1[i];

      console.log("Key", key);
      if (
        !keysObj2?.includes(key) ||
        (typeof obj1[key] === typeof obj1[key] &&
          typeof obj1[key] !== "object" &&
          obj1[key] !== obj2[key])
      ) {
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

export const getAsyncSelectValue = (value, params) => {
  const {
    getOptionValue,
    getOptionLabel,
    isOptionEqualToValue,
    multiple,
    options,
  } = params || {};

  console.log("ASYNCSELECT mountValueMatch", value, options);
  if (typeof value === "string") {
    for (let i = 0; i < options?.length; i++) {
      let field = "";

      if (getOptionLabel) {
        field = getOptionLabel(options[i]);
      } else {
        options[i]?.label || options[i]?.name;
      }
      field = field?.trim();
      field = field?.toLowerCase();

      value = value.trim();
      value = value.toLowerCase();

      if (field === value) {
        console.log("ASYNCSELECT mountValueMatch 1 ");
        return {
          misMatchFlag: false,
          newValue    : options[i]?.name,
          stringFlag  : true,
        };
      } else if (value?.startsWith(field) || field?.startsWith(value)) {
        console.log("ASYNCSELECT mountValueMatch 2 ");
        return {
          misMatchFlag: false,
          newValue    : options[i]?.name,
          stringFlag  : true,
        };
      }
      if (value?.includes(field) || field?.includes(value)) {
        console.log("ASYNCSELECT mountValueMatch 3 ");
        return {
          misMatchFlag: false,
          newValue    : options[i]?.name,
          stringFlag  : true,
        };
      }
    }
    console.log(
      "ASYNCSELECT mountValueMatch NOT FOUND",
      value,
      options[0]?.label
    );
    return {
      misMatchFlag: false,
      newValue    : value,
      stringFlag  : true,
    };
  } else {
    console.log("ASYNCSELECT mountValueMatch 5");

    /**
     * @todo have to do for non string
     */
    for (let i = 0; i < options?.length; i++) {
      value = getOptionValue
        ? getOptionValue(options[i])
        : value?.id || value.name;

      if (
        isOptionEqualToValue(options[i], value) ||
        options[i].id === value?.id ||
        options[i].value === value?.value
      ) {
        console.log("ASYNCSELECT mountValueMatch 3 ");
        return {
          misMatchFlag: false,
          newValue    : getOptionValue
            ? getOptionValue(options[i])
            : options[i]?.name,
          stringFlag: true,
        };
      }
    }
    console.log(
      "ASYNCSELECT mountValueMatch NOT FOUND",
      value,
      options[0]?.label
    );
    return {
      misMatchFlag: false,
      newValue    : value,
      stringFlag  : true,
    };
  }
};
