import { Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { getGridSizeProps } from "../../utils/componentUtil";
import { FORM_DATA_TABLE_FUNCTION_MAP } from "../../utils/formDataTableFunctionMap";
import {
  checkDependencies,
  createFieldSkeletonProps,
  createFormActionProps,
  createFormFieldProps,
} from "../../utils/formUtils";
import CoreTypographyBody1 from "../dataDisplay/paragraph/CoreTypographyBody1";
import CoreSkeleton from "../feedback/CoreSkeleton";
import CoreContainedButton from "../inputs/CoreContainedButton";
import CoreInput from "../inputs/CoreInput";
import CoreOutlinedButton from "../inputs/CoreOutlinedButton";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";
import CoreFormButton from "./CoreFormButton";
import CoreFormContainer from "./CoreFormContainer";

export const FormContext = React.createContext();

export default function CoreEditForm(props) {
  const rawForm = useSelector((state) => state.forms.rawForm);
  const rawFormStatus = useSelector((state) => state.forms.rawFormStatus);
  const {
    forms,
    formId,
    handleButtonCLick,
    mode,
    index,
    submitLoading,
    submitSuccess,
    OnEditClick,
    editFormId,
    formRef,
    OnCancelClick,
    formDataReadLoading,
    formData,
    allowEdit,
    onFormFocus,
    preview,
  } = props;
  console.log("CORE EDIT FORM DETAILS", forms[formId]?.formElements);

  return formDataReadLoading &&
    formDataReadLoading[formId] &&
    forms[formId].skeletonComp ? (
    React.createElement(forms[formId]?.skeletonComp, {})
  ) : !props.mode && forms[formId]?.renderComp ? (
    React.createElement(forms[formId]?.renderComp, {
      ...props,
      ...(Array.isArray(formData) ? formData[index] : formData),
    })
  ) : rawForm && rawForm[formId] ? (
    <Formik
      enableReinitialize={true}
      initialValues={Array.isArray(formData) ? formData[index] : formData}
      validationSchema={forms[formId]?.formValidationOb}
      onSubmit={props.handleSubmit}
      innerRef={formRef}
    >
      {(formikprops) => (
        <CoreFormContainer onSubmit={formikprops.handleSubmit}>
          <CoreGrid coreId="coreEditForm">
            {/* Showing Form Elements */}
            {forms[formId]?.formElements?.map((element, elementIndex) =>
              formDataReadLoading && formDataReadLoading[formId] ? (
                <CoreSkeleton
                  {...createFieldSkeletonProps(element)}
                  key={`core-skeleton-${formId}-${elementIndex}`}
                />
              ) : element.comp &&
                !checkDependencies(element, formikprops)?.hide ? (
                React.createElement(
                  element.comp ? element.comp : CoreInput,
                  {
                    key: `coreFormElement-${element.id}`,
                    ...createFormFieldProps(element, formikprops, "edit"),
                    coreId: "coreFormElement-" + element.id,
                    gridProps: {
                      gridSize: getGridSizeProps(element.gridSize, true),
                    },
                    readOnly: !props.mode || preview || element.readOnly,

                    //data table
                    entity: element.entity
                      ? element.entity
                      : element.getEntity
                      ? FORM_DATA_TABLE_FUNCTION_MAP[element.getEntity](
                          formikprops
                        )
                      : "",
                    //below field are passed on for inline actions
                    fieldActions: forms[formId]?.formActions,
                    inlineAction: forms[formId].inlineAction,
                    handleButtonCLick: handleButtonCLick,
                    submitLoading: submitLoading,
                    submitSuccess: submitSuccess,
                    OnEditClick: OnEditClick,
                    editId: editFormId,
                    allowEdit: allowEdit,

                    onFormFocus: onFormFocus,
                    preview: preview,
                  },
                  element.onlyView ? element.label : null
                )
              ) : null
            )}

            {/* Showing Action Elements. Inline actions are written on input components */}
            {mode && forms[formId] && !forms[formId].inlineAction ? (
              <CoreBox xs={12} {...createFormActionProps(forms[formId])}>
                {forms[formId]?.formActions?.map((actionElement, i) => (
                  <CoreFormButton
                    key={i}
                    element={actionElement}
                    formikprops={formikprops}
                    handleButtonCLick={handleButtonCLick}
                    submitLoading={submitLoading}
                  />
                ))}
                {forms[formId]?.allowCancel !== false && (
                  <CoreOutlinedButton
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
            ) : null}
          </CoreGrid>
        </CoreFormContainer>
      )}
    </Formik>
  ) : (
    rawFormStatus &&
    rawFormStatus[formId] &&
    !rawFormStatus[formId]?.loading && (
      <CoreTypographyBody1>Form Not Found</CoreTypographyBody1>
    )
  );
}
