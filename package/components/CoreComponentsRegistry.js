import CoreComponentsRegistry from "./CoreComponentsRegistry.js";
import CoreAvatar from "./dataDisplay/CoreAvatar.js";
import CoreBadge from "./dataDisplay/CoreBadge.js";
import CoreChip from "./dataDisplay/CoreChip.js";
import CoreDivider from "./dataDisplay/CoreDivider.js";
import CoreIcon from "./dataDisplay/CoreIcon.js";
import CoreImage from "./dataDisplay/CoreImage.js";
import CoreListItemIcon from "./dataDisplay/CoreListItemIcon.js";
import CoreListItemText from "./dataDisplay/CoreListItemText.js";
import CoreTable from "./dataDisplay/CoreTable.js";
import CoreTableBody from "./dataDisplay/CoreTableBody.js";
import CoreTableBodyCell from "./dataDisplay/CoreTableBodyCell.js";
import CoreTableCell from "./dataDisplay/CoreTableCell.js";
import CoreTableContainer from "./dataDisplay/CoreTableContainer.js";
import CoreTableFooter from "./dataDisplay/CoreTableFooter.js";
import CoreTableHead from "./dataDisplay/CoreTableHead.js";
import CoreTableHeadCell from "./dataDisplay/CoreTableHeadCell.js";
import CoreTableHeadRow from "./dataDisplay/CoreTableHeadRow.js";
import CoreTablePagination from "./dataDisplay/CoreTablePagination.js";
import CoreTableRow from "./dataDisplay/CoreTableRow.js";
import CoreTableSortLabel from "./dataDisplay/CoreTableSortLabel.js";
import CoreTooltip from "./dataDisplay/CoreTooltip.js";
import CoreTypography from "./dataDisplay/CoreTypography.js";
import StatusText from "./dataDisplay/custom/StatusText.js";
import UserChip from "./dataDisplay/custom/UserChip.js";
import CoreH from "./dataDisplay/heading/CoreH.js";
import CoreH1 from "./dataDisplay/heading/CoreH1.js";
import CoreH2 from "./dataDisplay/heading/CoreH2.js";
import CoreH3 from "./dataDisplay/heading/CoreH3.js";
import CoreH4 from "./dataDisplay/heading/CoreH4.js";
import CoreH5 from "./dataDisplay/heading/CoreH5.js";
import CoreH6 from "./dataDisplay/heading/CoreH6.js";
import CoreLabel from "./dataDisplay/paragraph/CoreLabel.js";
import CoreTypographyBody1 from "./dataDisplay/paragraph/CoreTypographyBody1.js";
import CoreTypographyBody2 from "./dataDisplay/paragraph/CoreTypographyBody2.js";
import CoreTypographyButton from "./dataDisplay/paragraph/CoreTypographyButton.js";
import CoreTypographyCaption from "./dataDisplay/paragraph/CoreTypographyCaption.js";
import CoreTypographyOverline from "./dataDisplay/paragraph/CoreTypographyOverline.js";
import CoreTypographySubtitle1 from "./dataDisplay/paragraph/CoreTypographySubtitle1.js";
import CoreTypographySubtitle2 from "./dataDisplay/paragraph/CoreTypographySubtitle2.js";
import CoreDataTable from "./dataTable/CoreDataTable.js";
import CoreDataTableBody from "./dataTable/CoreDataTableBody.js";
import CoreDataTableDetailsPane from "./dataTable/CoreDataTableDetailsPane.js";
import CoreDataTableDetailsPaneContainer from "./dataTable/CoreDataTableDetailsPaneContainer.js";
import CoreDataTableFooter from "./dataTable/CoreDataTableFooter.js";
import CoreDataTableHead from "./dataTable/CoreDataTableHead.js";
import CoreDataTableRow from "./dataTable/CoreDataTableRow.js";
import CoreDataTableRowActionPopover from "./dataTable/CoreDataTableRowActionPopover.js";
import CoreDataTableRowContent from "./dataTable/CoreDataTableRowContent.js";
import CoreDataTableRowSummary from "./dataTable/CoreDataTableRowSummary.js";
import CoreDataTableToolbar from "./dataTable/CoreDataTableToolbar.js";
import CoreFlatList from "./dataTable/CoreFlatList.js";
import CoreTableAction from "./dataTable/CoreTableAction.js";
import CoreTableBulkAction from "./dataTable/CoreTableBulkAction.js";
import CoreTableCollapsible from "./dataTable/CoreTableCollapsible.js";
import CoreTableFilter from "./dataTable/CoreTableFilter.js";
import CoreTableSkeleton from "./dataTable/CoreTableSkeleton.js";
import CoreTableToolBar from "./dataTable/CoreTableToolBar.js";
import DevCoreDataTable from "./dataTable/DevCoreDataTable.js";
import TableRowAuditData from "./dataTable/TableRowAuditData.js";
import ExportData from "./dataTable/tableToolbarUtils/ExportData.js";
import FilterColumn from "./dataTable/tableToolbarUtils/FilterColumn.js";
import FilterData from "./dataTable/tableToolbarUtils/FilterData.js";
import SortTableData from "./dataTable/tableToolbarUtils/SortTableData.js";
import TableDensity from "./dataTable/tableToolbarUtils/TableDensity.js";
import CoreAlert from "./feedback/CoreAlert.js";
import CoreBackdrop from "./feedback/CoreBackdrop.js";
import CoreCircularProgress from "./feedback/CoreCircularProgress.js";
import CoreDialog from "./feedback/CoreDialog.js";
import CoreLinearProgress from "./feedback/CoreLinearProgress.js";
import CoreSkeleton from "./feedback/CoreSkeleton.js";
import CoreSnackbar from "./feedback/CoreSnackbar.js";
import CoreEditForm from "./forms/CoreEditForm.js";
import CoreFieldButton from "./forms/CoreFieldButton.js";
import CoreForm from "./forms/CoreForm.js";
import CoreFormButton from "./forms/CoreFormButton.js";
import coreFormConstants from "./forms/coreFormConstants.js";
import CoreFormContainer from "./forms/CoreFormContainer.js";
import CoreFormField from "./forms/CoreFormField.js";
import CoreFormGroup from "./forms/CoreFormGroup.js";
import CoreFormGroupLabel from "./forms/CoreFormGroupLabel.js";
import CoreFormHeader from "./forms/CoreFormHeader.js";
import CoreFormHeaderActions from "./forms/CoreFormHeaderActions.js";
import CoreViewField from "./forms/CoreViewField.js";
import CoreViewForm from "./forms/CoreViewForm.js";
import CoreAsyncSelect from "./inputs/CoreAsyncSelect.js";
import CoreAutocomplete from "./inputs/CoreAutocomplete.js";
import CoreButton from "./inputs/CoreButton.js";
import CoreCheckbox from "./inputs/CoreCheckbox.js";
import CoreConfirmPassword from "./inputs/CoreConfirmPassword.js";
import CoreConfirmPasswordField from "./inputs/CoreConfirmPasswordField.js";
import CoreContainedButton from "./inputs/CoreContainedButton.js";
import CoreDatepicker from "./inputs/CoreDatepicker.js";
import CoreDateRangepicker from "./inputs/CoreDateRangepicker.js";
import CoreDateTimePicker from "./inputs/CoreDateTimePicker.js";
import CoreDateTimeRangePicker from "./inputs/CoreDateTimeRangePicker.js";
import CoreFab from "./inputs/CoreFab.js";
import CoreFilePicker from "./inputs/CoreFilePicker.js";
import CoreFormControl from "./inputs/CoreFormControl.js";
import CoreFormErrorText from "./inputs/CoreFormErrorText.js";
import CoreFormHelperText from "./inputs/CoreFormHelperText.js";
import CoreIconButton from "./inputs/CoreIconButton.js";
import CoreImagePicker from "./inputs/CoreImagePicker.js";
import CoreInput from "./inputs/CoreInput.js";
import CoreInputAdornment from "./inputs/CoreInputAdornment.js";
import CoreInputLabel from "./inputs/CoreInputLabel.js";
import CoreInputPassword from "./inputs/CoreInputPassword.js";
import CoreJSONEditor from "./inputs/CoreJSONEditor.js";
import CoreJSONInput from "./inputs/CoreJSONInput.js";
import CoreMenu from "./inputs/CoreMenu.js";
import CoreMenuItem from "./inputs/CoreMenuItem.js";
import CoreMultiTimeRangePicker from "./inputs/CoreMultiTimeRangePicker.js";
import CoreOtpInput from "./inputs/CoreOtpInput.js";
import CoreOutlinedButton from "./inputs/CoreOutlinedButton.js";
import CorePhone from "./inputs/CorePhone.js";
import CoreSelect from "./inputs/CoreSelect.js";
import CoreSwitch from "./inputs/CoreSwitch.js";
import CoreTextarea from "./inputs/CoreTextarea.js";
import CoreTextButton from "./inputs/CoreTextButton.js";
import CoreTextField from "./inputs/CoreTextField.js";
import CoreTimePicker from "./inputs/CoreTimePicker.js";
import CoreTimeRangePicker from "./inputs/CoreTimeRangePicker.js";
import ChildMap from "./inputs/custom/ChildMap.js";
import CoreFormLabelCheckbox from "./inputs/custom/CoreFormLabelCheckbox.js";
import CoreGoogleButton from "./inputs/custom/CoreGoogleButton.js";
import CoreMedicineSelector from "./inputs/custom/CoreMedicineSelector.js";
import CoreResponsiveButton from "./inputs/custom/CoreResponsiveButton.js";
import CoreRichTextEditor from "./inputs/custom/CoreRichTextEditor.js";
import ParentChildMap from "./inputs/custom/ParentChildMap.js";
import ListItemButton from "./inputs/ListItemButton.js";
import CoreAppDiv from "./layouts/CoreAppDiv.js";
import CoreBox from "./layouts/CoreBox.js";
import CoreContainer from "./layouts/CoreContainer.js";
import CoreGrid from "./layouts/CoreGrid.js";
import CoreGridItem from "./layouts/CoreGridItem.js";
import CoreList from "./layouts/CoreList.js";
import CoreListItem from "./layouts/CoreListItem.js";
import CoreSection from "./layouts/CoreSection.js";
import CoreSpan from "./layouts/CoreSpan.js";
import CoreStack from "./layouts/CoreStack.js";
import CoreLink from "./navigation/CoreLink.js";
import CoreMenuList from "./navigation/CoreMenuList.js";
import CoreNavigation from "./navigation/CoreNavigation.js";
import CoreScrollTop from "./navigation/CoreScrollTop.js";
import CoreTab from "./navigation/CoreTab.js";
import CoreTabPanel from "./navigation/CoreTabPanel.js";
import CoreTabs from "./navigation/CoreTabs.js";
import CoreCustomTabs from "./navigation/custom/CoreCustomTabs.js";
import Logout from "./navigation/custom/Logout.js";
import SplashComponent from "./navigation/custom/SplashComponent.js";
import CoreAccordion from "./surfaces/CoreAccordion.js";
import CoreAccordionDetail from "./surfaces/CoreAccordionDetail.js";
import CoreAccordionSummary from "./surfaces/CoreAccordionSummary.js";
import CoreAppBar from "./surfaces/CoreAppBar.js";
import CoreCard from "./surfaces/CoreCard.js";
import CoreCardActionArea from "./surfaces/CoreCardActionArea.js";
import CoreCardActions from "./surfaces/CoreCardActions.js";
import CoreCardContent from "./surfaces/CoreCardContent.js";
import CoreCardHeader from "./surfaces/CoreCardHeader.js";
import CoreCardMedia from "./surfaces/CoreCardMedia.js";
import CoreCollapse from "./surfaces/CoreCollapse.js";
import CoreDrawer from "./surfaces/CoreDrawer.js";
import CoreFooter from "./surfaces/CoreFooter.js";
import CorePaper from "./surfaces/CorePaper.js";
import CoreRightDrawer from "./surfaces/CoreRightDrawer.js";
import CoreFade from "./utils/CoreFade.js";
import CoreModal from "./utils/CoreModal.js";
import CorePopover from "./utils/CorePopover.js";
import CoreToolbar from "./utils/CoreToolbar.js";
import CoreApiVersion from "./utils/custom/CoreApiVersion.js";
import CoreLoginDetails from "./utils/custom/CoreLoginDetails.js";
import CoreProfilePopOver from "./utils/custom/CoreProfilePopOver.js";
import HelpAndSupportPopOver from "./utils/custom/HelpAndSupportPopOver.js";
import NotificationPopOver from "./utils/custom/NotificationPopOver.js";
import QuickAddPopOver from "./utils/custom/QuickAddPopOver.js";

export const ComponentRegistry = {
  CoreComponentsRegistry: { comp: CoreComponentsRegistry },
  CoreAvatar: { comp: CoreAvatar },
  CoreBadge: { comp: CoreBadge },
  CoreChip: { comp: CoreChip },
  CoreDivider: { comp: CoreDivider },
  CoreIcon: { comp: CoreIcon },
  CoreImage: { comp: CoreImage },
  CoreListItemIcon: { comp: CoreListItemIcon },
  CoreListItemText: { comp: CoreListItemText },
  CoreTable: { comp: CoreTable },
  CoreTableBody: { comp: CoreTableBody },
  CoreTableBodyCell: { comp: CoreTableBodyCell },
  CoreTableCell: { comp: CoreTableCell },
  CoreTableContainer: { comp: CoreTableContainer },
  CoreTableFooter: { comp: CoreTableFooter },
  CoreTableHead: { comp: CoreTableHead },
  CoreTableHeadCell: { comp: CoreTableHeadCell },
  CoreTableHeadRow: { comp: CoreTableHeadRow },
  CoreTablePagination: { comp: CoreTablePagination },
  CoreTableRow: { comp: CoreTableRow },
  CoreTableSortLabel: { comp: CoreTableSortLabel },
  CoreTooltip: { comp: CoreTooltip },
  CoreTypography: { comp: CoreTypography },
  StatusText: { comp: StatusText },
  UserChip: { comp: UserChip },
  CoreH: { comp: CoreH },
  CoreH1: { comp: CoreH1 },
  CoreH2: { comp: CoreH2 },
  CoreH3: { comp: CoreH3 },
  CoreH4: { comp: CoreH4 },
  CoreH5: { comp: CoreH5 },
  CoreH6: { comp: CoreH6 },
  CoreLabel: { comp: CoreLabel },
  CoreTypographyBody1: { comp: CoreTypographyBody1 },
  CoreTypographyBody2: { comp: CoreTypographyBody2 },
  CoreTypographyButton: { comp: CoreTypographyButton },
  CoreTypographyCaption: { comp: CoreTypographyCaption },
  CoreTypographyOverline: { comp: CoreTypographyOverline },
  CoreTypographySubtitle1: { comp: CoreTypographySubtitle1 },
  CoreTypographySubtitle2: { comp: CoreTypographySubtitle2 },
  CoreDataTable: { comp: CoreDataTable },
  CoreDataTableBody: { comp: CoreDataTableBody },
  CoreDataTableDetailsPane: { comp: CoreDataTableDetailsPane },
  CoreDataTableDetailsPaneContainer: {
    comp: CoreDataTableDetailsPaneContainer,
  },
  CoreDataTableFooter: { comp: CoreDataTableFooter },
  CoreDataTableHead: { comp: CoreDataTableHead },
  CoreDataTableRow: { comp: CoreDataTableRow },
  CoreDataTableRowActionPopover: { comp: CoreDataTableRowActionPopover },
  CoreDataTableRowContent: { comp: CoreDataTableRowContent },
  CoreDataTableRowSummary: { comp: CoreDataTableRowSummary },
  CoreDataTableToolbar: { comp: CoreDataTableToolbar },
  CoreFlatList: { comp: CoreFlatList },
  CoreTableAction: { comp: CoreTableAction },
  CoreTableBulkAction: { comp: CoreTableBulkAction },
  CoreTableCollapsible: { comp: CoreTableCollapsible },
  CoreTableFilter: { comp: CoreTableFilter },
  CoreTableSkeleton: { comp: CoreTableSkeleton },
  CoreTableToolBar: { comp: CoreTableToolBar },
  DevCoreDataTable: { comp: DevCoreDataTable },
  TableRowAuditData: { comp: TableRowAuditData },
  ExportData: { comp: ExportData },
  FilterColumn: { comp: FilterColumn },
  FilterData: { comp: FilterData },
  SortTableData: { comp: SortTableData },
  TableDensity: { comp: TableDensity },
  CoreAlert: { comp: CoreAlert },
  CoreBackdrop: { comp: CoreBackdrop },
  CoreCircularProgress: { comp: CoreCircularProgress },
  CoreDialog: { comp: CoreDialog },
  CoreLinearProgress: { comp: CoreLinearProgress },
  CoreSkeleton: { comp: CoreSkeleton },
  CoreSnackbar: { comp: CoreSnackbar },
  CoreEditForm: { comp: CoreEditForm },
  CoreFieldButton: { comp: CoreFieldButton },
  CoreForm: { comp: CoreForm },
  CoreFormButton: { comp: CoreFormButton },
  coreFormConstants: { comp: coreFormConstants },
  CoreFormContainer: { comp: CoreFormContainer },
  CoreFormField: { comp: CoreFormField },
  CoreFormGroup: { comp: CoreFormGroup },
  CoreFormGroupLabel: { comp: CoreFormGroupLabel },
  CoreFormHeader: { comp: CoreFormHeader },
  CoreFormHeaderActions: { comp: CoreFormHeaderActions },
  CoreViewField: { comp: CoreViewField },
  CoreViewForm: { comp: CoreViewForm },
  CoreAsyncSelect: { comp: CoreAsyncSelect },
  CoreAutocomplete: { comp: CoreAutocomplete },
  CoreButton: { comp: CoreButton },
  CoreCheckbox: { comp: CoreCheckbox },
  CoreConfirmPassword: { comp: CoreConfirmPassword },
  CoreConfirmPasswordField: { comp: CoreConfirmPasswordField },
  CoreContainedButton: { comp: CoreContainedButton },
  CoreDatepicker: { comp: CoreDatepicker },
  CoreDateRangepicker: { comp: CoreDateRangepicker },
  CoreDateTimePicker: { comp: CoreDateTimePicker },
  CoreDateTimeRangePicker: { comp: CoreDateTimeRangePicker },
  CoreFab: { comp: CoreFab },
  CoreFilePicker: { comp: CoreFilePicker },
  CoreFormControl: { comp: CoreFormControl },
  CoreFormErrorText: { comp: CoreFormErrorText },
  CoreFormHelperText: { comp: CoreFormHelperText },
  CoreIconButton: { comp: CoreIconButton },
  CoreImagePicker: { comp: CoreImagePicker },
  CoreInput: { comp: CoreInput },
  CoreInputAdornment: { comp: CoreInputAdornment },
  CoreInputLabel: { comp: CoreInputLabel },
  CoreInputPassword: { comp: CoreInputPassword },
  CoreJSONEditor: { comp: CoreJSONEditor },
  CoreJSONInput: { comp: CoreJSONInput },
  CoreMenu: { comp: CoreMenu },
  CoreMenuItem: { comp: CoreMenuItem },
  CoreMultiTimeRangePicker: { comp: CoreMultiTimeRangePicker },
  CoreOtpInput: { comp: CoreOtpInput },
  CoreOutlinedButton: { comp: CoreOutlinedButton },
  CorePhone: { comp: CorePhone },
  CoreSelect: { comp: CoreSelect },
  CoreSwitch: { comp: CoreSwitch },
  CoreTextarea: { comp: CoreTextarea },
  CoreTextButton: { comp: CoreTextButton },
  CoreTextField: { comp: CoreTextField },
  CoreTimePicker: { comp: CoreTimePicker },
  CoreTimeRangePicker: { comp: CoreTimeRangePicker },
  ChildMap: { comp: ChildMap },
  CoreFormLabelCheckbox: { comp: CoreFormLabelCheckbox },
  CoreGoogleButton: { comp: CoreGoogleButton },
  CoreMedicineSelector: { comp: CoreMedicineSelector },
  CoreResponsiveButton: { comp: CoreResponsiveButton },
  CoreRichTextEditor: { comp: CoreRichTextEditor },
  ParentChildMap: { comp: ParentChildMap },
  ListItemButton: { comp: ListItemButton },
  CoreAppDiv: { comp: CoreAppDiv },
  CoreBox: { comp: CoreBox },
  CoreContainer: { comp: CoreContainer },
  CoreGrid: { comp: CoreGrid },
  CoreGridItem: { comp: CoreGridItem },
  CoreList: { comp: CoreList },
  CoreListItem: { comp: CoreListItem },
  CoreSection: { comp: CoreSection },
  CoreSpan: { comp: CoreSpan },
  CoreStack: { comp: CoreStack },
  CoreLink: { comp: CoreLink },
  CoreMenuList: { comp: CoreMenuList },
  CoreNavigation: { comp: CoreNavigation },
  CoreScrollTop: { comp: CoreScrollTop },
  CoreTab: { comp: CoreTab },
  CoreTabPanel: { comp: CoreTabPanel },
  CoreTabs: { comp: CoreTabs },
  CoreCustomTabs: { comp: CoreCustomTabs },
  Logout: { comp: Logout },
  SplashComponent: { comp: SplashComponent },
  CoreAccordion: { comp: CoreAccordion },
  CoreAccordionDetail: { comp: CoreAccordionDetail },
  CoreAccordionSummary: { comp: CoreAccordionSummary },
  CoreAppBar: { comp: CoreAppBar },
  CoreCard: { comp: CoreCard },
  CoreCardActionArea: { comp: CoreCardActionArea },
  CoreCardActions: { comp: CoreCardActions },
  CoreCardContent: { comp: CoreCardContent },
  CoreCardHeader: { comp: CoreCardHeader },
  CoreCardMedia: { comp: CoreCardMedia },
  CoreCollapse: { comp: CoreCollapse },
  CoreDrawer: { comp: CoreDrawer },
  CoreFooter: { comp: CoreFooter },
  CorePaper: { comp: CorePaper },
  CoreRightDrawer: { comp: CoreRightDrawer },
  CoreFade: { comp: CoreFade },
  CoreModal: { comp: CoreModal },
  CorePopover: { comp: CorePopover },
  CoreToolbar: { comp: CoreToolbar },
  CoreApiVersion: { comp: CoreApiVersion },
  CoreLoginDetails: { comp: CoreLoginDetails },
  CoreProfilePopOver: { comp: CoreProfilePopOver },
  HelpAndSupportPopOver: { comp: HelpAndSupportPopOver },
  NotificationPopOver: { comp: NotificationPopOver },
  QuickAddPopOver: { comp: QuickAddPopOver },
};
