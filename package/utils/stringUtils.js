export function isJson(str) {
  try {
    JSON.parse(str);
  } catch (error) {
    //--console.error(error);
    return false;
  }
  return isNaN(str);
}

export function getLabel(string = "") {
  if (string) {
    string = string?.replace(/\s/g, "");
    return (string?.substring(0, 1)?.toUpperCase() + string?.substring(1))
      ?.replace(/([A-Z])/g, " $1")
      ?.trim();
  } else {
    return "";
  }
}

export function maskEmailOrPhone(userLogin) {
  let type = "email";

  if (!isNaN(String(userLogin))) type = "phone";

  if (type === "email") {
    return (
      userLogin?.replace(
        /^(.)(.*)(@.)([a-z].)([a-z0-9]*)(.)([a-z0-9]*)([a-z].)$/,
        (tmp, tmpA, tmpB, tmpC, tmpD, tmpE, tmpF, tmpG, tmpH) =>
          tmpA + tmpB.replace(/./g, "*") + tmpC + tmpD + tmpE.replace(/./g, "*") + tmpF + tmpG.replace(/./g, "*") + tmpH
      ) || ""
    );
  } else if (type === "phone") {
    return (
      userLogin?.replace(
        /^(.)(.)([0-9]*)(.)(.)$/,
        (tmp, tmpA, tmpB, tmpC, tmpD, tmpE) => tmpA + tmpB + tmpC.replace(/./g, "*") + tmpD + tmpE
      ) || ""
    );
  } else return userLogin;
}

export function getDateString(dateStr) {
  return new Date(dateStr).toDateString();
}

export default {
  getDateString,
  getLabel,
  isJson,
  maskEmailOrPhone
};