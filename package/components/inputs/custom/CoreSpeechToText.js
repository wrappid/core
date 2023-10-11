// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useEffect, useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeSpeechToText } from "@wrappid/native";
import { useSelector } from "react-redux";

import { functionsRegistry } from "../../../layout/PageContainer";
import CoreClasses from "../../../styles/CoreClasses";
import CoreForm from "../../forms/CoreForm";
import { FORM_EDIT_MODE } from "../../forms/coreFormConstants";

export default function CoreSpeechToText(props) {
  const [dynamicFormId, setDynamicFormId] = useState("dynamicForm");
  const [processComplete, setProcessComplete] = useState(false);
  const [formProps, setFormProps] = useState(null);
  const uid = useSelector(state => state?.auth?.uid);
  const {
    element, formikprops, mode, preview, beforeSpeechStart, ...restProps
  } =
    props;

  useEffect(() => {
    setDynamicFormId(dynamicFormId + "-" + element?.id);
  }, []);

  const defaultForm = {
    actions: [
      {
        label  : "Save",
        onClick: {
          functionName: values => {
            formikprops?.setFieldValue(element?.id, values?.text);
            setProcessComplete(true);
            setFormProps(null);
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

  const getDynamicForm = async values => {
    let currentElement = { ...element };
    let spToTextOb = { ...(currentElement?.speechToText || {}) };

    let formJson = { [dynamicFormId]: { ...defaultForm } };
    let initData = { text: values[0] };

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

      let data = callingFunction
        ? await callingFunction(
          { ...(currentElement || {}) },
          { ...(values || {}) }
        )
        : {};

      // eslint-disable-next-line no-console
      console.log("FUNCTION DATA", data);

      let tempFormJson = { ...defaultForm, ...(data?.formJson || {}) };

      initData = { ...(data?.initData || {}) };

      tempFormJson["actions"] = tempFormJson?.actions
        ? tempFormJson?.actions?.map(action => {
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
                setProcessComplete(true);
                setFormProps(null);
              },
            },
          };
        })
        : defaultForm.actions;

      formJson = { [dynamicFormId]: { ...(tempFormJson || {}) } };
      // eslint-disable-next-line no-console
      console.log("FUNCTION DATA FINAL", {
        formId  : dynamicFormId,
        formJson: formJson,
        initData: initData,
        mode    : FORM_EDIT_MODE,
      });

      setFormProps({
        formId  : dynamicFormId,
        formJson: formJson,
        initData: initData,
        mode    : FORM_EDIT_MODE,
      });
    } else {
      setFormProps({
        formId  : dynamicFormId,
        formJson: formJson,
        initData: initData,
        mode    : FORM_EDIT_MODE,
      });
    }
  };

  return (
    <NativeSpeechToText
      element={element}
      formik={formikprops}
      disabled={!mode || preview || element?.readOnly}
      generateCoreForm={getDynamicForm}
      processComplete={processComplete}
      mode={uid ? "light" : "dark"}
      setProcessComplete={setProcessComplete}
      buttonStyle={uid ? [] : [CoreClasses?.COLOR?.TEXT_WHITE]}
      beforeSpeechStart={event => {
        beforeSpeechStart && beforeSpeechStart(event);
        setFormProps(null);
      }}
      {...restProps}>
      {formProps && <CoreForm {...formProps} />}
    </NativeSpeechToText>
  );
}
