import React from "react";

import { Formik } from "formik";
import { useSelector } from "react-redux";

import { BUTTON_TYPE, INPUT_TYPE } from "./coreFormConstants";
import CoreFormContainer from "./CoreFormContainer";
import CoreFormInputs from "./CoreFormInputs";
import { getGridSizeProps } from "../../utils/componentUtil";
import { createFieldSkeletonProps } from "../../utils/formUtils";
import CoreTypographyBody1 from "../dataDisplay/paragraph/CoreTypographyBody1";
import CoreSkeleton from "../feedback/CoreSkeleton";
import CoreGrid from "../layouts/CoreGrid";

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
    initProps = {},
  } = props;

  return formDataReadLoading &&
    formDataReadLoading[formId] &&
    forms[formId]?.skeletonComp ? (
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
                ) : (
                  <CoreFormInputs
                    gridProps={{ gridSize: getGridSizeProps(element?.gridSize, true) }}
                    key={"form-input-" + elementIndex}
                    type={INPUT_TYPE}
                    forms={forms}
                    formId={formId}
                    element={element}
                    formikprops={formikprops}
                    initProps={initProps}
                    preview={preview}
                    handleButtonCLick={handleButtonCLick}
                    submitLoading={submitLoading}
                    submitSuccess={submitSuccess}
                    OnEditClick={OnEditClick}
                    editFormId={editFormId}
                    allowEdit={allowEdit}
                    onFormFocus={onFormFocus}
                    OnCancelClick={OnCancelClick}
                    mode={props.mode}
                  />
                )
              )}

              {/* Showing Action Elements. Inline actions are written on input components */}
              {mode && forms[formId] && !forms[formId].inlineAction ? (
                <CoreFormInputs
                  key={"form-actions"}
                  type={BUTTON_TYPE}
                  formId={formId}
                  element={null}
                  formikprops={formikprops}
                  forms={forms}
                  initProps={initProps}
                  preview={preview}
                  handleButtonCLick={handleButtonCLick}
                  submitLoading={submitLoading}
                  submitSuccess={submitSuccess}
                  OnEditClick={OnEditClick}
                  editFormId={editFormId}
                  allowEdit={allowEdit}
                  onFormFocus={onFormFocus}
                  OnCancelClick={OnCancelClick}
                  mode={props.mode}
                />
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
