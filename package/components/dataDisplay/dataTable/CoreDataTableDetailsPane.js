/* eslint-disable no-prototype-builtins */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";

import CoreDataTableDetailsPaneContainer from "./CoreDataTableDetailsPaneContainer";
import CoreTableAction from "./CoreTableAction";
import TableRowAuditData from "./TableRowAuditData";
import { ENV_DEV_MODE, MEDIUM_WINDOW_WIDTH } from "../../../config/constants";
import CoreClasses from "../../../styles/CoreClasses";
import { getLabel } from "../../../utils/stringUtils";
import { APP_PLATFORM } from "../../../utils/themeUtil";
import CoreDivider from "../../dataDisplay/CoreDivider";
import CoreIcon from "../../dataDisplay/CoreIcon";
import CoreLabel from "../../dataDisplay/CoreLabel";
import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";
import CoreTypographyCaption from "../../dataDisplay/CoreTypographyCaption";
import StatusText from "../../dataDisplay/StatusText";
import CoreIconButton from "../../inputs/CoreIconButton";
import CoreForm from "../../inputs/forms/CoreForm";
import { FORM_EDIT_MODE, FORM_VIEW_MODE } from "../../inputs/forms/coreFormConstants";
import CoreGrid from "../../layouts/CoreGrid";
import CoreStack from "../../layouts/CoreStack";
import CoreAccordion from "../../surfaces/CoreAccordion";
import CoreAccordionDetail from "../../surfaces/CoreAccordionDetail";
import CoreAccordionSummary from "../../surfaces/CoreAccordionSummary";
import CoreCard from "../../surfaces/CoreCard";
import CoreCardContent from "../../surfaces/CoreCardContent";
import CoreCardHeader from "../../surfaces/CoreCardHeader";

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
    showCreateForm,
    setShowCreateForm,
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
    afterEditCancel,
    afterEditSuccess,
    afterEditError,
    afterCreateSuccess,
    afterCreateError,
    afterDeleteSuccess,
    afterDeleteError,
    hideAuditDataDetailPane,
    platform,
    updateFormAPIMode // api mode
  } = props;

  const { config } = React.useContext(WrappidDataContext);

  return (
    <CoreDataTableDetailsPaneContainer
      open={_showDetailsPane}
      onClose={() => {
        set_showDetailsPane(false);
      }}
    >
      <CoreCard styleClasses={[CoreClasses.LAYOUT.FULL_WIDTH_HEIGHT]}>
        <CoreCardHeader
          styleClasses={[CoreClasses.BORDER.BORDER_BOTTOM, CoreClasses.BORDER.BORDER_PRIMARY]}
          _tableAction={detailedRowData ? true : false}
          title={
            detailedRowData && Object.keys(detailedRowData).length > 0 ? (
              <>
                <CoreStack direction="row" spacing={1}>
                  <CoreTypographyCaption>
                    {"ID: " + detailedRowData["id"]}
                  </CoreTypographyCaption>

                  {detailedRowData?.hasOwnProperty("id") &&
                  detailedRowData?.hasOwnProperty("_status") && (
                    <CoreTypographyCaption
                      styleClasses={[CoreClasses.COLOR.TEXT_SECONDARY_DARK]}>
                      {"|"}
                    </CoreTypographyCaption>
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
            config?.wrappid?.platform === APP_PLATFORM ? (
              <CoreGrid>
                {detailedRowData &&
                Object.keys(detailedRowData).length > 0 &&
                rowActions &&
                rowActions.length > 0 && (
                  <CoreTableAction
                    gridProps={
                      window.windowWidth < MEDIUM_WINDOW_WIDTH ||
                      config?.wrappid?.platform === APP_PLATFORM
                        ? { gridSize: 10 }
                        : { gridSize: 12 }
                    }
                    tableUUID={tableUUID}
                    actions={rowActions}
                    columns={tableColumns}
                    rowIndex={detailedRowId}
                    rowData={detailedRowData}
                    set_showDetailsPane={set_showDetailsPane}
                    setDetailedRowId={setDetailedRowId}
                    setDetailedRowData={setDetailedRowData}
                    filterData={filterData}
                  />
                )}

                {(window.windowWidth < MEDIUM_WINDOW_WIDTH ||
                config?.wrappid?.platform === APP_PLATFORM) && (
                  <CoreIconButton
                    gridProps={detailedRowData ? { gridSize: 2 } : { gridSize: 12 }}
                    onClick={() => {
                      showCreateForm && setShowCreateForm(false);
                      set_showDetailsPane(false);
                      setDetailedRowId(null);
                      setDetailedRowData(null);
                    }}>
                    <CoreIcon>clear</CoreIcon>
                  </CoreIconButton>
                )}
              </CoreGrid>
            ) : (
              <CoreStack direction="row">
                {detailedRowData &&
                Object.keys(detailedRowData).length > 0 &&
                rowActions &&
                rowActions.length > 0 && (
                  <CoreTableAction
                    gridProps={
                      window.windowWidth < MEDIUM_WINDOW_WIDTH ||
                      config?.wrappid?.platform === APP_PLATFORM
                        ? { gridSize: 10 }
                        : { gridSize: 12 }
                    }
                    tableUUID={tableUUID}
                    actions={rowActions}
                    columns={tableColumns}
                    rowIndex={detailedRowId}
                    rowData={detailedRowData}
                    set_showDetailsPane={set_showDetailsPane}
                    setDetailedRowId={setDetailedRowId}
                    setDetailedRowData={setDetailedRowData}
                    filterData={filterData}
                  />
                )}

                {(window.windowWidth < MEDIUM_WINDOW_WIDTH ||
                config?.wrappid?.platform === APP_PLATFORM) && (
                  <CoreIconButton
                    gridProps={detailedRowData ? { gridSize: 2 } : { gridSize: 12 }}
                    onClick={() => {
                      showCreateForm && setShowCreateForm(false);
                      set_showDetailsPane(false);
                      setDetailedRowId(null);
                      setDetailedRowData(null);
                    }}>
                    <CoreIcon>clear</CoreIcon>
                  </CoreIconButton>
                )}
              </CoreStack>
            )
          }
        />

        {config?.wrappid?.platform === APP_PLATFORM && <CoreDivider />}

        <CoreCardContent>
          {detailedRowData && Object.keys(detailedRowData).length > 0 ? (
            <>
              {config?.envvironment === ENV_DEV_MODE && (
                <>
                  <CoreAccordion
                    expanded={_expandedDevJSONSchema}
                    onChange={() => {
                      set_expandedDevJSONSchema(!_expandedDevJSONSchema);
                    }}>
                    <CoreAccordionSummary>
                      <CoreLabel>JSON Schema</CoreLabel>
                    </CoreAccordionSummary>

                    <CoreAccordionDetail>
                      <CoreTypographyBody1 code={true}>
                        {JSON.stringify(detailedRowData, null, 2)}
                      </CoreTypographyBody1>
                    </CoreAccordionDetail>
                  </CoreAccordion>

                  <CoreDivider />
                </>
              )}

              {preRenderDetailsPaneComponent &&
              React.createElement(preRenderDetailsPaneComponent, { data: detailedRowData })}

              {preRender_UpdateData_DetailsPaneComponent && (
                <>
                  {React.createElement(
                    preRender_UpdateData_DetailsPaneComponent,
                    { data: detailedRowData }
                  )}
                </>
              )}

              {detailedRowId && detailedRowData ? (
                updateFormID &&
              !hideForm &&
              !hideUpdateForm && (
                  <>
                    <CoreDivider />

                    <CoreForm
                      apiMode={updateFormAPIMode}
                      onMountRead={false}
                      formId={updateFormID}
                      mode={formMode}
                      allowEdit={editable}
                      allowDelete={deletable}
                      initData={detailedRowData}
                      afterCancel={() => {
                        if (
                          afterEditCancel &&
                        typeof afterEditCancel === "function"
                        ) {
                          afterEditCancel();
                        }
                        setFormMode(FORM_VIEW_MODE);
                      }}
                      afterEditSuccess={() => {
                        if (platform === APP_PLATFORM) set_showDetailsPane(false);
                        filterData();
                        if (
                          afterEditSuccess &&
                        typeof afterEditSuccess === "function"
                        ) {
                          afterEditSuccess();
                        }
                      }}
                      afterDeleteSuccess={() => {
                        if (platform === APP_PLATFORM) set_showDetailsPane(false);
                        setDetailedRowId(null);
                        filterData();
                        if (afterDeleteSuccess) {
                          afterDeleteSuccess();
                        }
                      }}
                      afterEditError={() => {
                        if (
                          afterEditError &&
                        typeof afterEditError === "function"
                        ) {
                          afterEditError();
                        }
                      }}
                      afterDeleteError={() => {
                        if (
                          afterDeleteError &&
                        typeof afterDeleteError === "function"
                        ) {
                          afterDeleteError();
                        }
                      }}
                      deleteId={detailedRowId}
                    />
                  </>
                )
              ) : (
                <CoreTypographyBody1>No row selected</CoreTypographyBody1>
              )}

              {postRender_UpdateData_DetailsPaneComponent && (
                <>
                  {React.createElement(
                    postRender_UpdateData_DetailsPaneComponent,
                    { data: detailedRowData }
                  )}
                </>
              )}

              {/**
             * @todo check if it's available show flag ticked
             */}
              {postRenderDetailsPaneComponent && (
                <>
                  <CoreDivider />

                  {React.createElement(postRenderDetailsPaneComponent, { data: detailedRowData })}
                </>
              )}

              {!hideAuditDataDetailPane && (
                <>
                  <CoreDivider />

                  <TableRowAuditData rowData={detailedRowData} />
                </>
              )}
            </>
          ) : (
            <>
              {showCreateForm && preRender_CreateData_DetailsPaneComponent && (
                <>
                  {React.createElement(preRender_CreateData_DetailsPaneComponent)}
                </>
              )}

              {enableCreateEntity &&
            showCreateForm &&
            createFormID &&
            !hideForm &&
            !hideCreateForm ? (
                  <>
                    <CoreForm
                      apiMode={"create"}
                      onMountRead={false}
                      formId={createFormID}
                      mode={FORM_EDIT_MODE}
                      initData={{}}
                      afterCancel={() => {
                        filterData();
                        showCreateForm && setShowCreateForm(false);
                        if (platform === APP_PLATFORM) set_showDetailsPane(false);
                      }}
                      afterCreateSuccess={() => {
                        if (platform === APP_PLATFORM) set_showDetailsPane(false);

                        filterData();
                        if (
                          afterCreateSuccess &&
                      typeof afterCreateSuccess === "function"
                        ) {
                          afterCreateSuccess();
                        }
                      }}
                      afterCreateError={() => {
                        if (
                          afterCreateError &&
                      typeof afterCreateError === "function"
                        ) {
                          afterCreateError();
                        }
                      }}
                    />
                  </>
                ) : (
                  <CoreTypographyBody1>No row selected</CoreTypographyBody1>
                )}

              {showCreateForm && postRender_CreateData_DetailsPaneComponent && (
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
    </CoreDataTableDetailsPaneContainer>
  );
}
