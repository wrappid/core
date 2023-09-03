// import CoreContainer from "./components/layouts/CoreContainer";
// import CoreNavigation from "./CoreNavigation";
// import CoreGridItem from "./components/layouts/CoreGridItem";
// -- import CoreAppDiv from "./components/layouts/CoreAppDiv";
import CoreComponent from "./components/CoreComponent";
import { coreComponentsRegistry as CoreComponentsRegistry } from "./components/CoreComponentsRegistry";
import CoreAvatar from "./components/dataDisplay/CoreAvatar";
import CoreBadge from "./components/dataDisplay/CoreBadge";
import CoreChip from "./components/dataDisplay/CoreChip";
import CoreDivider from "./components/dataDisplay/CoreDivider";
import CoreIcon, { __IconTypes } from "./components/dataDisplay/CoreIcon";
import CoreImage from "./components/dataDisplay/CoreImage";
import CoreList from "./components/dataDisplay/CoreList";
import CoreListItem from "./components/dataDisplay/CoreListItem";
import CoreListItemAvatar from "./components/dataDisplay/CoreListItemAvatar";
import CoreListItemIcon from "./components/dataDisplay/CoreListItemIcon";
import CoreListItemText from "./components/dataDisplay/CoreListItemText";
import CoreListSubheader from "./components/dataDisplay/CoreListSubheader";
import CoreTable from "./components/dataDisplay/CoreTable";
import CoreTableBody from "./components/dataDisplay/CoreTableBody";
import CoreTableBodyCell from "./components/dataDisplay/CoreTableBodyCell";
import CoreTableCell from "./components/dataDisplay/CoreTableCell";
import CoreTableContainer from "./components/dataDisplay/CoreTableContainer";
import CoreTableFooter from "./components/dataDisplay/CoreTableFooter";
import CoreTableHead from "./components/dataDisplay/CoreTableHead";
import CoreTableHeadCell from "./components/dataDisplay/CoreTableHeadCell";
import CoreTablePagination from "./components/dataDisplay/CoreTablePagination";
import CoreTableRow from "./components/dataDisplay/CoreTableRow";
import CoreTableSortLabel from "./components/dataDisplay/CoreTableSortLabel";
import CoreTooltip from "./components/dataDisplay/CoreTooltip";
import CoreEmailLink from "./components/dataDisplay/custom/CoreEmailLink";
import CoreEmailOrPhoneLink from "./components/dataDisplay/custom/CoreEmailOrPhoneLink";
import CoreIconText from "./components/dataDisplay/custom/CoreIconText";
import CoreMarkdownViewer from "./components/dataDisplay/custom/CoreMarkdownViewer";
import CorePhoneLink from "./components/dataDisplay/custom/CorePhoneLink";
import CoreTimer from "./components/dataDisplay/custom/CoreTimer";
import StatusText from "./components/dataDisplay/custom/StatusText";
import UserChip from "./components/dataDisplay/custom/UserChip";
import CoreH from "./components/dataDisplay/heading/CoreH";
import CoreH1 from "./components/dataDisplay/heading/CoreH1";
import CoreH2 from "./components/dataDisplay/heading/CoreH2";
import CoreH3 from "./components/dataDisplay/heading/CoreH3";
import CoreH4 from "./components/dataDisplay/heading/CoreH4";
import CoreH5 from "./components/dataDisplay/heading/CoreH5";
import CoreH6 from "./components/dataDisplay/heading/CoreH6";
import CoreLabel from "./components/dataDisplay/paragraph/CoreLabel";
import CoreTypographyBody1 from "./components/dataDisplay/paragraph/CoreTypographyBody1";
import CoreTypographyBody2 from "./components/dataDisplay/paragraph/CoreTypographyBody2";
import CoreTypographyButton from "./components/dataDisplay/paragraph/CoreTypographyButton";
import CoreTypographyCaption from "./components/dataDisplay/paragraph/CoreTypographyCaption";
import CoreTypographyOverline from "./components/dataDisplay/paragraph/CoreTypographyOverline";
import CoreTypographySubtitle1 from "./components/dataDisplay/paragraph/CoreTypographySubtitle1";
import CoreTypographySubtitle2 from "./components/dataDisplay/paragraph/CoreTypographySubtitle2";
import CoreDataTable from "./components/dataTable/CoreDataTable";
import CoreFlatList from "./components/dataTable/CoreFlatList";
import CoreAlert from "./components/feedback/CoreAlert";
import CoreBackdrop from "./components/feedback/CoreBackdrop";
import CoreCircularProgress from "./components/feedback/CoreCircularProgress";
import CoreDialog, { CORE_DIALOG_TYPES } from "./components/feedback/CoreDialog";
import CoreLinearProgress from "./components/feedback/CoreLinearProgress";
import CoreSkeleton from "./components/feedback/CoreSkeleton";
import CoreSnackbar from "./components/feedback/CoreSnackbar";
import CoreForm from "./components/forms/CoreForm";
import {
  FORM_VIEW_MODE,
  FORM_EDIT_MODE,
  FORM_IDS,
  FORM_SANITIZATION_FUNCTION_IDS,
  FORM_SANITIZATOIN_FUNCTION_MAP
} from "./components/forms/coreFormConstants";
import CoreFormControlLabel from "./components/forms/CoreFormControlLabel";
import CoreFormGroup from "./components/forms/CoreFormGroup";
import CoreAsyncSelect from "./components/inputs/CoreAsyncSelect";
import CoreAutocomplete from "./components/inputs/CoreAutocomplete";
import CoreButton from "./components/inputs/CoreButton";
import CoreCheckbox from "./components/inputs/CoreCheckbox";
import CoreConfirmPasswordField from "./components/inputs/CoreConfirmPasswordField";
import CoreContainedButton from "./components/inputs/CoreContainedButton";
import CoreDatepicker from "./components/inputs/CoreDatepicker";
import CoreDateRangepicker from "./components/inputs/CoreDateRangepicker";
import CoreDateTimePicker from "./components/inputs/CoreDateTimePicker";
import CoreDateTimeRangePicker from "./components/inputs/CoreDateTimeRangePicker";
import CoreFab from "./components/inputs/CoreFab";
import CoreFilePicker from "./components/inputs/CoreFilePicker";
import CoreFormControl from "./components/inputs/CoreFormControl";
import CoreFormErrorText from "./components/inputs/CoreFormErrorText";
import CoreFormHelperText from "./components/inputs/CoreFormHelperText";
import CoreIconButton from "./components/inputs/CoreIconButton";
import CoreImagePicker from "./components/inputs/CoreImagePicker";
import CoreInput from "./components/inputs/CoreInput";
import CoreInputAdornment from "./components/inputs/CoreInputAdornment";
import CoreInputLabel from "./components/inputs/CoreInputLabel";
import CoreInputPassword from "./components/inputs/CoreInputPassword";
import CoreJSONEditor from "./components/inputs/CoreJSONEditor";
import CoreJSONInput from "./components/inputs/CoreJSONInput";
import CoreListItemButton from "./components/inputs/CoreListItemButton";
import CoreMenu from "./components/inputs/CoreMenu";
import CoreMultiTimeRangePicker from "./components/inputs/CoreMultiTimeRangePicker";
import CoreOtpInput from "./components/inputs/CoreOtpInput";
import CoreOutlinedButton from "./components/inputs/CoreOutlinedButton";
import CorePhone from "./components/inputs/CorePhone";
import CoreSelect from "./components/inputs/CoreSelect";
import CoreSwitch from "./components/inputs/CoreSwitch";
import CoreTextarea from "./components/inputs/CoreTextarea";
import CoreTextButton from "./components/inputs/CoreTextButton";
import CoreTextField from "./components/inputs/CoreTextField";
import CoreTimePicker from "./components/inputs/CoreTimePicker";
import CoreTimeRangePicker from "./components/inputs/CoreTimeRangePicker";
import ChildMap from "./components/inputs/custom/ChildMap";
import CoreFormLabelCheckbox from "./components/inputs/custom/CoreFormLabelCheckbox";
import CoreGoogleButton from "./components/inputs/custom/CoreGoogleButton";
import CoreMedicineSelector from "./components/inputs/custom/CoreMedicineSelector";
import CoreReactSelectInput from "./components/inputs/custom/CoreReactSelectInput";
import CoreResponsiveButton from "./components/inputs/custom/CoreResponsiveButton";
import CoreRichTextEditor from "./components/inputs/custom/CoreRichTextEditor";
import ParentChildMap from "./components/inputs/custom/ParentChildMap";
import CoreBox from "./components/layouts/CoreBox";
import CoreGrid from "./components/layouts/CoreGrid";
import CoreImageBackground from "./components/layouts/CoreImageBackground";
import CoreSection from "./components/layouts/CoreSection";
import CoreSpan from "./components/layouts/CoreSpan";
import CoreStack from "./components/layouts/CoreStack";
import CoreLink from "./components/navigation/CoreLink";
import CoreMenuItem from "./components/navigation/CoreMenuItem";
import CoreMenuList from "./components/navigation/CoreMenuList";
import CoreScrollTop from "./components/navigation/CoreScrollTop";
import CoreTab from "./components/navigation/CoreTab";
import CoreTabPanel from "./components/navigation/CoreTabPanel";
import CoreTabs from "./components/navigation/CoreTabs";
import CoreCustomTabs from "./components/navigation/custom/CoreCustomTabs";
import CoreTabHead from "./components/navigation/custom/CoreTabHead";
import CoreAccordion from "./components/surfaces/CoreAccordion";
import CoreAccordionDetail from "./components/surfaces/CoreAccordionDetail";
import CoreAccordionSummary from "./components/surfaces/CoreAccordionSummary";
import CoreAppBar from "./components/surfaces/CoreAppBar";
import CoreCard from "./components/surfaces/CoreCard";
import CoreCardActionArea from "./components/surfaces/CoreCardActionArea";
import CoreCardActions from "./components/surfaces/CoreCardActions";
import CoreCardContent from "./components/surfaces/CoreCardContent";
import CoreCardHeader from "./components/surfaces/CoreCardHeader";
import CoreCollapse from "./components/surfaces/CoreCollapse";
import CoreDrawer from "./components/surfaces/CoreDrawer";
import CorePaper from "./components/surfaces/CorePaper";
import CoreRightDrawer from "./components/surfaces/CoreRightDrawer";
import CoreToolbar from "./components/surfaces/CoreToolbar";
import CoreFade from "./components/utils/CoreFade";
import CoreModal from "./components/utils/CoreModal";
import CorePopover from "./components/utils/CorePopover";
import CoreApiVersion from "./components/utils/custom/CoreApiVersion";
import CoreLoginDetails from "./components/utils/custom/CoreLoginDetails";
import CoreProfilePopOver from "./components/utils/custom/CoreProfilePopOver";
import config from "./config/config";
import { coreDialogInitValue, __EntityStatus, HTTP, urls } from "./config/constants";
import {
  CoreDialogContext, ComponentRegistryContext, IconContext, CoreResourceContext, ThemeContext, CoreRouteRegistryContext 
} from "./config/contextHandler";
import {
  MENU_HEADER_ITEM,
  MENU_PARENT_ITEM,
  MENU_ITEM,
  MENU_SEPERATOR,
  MENU_ITEM_WRAPPER,
  MENU_ITEM_BUTTON,
  MENU_ITEM_TEXT,
  MENU_ITEM_ICON
} from "./config/menuConstants";
import CoreApp from "./CoreApp";
import {
  CoreDomRoutes,
  CoreDomRoute,
  CoreDomNavigate,
  coreUseNavigate,
  coreUseLocation,
  coreUseParams,
  coreUseSearchParams,
  coreOpenUrl
} from "./helper/routerHelper";
import { getCoreAccessToken } from "./middleware/coreTokenProvider";
import AppService from "./service/AppService";
import { apiRequestAction } from "./store/action/appActions";
import { reloadDataTableAction } from "./store/action/dataTableActions";
import { onEditForm, cancelFormEdit } from "./store/action/formAction";
import { toggleRightMenuState } from "./store/action/menuAction";
import CoreProvider from "./store/CoreProvider";
import { createFullStore } from "./store/store";
import { LOGOUT_SUCCESS } from "./store/types/authTypes";
import CoreClasses from "./styles/CoreClasses";
import CoreThemeProvider from "./theme/CoreThemeProvider";
import { clearValidatePhoneEmail } from "./utils/componentDefaultValidations";
import { getForm, createApiMeta, getFormikRequiredMessage } from "./utils/formUtils";
import {
  getFullName,
  queryBuilder,
  createFormData,
  getAge,
  viewFormattedDate
} from "./utils/helper";
import { maskEmailOrPhone } from "./utils/stringUtils";
import {
  detectPlatform,
  coreUseTheme,
  CoreCssBaseline
} from "./utils/themeUtil";

export {
  clearValidatePhoneEmail,
  getFormikRequiredMessage,
  CoreMarkdownViewer,
  CoreCollapse,
  CoreListItemAvatar,
  CoreListSubheader,
  CoreFormControlLabel,
  CoreComponentsRegistry,
  coreUseSearchParams,
  CoreResourceContext,
  CoreRouteRegistryContext,
  CoreIconText,
  CoreComponent,
  config,
  CoreFormGroup,
  CoreApiVersion,
  CoreLoginDetails,
  CoreProfilePopOver,
  __EntityStatus,
  HTTP,
  urls,
  CoreDialog,
  CoreDialogContext,
  coreDialogInitValue,
  CoreGoogleButton,
  __IconTypes,
  // route
  CoreDomRoutes,
  CoreDomRoute,
  CoreDomNavigate,
  coreUseNavigate,
  coreUseLocation,
  coreUseParams,
  CoreApp,
  CoreProvider,
  // CoreAppDiv,
  CoreBox,
  // CoreContainer,
  CoreGrid,
  // CoreGridItem,
  CoreList,
  CoreListItem,
  CoreSection,
  CoreSpan,
  CoreStack,
  CoreImageBackground,
  CoreLink,
  CoreMenuItem,
  CoreMenuList,
  CoreScrollTop,
  CoreTab,
  CoreTabPanel,
  CoreTabs,
  CoreCustomTabs,
  CoreTabHead,
  // CoreNavigation,
  CoreFade,
  CoreModal,
  CorePopover,
  CoreToolbar,
  CoreForm,
  CoreAccordion,
  CoreAccordionDetail,
  CoreAccordionSummary,
  CoreAppBar,
  CoreCard,
  CoreCardActionArea,
  CoreCardActions,
  CoreCardContent,
  CoreCardHeader,
  CoreDrawer,
  CorePaper,
  CoreRightDrawer,
  CoreAsyncSelect,
  CoreAutocomplete,
  CoreButton,
  CoreCheckbox,
  CoreConfirmPasswordField,
  CoreContainedButton,
  CoreDatepicker,
  CoreDateRangepicker,
  CoreDateTimePicker,
  CoreDateTimeRangePicker,
  CoreFab,
  CoreFilePicker,
  CoreFormControl,
  CoreFormErrorText,
  CoreFormHelperText,
  CoreIconButton,
  CoreImagePicker,
  CoreInput,
  CoreInputAdornment,
  CoreInputLabel,
  CoreInputPassword,
  CoreJSONInput,
  CoreJSONEditor,
  CoreMenu,
  CoreMultiTimeRangePicker,
  CoreOtpInput,
  CoreOutlinedButton,
  CorePhone,
  CoreSelect,
  CoreSwitch,
  CoreTextarea,
  CoreTextButton,
  CoreTextField,
  CoreTimePicker,
  CoreTimeRangePicker,
  CoreListItemButton,
  ChildMap,
  CoreFormLabelCheckbox,
  CoreResponsiveButton,
  CoreRichTextEditor,
  ParentChildMap,
  CoreAlert,
  CoreBackdrop,
  CoreCircularProgress,
  CoreLinearProgress,
  CoreSkeleton,
  CoreSnackbar,
  CoreDataTable,
  CoreAvatar,
  CoreBadge,
  CoreChip,
  CoreDivider,
  CoreIcon,
  CoreImage,
  CoreListItemIcon,
  CoreListItemText,
  CoreTable,
  CoreTableBody,
  CoreTableBodyCell,
  CoreTableCell,
  CoreTableContainer,
  CoreTableFooter,
  CoreTableHead,
  CoreTableHeadCell,
  CoreTablePagination,
  CoreTableRow,
  CoreTableSortLabel,
  CoreTooltip,
  CoreLabel,
  CoreTypographyBody1,
  CoreTypographyBody2,
  CoreTypographyButton,
  CoreTypographyCaption,
  CoreTypographyOverline,
  CoreTypographySubtitle1,
  CoreTypographySubtitle2,
  CoreH,
  CoreH1,
  CoreH2,
  CoreH3,
  CoreH4,
  CoreH5,
  CoreH6,
  StatusText,
  UserChip,
  createFullStore,
  apiRequestAction,
  reloadDataTableAction,
  ComponentRegistryContext,
  maskEmailOrPhone,
  getCoreAccessToken,
  detectPlatform,
  CoreClasses,
  IconContext,
  FORM_VIEW_MODE,
  FORM_EDIT_MODE,
  FORM_IDS,
  LOGOUT_SUCCESS,
  getFullName,
  queryBuilder,
  createFormData,
  getAge,
  viewFormattedDate,
  getForm,
  onEditForm,
  cancelFormEdit,
  createApiMeta,
  MENU_HEADER_ITEM,
  MENU_PARENT_ITEM,
  MENU_ITEM,
  MENU_SEPERATOR,
  MENU_ITEM_WRAPPER,
  MENU_ITEM_BUTTON,
  MENU_ITEM_TEXT,
  MENU_ITEM_ICON,
  CoreMedicineSelector,
  AppService,
  CoreReactSelectInput,
  toggleRightMenuState,
  FORM_SANITIZATION_FUNCTION_IDS,
  FORM_SANITIZATOIN_FUNCTION_MAP,
  coreUseTheme,
  CoreCssBaseline,
  CoreFlatList,
  CorePhoneLink,
  CoreEmailLink,
  CoreEmailOrPhoneLink,
  CoreTimer,
  CORE_DIALOG_TYPES,
  coreOpenUrl,
  CoreThemeProvider,
  ThemeContext
};
