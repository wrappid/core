import React from "react";
import CoreInput from "./CoreInput";

export default function CoreJSONInput(props) {
  const { id, value = {}, formik, onChange } = props;
  const [JSONValue, setJSONValue] = React.useState(value);

  React.useEffect(() => {
    let tmpValue = value
      ? typeof value === "object"
        ? JSON.stringify(value, null, 4)
        : value
      : "{}";
    // tmpValue = formik?.values[id]
    //   ? typeof formik?.values[id] === "object"
    //     ? JSON.stringify(formik?.values[id], null, 4)
    //     : formik?.values[id]
    //   : "{}";
    setJSONValue(value);
    formik?.setFieldValue(id, tmpValue);
  }, []);

  React.useEffect(() => {
    setJSONValue(value);
  }, [value]);

  const handleChange = (e) => {
    var finalValue = e.target.value;
    try {
      finalValue = JSON.parse(finalValue);
      finalValue = JSON.stringify(finalValue, null, 4);
    } catch (err) {
      console.warn("Not a valid json", err);
    }
    if (formik) {
      formik.setFieldValue(id, finalValue);
    }
    setJSONValue(finalValue);

    // on change as props
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <CoreInput
      {...props}
      value={
        typeof JSONValue === "object"
          ? JSON.stringify(JSONValue, null, 4)
          : JSONValue
      }
      multiline={true}
      onChange={handleChange}
      inputProps={{
        style: {
          resize: "vertical",
        },
      }}
    />
  );
}
