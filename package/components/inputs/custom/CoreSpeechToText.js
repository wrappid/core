// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeSpeechToText } from "@wrappid/native";
import { useSelector } from "react-redux";

import { functionsRegistry } from "../../../layout/PageContainer";
import CoreClasses from "../../../styles/CoreClasses";
import CoreForm from "../../forms/CoreForm";
import { FORM_EDIT_MODE } from "../../forms/coreFormConstants";

export default function CoreSpeechToText(props) {
  const DYNAMIC_FORM = "dynamicForm";
  const [processComplete, setProcessComplete] = useState(false);
  const [localFormData, setLocalFormData] = useState(false);
  const uid = useSelector(state => state?.auth?.uid);
  const {
    element, formikprops, mode, preview, beforeSpeechStart, ...restProps
  } =
    props;

  const defaultForm = {
    actions: [
      {
        label  : "Save",
        onClick: {
          functionName: values => {
            formikprops?.setFieldValue(element?.id, values?.text);
            setProcessComplete(true);
            setLocalFormData(null);
          },
        },
        type: "coreOutlinedButton",
      },
    ],
    allowCancel: false,
    allowDelete: false,
    allowEdit  : false,
    allowSubmit: false,
    fields     : [
      {
        id   : "text",
        label: "Text",
        type : "text",
      },
    ],
  };

  const getDynamicForm = async (element, values) => {
    let spToTextOb = element?.speechToText;

    if (spToTextOb?.textProcessor) {
      let callingFunction = null;

      if (
        typeof spToTextOb?.textProcessor === "string" &&
        functionsRegistry[spToTextOb?.textProcessor]
      ) {
        callingFunction = functionsRegistry[spToTextOb?.textProcessor];
      } else if (typeof spToTextOb?.textProcessor === "function") {
        callingFunction = spToTextOb?.textProcessor;
      }

      let { formJson, initData } = callingFunction
        ? await callingFunction(element, values)
        : {};

      formJson["actions"] = formJson?.actions.map(action => {
        return {
          ...(action || {}),
          onClick: {
            functionName: values => {
              if (
                action?.onClick?.functionName &&
                typeof action?.onClick?.functionName === "function"
              ) {
                action?.onClick?.functionName(values);
              } else if (
                action?.onClick?.functionName &&
                typeof action?.onClick?.functionName === "string" &&
                functionsRegistry[action?.onClick?.functionName]
              ) {
                functionsRegistry[action?.onClick?.functionName](values);
              }
              alert("HERE");
              setProcessComplete(true);
              setLocalFormData(null);
            },
          },
        };
      });

      setLocalFormData({
        form: (
          <CoreForm
            formId={DYNAMIC_FORM}
            formJson={{ [DYNAMIC_FORM]: { ...defaultForm, ...formJson } }}
            initData={initData}
            mode={FORM_EDIT_MODE}
          />
        ),
        formId: DYNAMIC_FORM,
      });
    } else {
      setLocalFormData({
        form: (
          <CoreForm
            formId={DYNAMIC_FORM}
            formJson={{ [DYNAMIC_FORM]: defaultForm }}
            initData={{ text: values[0] }}
            mode={FORM_EDIT_MODE}
          />
        ),
        formId: DYNAMIC_FORM,
      });
    }
  };

  return (
    <NativeSpeechToText
      element={element}
      formik={formikprops}
      disabled={!mode || preview || element?.readOnly}
      generateCoreForm={getDynamicForm}
      formData={localFormData}
      processComplete={processComplete}
      mode={uid ? "light" : "dark"}
      setProcessComplete={setProcessComplete}
      buttonStyle={uid ? [] : [CoreClasses?.COLOR?.TEXT_WHITE]}
      beforeSpeechStart={event => {
        beforeSpeechStart && beforeSpeechStart(event);
        setLocalFormData(null);
      }}
      {...restProps}
    />
  );
}
