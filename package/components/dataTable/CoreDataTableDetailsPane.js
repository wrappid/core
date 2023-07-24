import React from "react";
import { ENV_DEV_MODE } from "../../config/constants";
import { getLabel } from "../../utils/stringUtils";
import CoreDivider from "../dataDisplay/CoreDivider";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreH1 from "../dataDisplay/heading/CoreH1";
import CoreTypographyBody1 from "../dataDisplay/paragraph/CoreTypographyBody1";
import CoreForm from "../forms/CoreForm";
import { FORM_EDIT_MODE, FORM_VIEW_MODE } from "../forms/coreFormConstants";
import CoreIconButton from "../inputs/CoreIconButton";
import CoreStack from "../layouts/CoreStack";
import CoreAccordion from "../surfaces/CoreAccordion";
import CoreAccordionDetail from "../surfaces/CoreAccordionDetail";
import CoreAccordionSummary from "../surfaces/CoreAccordionSummary";
import CoreCard from "../surfaces/CoreCard";
import CoreCardContent from "../surfaces/CoreCardContent";
import CoreCardHeader from "../surfaces/CoreCardHeader";
import CoreTableAction from "./CoreTableAction";
import TableRowAuditData from "./TableRowAuditData";
import StatusText from "../dataDisplay/custom/StatusText";
import CoreTypographyCaption from "../dataDisplay/paragraph/CoreTypographyCaption";
import CoreClasses from "../../styles/CoreClasses";
import CoreTableDetailsPaneContainer from "./CoreDataTableDetailsPaneContainer";
import CoreLabel from "../dataDisplay/paragraph/CoreLabel";

export default function CoreDataTableDetailsPane(props) {
  const {
    tableUUID,
    createFormID,
    updateFormID,
    hideForm,
    hideCreateForm,
    hideUpdateForm,
    formMode,
    setFormMode,
    editable,
    deletable,
    setDetailedRowId,
    setDetailedRowData,
    detailedRowId,
    detailedRowData,
    rowActions,
    tableColumns,
    filterData,
    enableCreateEntity,
    createEntityButtonText,
    set_showDetailsPane,
    preRenderDetailsPaneComponent,
    postRenderDetailsPaneComponent,
    preRender_CreateData_DetailsPaneComponent,
    postRender_CreateData_DetailsPaneComponent,
    preRender_UpdateData_DetailsPaneComponent,
    postRender_UpdateData_DetailsPaneComponent,
    _expandedDevJSONSchema,
    set_expandedDevJSONSchema,
    _showDetailsPane,
  } = props;

  return (
    <CoreTableDetailsPaneContainer
      open={_showDetailsPane}
      onClose={() => {
        set_showDetailsPane(false);
      }}
    >
      <CoreCard styleClasses={[CoreClasses.LAYOUT.FULL_WIDTH_HEIGHT]}>
        <CoreCardHeader
          title={
            detailedRowData ? (
              <>
                <CoreStack direction="row" spacing={1}>
                  <CoreTypographyCaption>
                    {"ID: " + detailedRowData["id"]}
                  </CoreTypographyCaption>
                  {detailedRowData.hasOwnProperty("id") &&
                    detailedRowData.hasOwnProperty("_status") && (
                      <CoreDivider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />
                    )}
                  <StatusText status={detailedRowData["_status"]} />
                </CoreStack>
              </>
            ) : (
              !hideForm &&
              createFormID &&
              (createEntityButtonText || `Create ${getLabel(tableUUID)}`)
            )
          }
          action={
            <CoreStack direction="row">
              {detailedRowData && rowActions && rowActions.length > 0 && (
                <CoreTableAction
                  tableUUID={tableUUID}
                  actions={rowActions}
                  columns={tableColumns}
                  rowIndex={detailedRowId}
                  rowData={detailedRowData}
                />
              )}
              {/* <CoreIconButton
                onClick={(e) => {
                  set_showDetailsPane(false);
                  setDetailedRowId(null);
                  setDetailedRowData(null);
                }}
              >
                <CoreIcon>clear</CoreIcon>
              </CoreIconButton> */}
            </CoreStack>
          }
        />
        <CoreCardContent>
          {detailedRowData ? (
            <>
              {process.env.REACT_APP_ENV === ENV_DEV_MODE && (
                <CoreAccordion
                  expanded={_expandedDevJSONSchema}
                  onChange={() => {
                    set_expandedDevJSONSchema(!_expandedDevJSONSchema);
                  }}
                >
                  <CoreAccordionSummary>
                    <CoreLabel>JSON Schema</CoreLabel>
                  </CoreAccordionSummary>
                  <CoreAccordionDetail>
                    {/* <pre>{JSON.stringify(detailedRowData, null, 2)}</pre> */}
                    <CoreLabel>
                      {JSON.stringify(detailedRowData, null, 2)}
                    </CoreLabel>
                  </CoreAccordionDetail>
                </CoreAccordion>
              )}
              {preRenderDetailsPaneComponent && (
                <>
                  <CoreDivider />
                  {React.createElement(preRenderDetailsPaneComponent, {
                    data: detailedRowData,
                  })}
                </>
              )}
              {preRender_UpdateData_DetailsPaneComponent && (
                <>
                  {React.createElement(
                    preRender_UpdateData_DetailsPaneComponent, {
                      data: detailedRowData,
                    }
                  )}
                </>
              )}
              {detailedRowId && detailedRowData ? (
                updateFormID &&
                !hideForm && !hideUpdateForm && (
                  <>
                    <CoreDivider />
                    <CoreForm
                      apiMode={"edit"}
                      onMountRead={false}
                      formId={updateFormID}
                      mode={formMode}
                      allowEdit={editable}
                      allowDelete={deletable}
                      initData={detailedRowData}
                      // afterEdit={() => {
                      //   filterData();
                      // }}
                      afterCancel={() => {
                        setFormMode(FORM_VIEW_MODE);
                      }}
                      afterEditSuccess={() => {
                        // do something
                        // swal({
                        //   icon: 'success',
                        //   title: 'Updated Successfully',
                        //   text: `${getLabel(updateFormID)} updated successfully`,
                        //   buttons: {
                        //     confirm: 'Ok',
                        //   },
                        // }).then(data => {
                        //   set_showDetailsPane(false);
                        //   filterData();
                        // });
                      }}
                      afterDeleteSuccess={() => {
                        // do something
                        // swal({
                        //   icon: 'success',
                        //   title: 'Deleted Successfully',
                        //   text: `${getLabel(updateFormID)} deleted successfully`,
                        //   buttons: {
                        //     confirm: 'Ok',
                        //   },
                        // }).then(data => {
                        //   set_showDetailsPane(false);
                        //   filterData();
                        // });
                      }}
                      afterEditError={() => {
                        // swal({
                        //   icon: 'error',
                        //   title: 'Updated Failure',
                        //   text: `${getLabel(createFormID)} updated failure`,
                        //   buttons: {
                        //     confirm: 'Ok',
                        //   },
                        // }).then(data => {
                        //   // set_showDetailsPane(false);
                        //   // filterData();
                        // });
                      }}
                      afterDeleteError={() => {
                        // swal({
                        //   icon: 'error',
                        //   title: 'Deleted Failure',
                        //   text: `${getLabel(createFormID)} delete failure`,
                        //   buttons: {
                        //     confirm: 'Ok',
                        //   },
                        // }).then(data => {
                        //   // set_showDetailsPane(false);
                        //   // filterData();
                        // });
                      }}
                    />
                  </>
                )
              ) : (
                <CoreTypographyBody1>No row selected</CoreTypographyBody1>
              )}
              
              {postRender_UpdateData_DetailsPaneComponent && (
                <>
                  {React.createElement(
                    postRender_UpdateData_DetailsPaneComponent, {
                      data: detailedRowData,
                    }
                  )}
                </>
              )}
              {/**
               * @todo check if it's available show flag ticked
               */}
              {postRenderDetailsPaneComponent && (
                <>
                  <CoreDivider />
                  {React.createElement(postRenderDetailsPaneComponent, {
                    data: detailedRowData,
                  })}
                </>
              )}
              {true && (
                <>
                  <CoreDivider />
                  <TableRowAuditData rowData={detailedRowData} />
                </>
              )}
            </>
          ) : (
            <>
              {preRender_CreateData_DetailsPaneComponent && (
                <>
                  {React.createElement(
                    preRender_CreateData_DetailsPaneComponent
                  )}
                </>
              )}
              {enableCreateEntity ? (
                createFormID &&
                !hideForm && !hideCreateForm && (
                  <>
                    <CoreForm
                      apiMode={"create"}
                      onMountRead={false}
                      formId={createFormID}
                      mode={FORM_EDIT_MODE}
                      initData={{}}
                      afterEdit={() => {
                        filterData();
                      }}
                      afterCancel={() => {
                        set_showDetailsPane(false);
                      }}
                      afterCreateSuccess={() => {
                        // do something
                        // swal({
                        //   icon: 'success',
                        //   title: 'Created Successfully',
                        //   text: `${getLabel(createFormID)} created successfully`,
                        //   buttons: {
                        //     confirm: 'Ok',
                        //   },
                        // }).then(data => {
                        //   set_showDetailsPane(false);
                        //   filterData();
                        // });
                      }}
                      afterCreateError={() => {
                        // swal({
                        //   icon: 'error',
                        //   title: 'Create Failure',
                        //   text: `${getLabel(createFormID)} create failure`,
                        //   buttons: {
                        //     confirm: 'Ok',
                        //   },
                        // }).then(data => {
                        //   // set_showDetailsPane(false);
                        //   // filterData();
                        // });
                      }}
                    />
                  </>
                )
              ) : (
                <CoreH1>No data found</CoreH1>
              )}
              {postRender_CreateData_DetailsPaneComponent && (
                <>
                  {React.createElement(
                    postRender_CreateData_DetailsPaneComponent
                  )}
                </>
              )}
            </>
          )}
        </CoreCardContent>
      </CoreCard>
    </CoreTableDetailsPaneContainer>
  );
}
