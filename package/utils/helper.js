import moment from "moment";

export function getFullName(data) {
  let name = "";

  if (data?.firstName) {
    name += data?.firstName;
  }
  if (data?.middleName) {
    name += " " + data?.middleName;
  }
  if (data?.lastName) {
    name += " " + data?.lastName;
  }
  return name && name.length > 0 ? name : "Unnamed";
}

export function queryBuilder(url, query) {
  let newUrl = url;

  if (
    query &&
    Object.keys(query).length > 0 /* &&
    Object.values(query).find((v) => v && v !== "") */
  ) {
    // if (newUrl.indexOf("?") === -1) { // no query string
    if (newUrl.indexOf("?") === -1) {
      newUrl += "?";
    } else {
      newUrl += "&";
    } 
    let keys = Object.keys(query);

    for (let index = 0; index < keys.length; index++) {
      let tmpQuery = keys[index];

      // not needed below if statement,
      // because it is not considering the value 0 i.e.treated as false
      // although 0 should be as a parameter value for api query params
      /* -if (query[q]) {
      } */
      if (index > 0 && newUrl.charAt(newUrl.length - 1) !== "?") {
        newUrl +=
          "&" +
          tmpQuery +
          "=" +
          (typeof query[tmpQuery] === "object" ? JSON.stringify(query[tmpQuery]) : query[tmpQuery]);
      } else {
        newUrl += tmpQuery + "=" + query[tmpQuery];
      }
    }
  }
  return newUrl;
}

export function createFormData(files, body) {
  //--console.log(file, field, body);
  const data = new FormData();
  
  //--console.log("IN form data", file, body);

  if (files) {
    for (let i = 0; i < files.length; i++) {
      let file = files[i];

      data.append(file.name, file.data);
    }
  }
  //--console.log("IN form data", data);
  Object.keys(body).forEach((key) => {
    //--console.log(body[key]);
    data.append(key, body[key]);
  });
  //--console.log("data inside foreach", data);
  return data;
}

export function clearValidatePhoneEmail(text) {
  let txt = text;

  if (!text || (text && text.length === 0)) return false;
  if (txt[0] === "'") {
    txt = txt.slice(1);
    txt = txt.toLowerCase();
  }
  let matchResult = String(txt).match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (matchResult) {
    return matchResult;
  } else if (!matchResult) {
    matchResult = String(txt).match(
      /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
    );

    return matchResult;
  }

  return matchResult;
}

export function getAge(birthDate) {
  let dob = new Date(birthDate);

  //extract the year, month, and date from date input
  let dobYear = dob.getYear();

  let dobMonth = dob.getMonth();

  let dobDate = dob.getDate();

  //get the current date from the system
  let now = new Date();

  //extract the year, month, and date from current date
  let currentYear = now.getYear();

  let currentMonth = now.getMonth();

  let currentDate = now.getDate();

  //declare a variable to collect the age in year, month, and days
  let age = {};

  let dateAge = 0;

  let monthAge = 0;

  //get years
  let yearAge = currentYear - dobYear;

  //get months
  if (currentMonth >= dobMonth) {
    //get months when current month is greater
    monthAge = currentMonth - dobMonth;
  } else {
    yearAge--;
    monthAge = 12 + currentMonth - dobMonth;
  }

  //get days
  if (currentDate >= dobDate) {
    //get days when the current date is greater
    dateAge = currentDate - dobDate;
  } else {
    monthAge--;
    dateAge = 31 + currentDate - dobDate;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }
  //group the age in a single variable
  age = {
    days  : dateAge,
    months: monthAge,
    years : yearAge,
  };

  let ageString = "";

  if (age.years > 0) {
    ageString = age.years + " year";
    if (age.years > 0) {
      ageString += "s";
    }
  }
  if (age.months > 0) {
    if (ageString) ageString += ", ";
    ageString += age.months + " month";
    if (age.months > 1) {
      ageString += "s";
    }
  }

  //show days only if year is 0 (zero)
  if (age.years > 0 === false) {
    if (age.days > 0) {
      if (ageString) ageString += ", ";
      ageString += age.days + " day";
      if (age.days > 1) {
        ageString += "s";
      }
    }
  }
  //return the calculated age
  return ageString && ageString.length > 0 ? ageString : "N/A";
}

export function viewFormattedDate(date, type) {
  if (date) {
    return moment(date).format("MMM, YYYY");
  } else if (type === "endDate") {
    return "Present";
  } else {
    return " ";
  }
}
