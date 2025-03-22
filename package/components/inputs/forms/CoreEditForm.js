import React from "react";

// eslint-disable-next-line import/no-unresolved
import { Formik } from "formik";
import { useSelector } from "react-redux";

import { BUTTON_TYPE, INPUT_TYPE } from "./coreFormConstants";
import CoreFormContainer from "./CoreFormContainer";
import CoreFormInputs from "./CoreFormInputs";
import { getGridSizeProps } from "../../../utils/componentUtil";
import { createFieldSkeletonProps } from "../../../utils/formUtils";
import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";
import CoreSkeleton from "../../feedback/CoreSkeleton";
import CoreGrid from "../../layouts/CoreGrid";

export const FormContext = React.createContext();

export default function CoreEditForm(props) {
  const { rawForm, rawFormStatus } = useSelector((state) => state?.forms);
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
        // validateOnMount={true} // need to check
        onSubmit={props.handleSubmit}
        innerRef={formRef}
      >
        {(formikprops) => (
          <CoreFormContainer
            key={`cfc-${formId}`}
            onSubmit={formikprops.handleSubmit}>
            <CoreGrid
              key={`cfc-grid-${formId}`}
              coreId="coreEditForm">
              {/* Showing Form Elements */}
              {forms[formId]?.formElements?.map((element, elementIndex) =>
                (!element?.status || element?.status === "active") ? (
                  formDataReadLoading && formDataReadLoading[formId] ? (
                    <CoreSkeleton
                      key={`cfc-item-skel-${formId}-${elementIndex}`}
                      {...createFieldSkeletonProps(element)}
                    />
                  ) : (
                    <CoreFormInputs
                      key={`cf-input-${formId}-${elementIndex}`}
                      gridProps={{ gridSize: getGridSizeProps(element?.gridSize, true) }}
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
                      mode={mode}
                    /> 
                  )
                ) : null 
              )}

              {/* Showing Action Elements. Inline actions are written on input components */}
              {mode && forms[formId] && !forms[formId].inlineAction ? (
                <CoreFormInputs
                  key={`cf-action-input-${formId}`}
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
                  mode={mode}
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
