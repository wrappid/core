export function getFullName(data) {
  var n = "";
  if (data?.firstName) {
    n += data?.firstName;
  }
  if (data?.middleName) {
    n += " " + data?.middleName;
  }
  if (data?.lastName) {
    n += " " + data?.lastName;
  }
  return n && n.length > 0 ? n : "Unnamed";
}

export function queryBuilder(url, query) {
  var newUrl = url;
  if (
    query &&
    Object.keys(query).length > 0 /* &&
    Object.values(query).find((v) => v && v !== "") */
  ) {
    newUrl += "?";
    var keys = Object.keys(query);
    for (var index = 0; index < keys.length; index++) {
      var q = keys[index];

      // not needed below if statement,
      // because it is not considering the value 0 i.e.treated as false
      // although 0 should be as a parameter value for api query params
      /* if (query[q]) {
      } */
      if (index > 0 && newUrl.charAt(newUrl.length - 1) !== "?") {
        newUrl +=
          "&" +
          q +
          "=" +
          (typeof query[q] === "object" ? JSON.stringify(query[q]) : query[q]);
      } else {
        newUrl += q + "=" + query[q];
      }
    }
  }
  return newUrl;
}

export function createFormData(files, body) {
  //console.log(file, field, body);
  const data = new FormData();
  //console.log("IN form data", file, body);
  if (file) {
    for (var i = 0; i < files.length; i++) var file = files[i];
    data.append(file.name, file.data);
  }
  //console.log("IN form data", data);
  Object.keys(body).forEach((key) => {
    //console.log(body[key]);
    data.append(key, body[key]);
  });
  console.log("data inside foreach", data);
  return data;
}

export function clearValidatePhoneEmail(text) {
  var t = text;
  if (!text || (text && text.length === 0)) return false;
  if (t[0] === "'") {
    t = t.slice(1);
    t = t.toLowerCase();
  }
  var f = String(t).match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (f) {
    return f;
  } else if (!f) {
    f = String(t).match(
      /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
    );

    return f;
  }

  return f;
}
