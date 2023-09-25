import React, { useEffect, useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { getConfigurationObject } from "@wrappid/styles";

import CoreFormButton from "./CoreFormButton";
import { BUTTON_TYPE, INPUT_TYPE } from "./coreFormConstants";
import CoreClasses from "../../styles/CoreClasses";
import {
  checkDependencies,
  createFormActionProps,
  createFormFieldProps,
  detectChange,
  getDependentProps
} from "../../utils/formUtils";
import { APP_PLATFORM } from "../../utils/themeUtil";
import CoreContainedButton from "../inputs/CoreContainedButton";
import CoreInput from "../inputs/CoreInput";
import CoreOutlinedButton from "../inputs/CoreOutlinedButton";
import CoreSpeechToText from "../inputs/custom/CoreSpeechToText";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";

export const ON_MOUNT = "moount";
export const ON_CHANGE = "change";

export default function CoreFormInputs(props) {
  const {
    type,
    forms,
    formId,
    element,
    formikprops,
    preview,
    handleButtonCLick,
    submitLoading,
    OnCancelClick,
    mode
  } = props;

  const [elementProps, setElementProps] = useState({});
  const [tempProps, setTempProps] = useState({});
  const [oldData, setOldData] = useState(null);

  useEffect(() => {
    if (element?.dependencies?.props?.getProps) {
      let data = { ...(oldData || {}) };

      let { changeDetected, others } = detectChange(
        element,
        forms,
        elementProps?.formik,
        type,
        formId,
        data
      );

      if (changeDetected) {
        let changedProps = getDependentProps(
          element?.dependencies?.props?.getProps,
          formikprops,
          element,
          forms[formId]?.formElements,
          ON_CHANGE
        );

        data = { ...formikprops };
        setOldData(data);
        setTempProps(changedProps);

        if (
          changedProps &&
          Object.keys(changedProps).includes("calculatedValue") &&
          changedProps.calculatedValue !== elementProps.value
        ) {
          formikprops?.setFieldValue(element?.id, changedProps.calculatedValue);
        }
      } else if (others?.mount) {
        data = { ...formikprops };
        setOldData(data);
      }
    }
  });

  useEffect(() => {
    if (element && type === INPUT_TYPE) {
      if (element.isDependent && tempProps) {
        let mainProps = createFormFieldProps(props, "edit");
        let newProps = { ...mainProps, ...tempProps };

        setElementProps({ ...newProps });
      } else {
        let mainProps = createFormFieldProps(props, "edit");

        setElementProps({ ...mainProps });
      }
    }
  }, [
    element,
    props,
    formikprops?.values && formikprops?.values[element?.id],
    formikprops?.errors && formikprops?.errors[element?.id],
    formikprops?.touched && formikprops?.touched[element?.id],
    tempProps,
  ]);

  useEffect(() => {
    if (element && type === INPUT_TYPE) {
      let mainProps = createFormFieldProps(props, "edit");
      let changedProps = getDependentProps(
        element?.dependencies?.props?.getProps,
        formikprops,
        element,
        forms[formId]?.formElements,
        ON_MOUNT
      );
      let newProps = {
        ...(mainProps || []),
        ...(changedProps || []),
        mountSet: true,
      };

      // eslint-disable-next-line no-console
      console.log("CHANGE", newProps);
      setElementProps(newProps);
    }
  }, []);

  return type === INPUT_TYPE ? (
    element?.speechToText ?
      getConfigurationObject()?.wrappid?.platform === APP_PLATFORM &&
      <CoreGrid coreId="speecToText">
        {element?.comp && !checkDependencies(element, formikprops)?.hide ? (
          React.createElement(
            element?.comp ? element?.comp : CoreInput,
            element?.dependencies
              ? elementProps
              : { ...createFormFieldProps(props, "edit"), gridProps: { gridSize: 11 } },
            element?.onlyView ? element?.label : null
          )
        ) : null}

        {element?.speechToText && (
          <CoreBox gridProps={{ gridSize: 1 }} styleClasses={[CoreClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER]}>
            <CoreSpeechToText 
              element={element}
              formikprops={formikprops}
              mode={mode}
              preview={preview}
            />
          </CoreBox>
        )}

      </CoreGrid>
      :
      element?.comp && !checkDependencies(element, formikprops)?.hide ? (
        React.createElement(
          element?.comp ? element?.comp : CoreInput,
          element?.dependencies
            ? elementProps
            : createFormFieldProps(props, "edit"),
          element?.onlyView ? element?.label : null
        )
      ) : null
  ) : type === BUTTON_TYPE ? (
    <CoreBox xs={12} {...createFormActionProps(forms[formId])}>
      {forms[formId]?.formActions?.map((actionElement, i) => (
        <CoreFormButton
          key={"form-action-" + i}
          element={actionElement}
          formikprops={formikprops}
          handleButtonCLick={handleButtonCLick}
          submitLoading={submitLoading}
        />
      ))}

      {forms[formId]?.allowCancel !== false && (
        <CoreOutlinedButton
          key={"form-cancel"}
          label={
            forms[formId]?.cancelButtonLabel
              ? forms[formId].cancelButtonLabel
              : "Cancel"
          }
          disabled={submitLoading || preview}
          OnClick={OnCancelClick}
        />
      )}

      {forms[formId]?.allowSubmit !== false && (
        <CoreContainedButton
          key={"form-edit"}
          label={
            forms[formId]?.submitButtonLabel
              ? forms[formId].submitButtonLabel
              : "Save"
          }
          disabled={submitLoading || preview}
          type="submit"
          OnClick={formikprops.handleSubmit}
        />
      )}
    </CoreBox>
  ) : null;
}
