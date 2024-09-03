import React, { useEffect, useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";

import CoreFormButton from "./CoreFormButton";
import { BUTTON_TYPE, INPUT_TYPE } from "./coreFormConstants";
import CoreClasses from "../../../styles/CoreClasses";
import {
  checkDependencies,
  createFormActionProps,
  createFormFieldProps,
  detectChange,
  getDependentProps
} from "../../../utils/formUtils";
import { APP_PLATFORM } from "../../../utils/themeUtil";
import CoreBox from "../../layouts/CoreBox";
import CoreGrid from "../../layouts/CoreGrid";
import CoreContainedButton from "../CoreContainedButton";
import CoreInput from "../CoreInput";
import CoreOutlinedButton from "../CoreOutlinedButton";
import CoreSpeechToText from "../CoreSpeechToText";

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
    mode,
  } = props;

  const { config } = React.useContext(WrappidDataContext);

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
    element?.speechToText ? (
      config?.platform === APP_PLATFORM && (
        <CoreGrid coreId="speecToText">
          {element?.comp && !checkDependencies(element, formikprops)?.hide
            ? React.createElement(
              element?.comp ? element?.comp : CoreInput,
              element?.dependencies
                ? elementProps
                : {
                  ...createFormFieldProps(props, "edit"),
                  gridProps: { gridSize: 11 },
                },
              element?.onlyView ? element?.label : null
            )
            : null}

          {element?.speechToText && (
            <CoreBox
              gridProps={{ gridSize: 1 }}
              styleClasses={[CoreClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER]}
            >
              <CoreSpeechToText
                element={element}
                formikprops={formikprops}
                mode={mode}
                preview={preview}
              />
            </CoreBox>
          )}
        </CoreGrid>
      )
    ) : element?.comp && !checkDependencies(element, formikprops)?.hide ? (
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
          onClick={OnCancelClick}
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
          onClick={formikprops.handleSubmit}
        />
      )}
    </CoreBox>
  ) : null;
}

CoreFormInputs.validProps = [
  {
    description:
      "This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like an autofill. You can learn more about it following the specification.",
    name : "autoComplete",
    types: [{ type: "string" }],
  },
  {
    description:
      "If true, the input element is focused during the first mount.",
    name : "autoFocus",
    types: [{ type: "boolean" }],
  },
  {
    description:
      "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide. The prop defaults to the value ('primary') inherited from the parent FormControl component.",
    name : "color",
    types: [
      {
        default    : "",
        type       : "string",
        validValues: ["primary" | "secondary" | "string"],
      },
    ],
  },
  {
    description:
      "The components used for each slot inside.This prop is an alias for the slots prop. It's recommended to use the slots prop instead.",
    name : "components",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: ["{ Input?: elementType, Root?: elementType }"],
      },
    ],
  },
  {
    description:
      "The extra props for the slot components. You can override the existing props or add new ones.This prop is an alias for the slotProps prop. It's recommended to use the slotProps prop instead, as componentsProps will be deprecated in the future.",
    name : "componentsProps",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: ["{ input?: object, root?: object }"],
      },
    ],
  },
  {
    description: "The default value. Use when the component is not controlled.",
    name       : "defaultValue",
    types      : [{ type: "any" }],
  },
  {
    description:
      "If true, the component is disabled. The prop defaults to the value (false) inherited from the parent FormControl component.",
    name : "disabled",
    types: [{ type: "boolean" }],
  },
  {
    description: "If true, the input will not have an underline.",
    name       : "disableUnderline",
    types      : [{ type: "boolean" }],
  },
  {
    description: "End InputAdornment for this component.",
    name       : "endAdornment",
    types      : [{ type: "node" }],
  },
  {
    description:
      "If true, the input will indicate an error. The prop defaults to the value (false) inherited from the parent FormControl component.",
    name : "error",
    types: [{ type: "boolean" }],
  },
  {
    description:
      "If true, the input will take up the full width of its container.",
    name : "fullWidth",
    types: [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
  {
    description:
      "If true, the label is hidden. This is used to increase density for a FilledInput. Be sure to add aria-label to the input element.",
    name : "hiddenLabel",
    types: [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
  {
    description: "The id of the input element.",
    name       : "id",
    types      : [{ type: "string" }],
  },
  {
    description:
      "The component used for the input element. Either a string to use a HTML element or a component.",
    name : "inputComponent",
    types: [
      {
        default: "input'",
        type   : "elementType",
      },
    ],
  },
  {
    description: "Attributes applied to the input element.",
    name       : "inputProps",
    types      : [{ default: {}, type: "object" }],
  },
  {
    description: "Pass a ref to the input element.",
    name       : "inputRef",
    types      : [{ type: "ref" }],
  },
  {
    description:
      "If dense, will adjust vertical spacing. This is normally obtained via context from FormControl. The prop defaults to the value ('none') inherited from the parent FormControl component.",
    name : "margin",
    types: [{ type: "string", validValues: ["dense", "none"] }],
  },
  {
    description:
      "Maximum number of rows to display when multiline option is set to true.",
    name : "maxRows",
    types: [{ type: "number | string" }],
  },
  {
    description:
      "Minimum number of rows to display when multiline option is set to true.",
    name : "minRows",
    types: [{ type: "string", validValues: ["inputRefnumber", "string"] }],
  },
  {
    description: "If true, a TextareaAutosize element is rendered.",
    name       : "multiline",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
  {
    description: "Name attribute of the input element.",
    name       : "name",
    types      : [{ type: "string" }],
  },
  {
    description:
      "Callback fired when the value is changed.Signature:function(event: React.ChangeEvent) => voidevent The event source of the callback. You can pull out the new value by accessing event.target.value (string).",
    name : "onChange",
    types: [{ type: "function" }],
  },
  {
    description:
      "The short hint displayed in the input before the user enters a value.",
    name : "placeholder",
    types: [{ type: "string" }],
  },
  {
    description:
      "It prevents the user from changing the value of the field (not from interacting with the field).",
    name : "readOnly",
    types: [{ type: "boolean" }],
  },
  {
    description:
      "If true, the input element is required. The prop defaults to the value (false) inherited from the parent FormControl component.",
    name : "required",
    types: [{ type: "boolean" }],
  },
  {
    description:
      "Number of rows to display when multiline option is set to true.",
    name : "rows",
    types: [{ type: "rnumber | string" }],
  },
  {
    description:
      "The extra props for the slot components. You can override the existing props or add new ones.This prop is an alias for the componentsProps prop, which will be deprecated in the future.",
    name : "slotProps",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: ["{ input?: object, root?: object }"],
      },
    ],
  },
  {
    description:
      "The components used for each slot inside.This prop is an alias for the components prop, which will be deprecated in the future.",
    name : "slots",
    types: [
      {
        default    : {},
        type       : "object",
        validValues: ["{ input?: elementType, root?: elementType }"],
      },
    ],
  },
  {
    description: "Start InputAdornment for this component.",
    name       : "startAdornment",
    types      : [{ type: "node" }],
  },
  
  {
    description:
      "Type of the input element. It should be a valid HTML5 input type.",
    name : "type",
    types: [{ default: "text'", type: "string" }],
  },
  {
    description:
      "The value of the input element, required for a controlled component.",
    name : "value",
    types: [{ type: "any" }],
  },
];
CoreFormInputs.invalidProps = [];
