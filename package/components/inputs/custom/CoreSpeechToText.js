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
  const SPEECH_TO_TEXT_FORM = "speechToTextForm";
  const [processComplete, setProcessComplete] = useState(false);
  const uid = useSelector(state => state?.auth?.uid);
  const { element, formikprops, mode, preview } = props;

  const defaultForm = {
    actions: [
      {
        label  : "Save",
        onClick: {
          functionName: values => {
            formikprops?.setFieldValue(element?.id, values?.text);
            setProcessComplete(true);
          },
        },
        type: "coreContainedButton",
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

  const getSpeechToTextForm = (element, values) => {
    let spToTextOb = element?.speechToText;

    if (
      spToTextOb?.speechTextProcessor &&
      functionsRegistry[spToTextOb?.speechTextProcessor]
    ) {
      let { formJson, initData } = functionsRegistry[
        spToTextOb?.speechTextProcessor
      ](element, values);

      return (
        <CoreForm
          formId={SPEECH_TO_TEXT_FORM}
          formJson={{ [SPEECH_TO_TEXT_FORM]: { ...defaultForm, ...formJson } }}
          initData={initData}
          mode={FORM_EDIT_MODE}
        />
      );
    } else {
      return (
        <CoreForm
          formId={SPEECH_TO_TEXT_FORM}
          formJson={{ [SPEECH_TO_TEXT_FORM]: defaultForm }}
          initData={{ text: values[0] }}
          mode={FORM_EDIT_MODE}
        />
      );
    }
  };

  return (
    <NativeSpeechToText
      element={element}
      formik={formikprops}
      disabled={!mode || preview || element?.readOnly}
      getCoreForm={getSpeechToTextForm}
      processComplete={processComplete}
      setProcessComplete={setProcessComplete}
      buttonStyle={uid ? [] : [CoreClasses?.COLOR?.TEXT_WHITE]}
    />
  );
}
