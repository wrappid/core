export function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
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
  var type = "email";

  if (!isNaN(String(userLogin))) type = "phone";

  if (type === "email") {
    return (
      userLogin?.replace(
        /^(.)(.*)(@.)([a-z].)([a-z0-9]*)(.)([a-z0-9]*)([a-z].)$/,
        (_, a, b, c, d, e, f, g, h) =>
          a + b.replace(/./g, "*") + c + d + e.replace(/./g, "*") + f + g.replace(/./g, "*") + h,
      ) || ""
    );
  } else if (type === "phone") {
    return (
      userLogin?.replace(
        /^(.)(.)([0-9]*)(.)(.)$/,
        (_, a, b, c, d, e) => a + b + c.replace(/./g, "*") + d + e,
      ) || ""
    );
  } else return userLogin;
}

export function getDateString(dateStr) {
  return new Date(dateStr).toDateString();
}
