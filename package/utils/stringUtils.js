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
    if (!userLogin || !userLogin.includes("@")) {
      return userLogin;
    }

    const [localPart, domain] = userLogin.split("@");
    const [domainName, ...tld] = domain.split(".");

    // Special handling for very short emails
    if (localPart.length === 1) {
      // Mask domain with same number of stars as original characters
      const maskedDomain = domainName.charAt(0) + 
          "*".repeat(Math.max(1, domainName.length - 1));

      return `${localPart}@${maskedDomain}.${tld.join(".")}`;
    }

    // For regular length emails
    const maskedLocal = localPart.charAt(0) + 
      "*".repeat(localPart.length - 1);
    const maskedDomain = domainName.charAt(0) + 
      "*".repeat(domainName.length - 1);

    return `${maskedLocal}@${maskedDomain}.${tld.join(".")}`;
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