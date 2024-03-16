// import CoreNavigation from "./CoreNavigation";
// import CoreGridItem from "./components/layouts/CoreGridItem";
// -- import CoreAppDiv from "./components/layouts/CoreAppDiv";
// eslint-disable-next-line import/no-unresolved
import { useNetworkStatus } from "@wrappid/native";

import CoreComponent from "./components/CoreComponent";
import { coreComponentsRegistry as CoreComponentsRegistry } from "./components/CoreComponentsRegistry";
import CoreAvatar from "./components/dataDisplay/CoreAvatar";
import CoreAvatarGroup from "./components/dataDisplay/CoreAvatarGroup";
import CoreBadge from "./components/dataDisplay/CoreBadge";
import CoreChip from "./components/dataDisplay/CoreChip";
import CoreDivider from "./components/dataDisplay/CoreDivider";
import CoreEmailLink from "./components/dataDisplay/CoreEmailLink";
import CoreEmailOrPhoneLink from "./components/dataDisplay/CoreEmailOrPhoneLink";
import CoreH from "./components/dataDisplay/CoreH";
import CoreH1 from "./components/dataDisplay/CoreH1";
import CoreH2 from "./components/dataDisplay/CoreH2";
import CoreH3 from "./components/dataDisplay/CoreH3";
import CoreH4 from "./components/dataDisplay/CoreH4";
import CoreH5 from "./components/dataDisplay/CoreH5";
import CoreH6 from "./components/dataDisplay/CoreH6";
import CoreIcon, { __IconTypes } from "./components/dataDisplay/CoreIcon";
import CoreIconText from "./components/dataDisplay/CoreIconText";
import CoreImage from "./components/dataDisplay/CoreImage";
import CoreLabel from "./components/dataDisplay/CoreLabel";
import CoreList from "./components/dataDisplay/CoreList";
import CoreListItem from "./components/dataDisplay/CoreListItem";
import CoreListItemAvatar from "./components/dataDisplay/CoreListItemAvatar";
import CoreListItemButton from "./components/dataDisplay/CoreListItemButton";
import CoreListItemIcon from "./components/dataDisplay/CoreListItemIcon";
import CoreListItemText from "./components/dataDisplay/CoreListItemText";
import CoreListSubheader from "./components/dataDisplay/CoreListSubheader";
import CoreMarkdownViewer from "./components/dataDisplay/CoreMarkdownViewer";
import CorePhoneLink from "./components/dataDisplay/CorePhoneLink";
import CoreTable from "./components/dataDisplay/CoreTable";
import CoreTableBody from "./components/dataDisplay/CoreTableBody";
import CoreTableBodyCell from "./components/dataDisplay/CoreTableBodyCell";
import CoreTableCell from "./components/dataDisplay/CoreTableCell";
import CoreTableContainer from "./components/dataDisplay/CoreTableContainer";
import CoreTableFooter from "./components/dataDisplay/CoreTableFooter";
import CoreTableHead from "./components/dataDisplay/CoreTableHead";
import CoreTableHeadCell from "./components/dataDisplay/CoreTableHeadCell";
import CoreTableHeadRow from "./components/dataDisplay/CoreTableHeadRow";
import CoreTablePagination from "./components/dataDisplay/CoreTablePagination";
import CoreTableRow from "./components/dataDisplay/CoreTableRow";
import CoreTableSortLabel from "./components/dataDisplay/CoreTableSortLabel";
import CoreTimer from "./components/dataDisplay/CoreTimer";
import CoreTooltip from "./components/dataDisplay/CoreTooltip";
import CoreTypography from "./components/dataDisplay/CoreTypography";
import CoreTypographyBody1 from "./components/dataDisplay/CoreTypographyBody1";
import CoreTypographyBody2 from "./components/dataDisplay/CoreTypographyBody2";
import CoreTypographyButton from "./components/dataDisplay/CoreTypographyButton";
import CoreTypographyCaption from "./components/dataDisplay/CoreTypographyCaption";
import CoreTypographyOverline from "./components/dataDisplay/CoreTypographyOverline";
import CoreTypographySubtitle1 from "./components/dataDisplay/CoreTypographySubtitle1";
import CoreTypographySubtitle2 from "./components/dataDisplay/CoreTypographySubtitle2";
import CoreDataTable from "./components/dataDisplay/dataTable/CoreDataTable";
import CoreFlatList from "./components/dataDisplay/dataTable/CoreFlatList";
import StatusText from "./components/dataDisplay/StatusText";
import UserChip from "./components/dataDisplay/UserChip";
import CoreAlert from "./components/feedback/CoreAlert";
import CoreAlertTitle from "./components/feedback/CoreAlertTitle";
import CoreBackdrop from "./components/feedback/CoreBackdrop";
import CoreCircularProgress from "./components/feedback/CoreCircularProgress";
import CoreDialog, { CORE_DIALOG_TYPES } from "./components/feedback/CoreDialog";
import CoreLinearProgress from "./components/feedback/CoreLinearProgress";
import CoreSkeleton from "./components/feedback/CoreSkeleton";
import CoreSnackbar from "./components/feedback/CoreSnackbar";
import ChildMap from "./components/inputs/ChildMap";
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
import CoreFormLabelCheckbox from "./components/inputs/CoreFormLabelCheckbox";
import CoreGoogleButton from "./components/inputs/CoreGoogleButton";
import CoreIconButton from "./components/inputs/CoreIconButton";
import CoreImagePicker from "./components/inputs/CoreImagePicker";
import CoreInput from "./components/inputs/CoreInput";
import CoreInputAdornment from "./components/inputs/CoreInputAdornment";
import CoreInputLabel from "./components/inputs/CoreInputLabel";
import CoreInputPassword from "./components/inputs/CoreInputPassword";
import CoreJSONEditor from "./components/inputs/CoreJSONEditor";
import CoreJSONInput from "./components/inputs/CoreJSONInput";
import CoreMedicineSelector from "./components/inputs/CoreMedicineSelector";
import CoreMultiTimeRangePicker from "./components/inputs/CoreMultiTimeRangePicker";
import CoreOtpInput from "./components/inputs/CoreOtpInput";
import CoreOutlinedButton from "./components/inputs/CoreOutlinedButton";
import CorePhone from "./components/inputs/CorePhone";
import CoreRating from "./components/inputs/CoreRating";
import CoreReactSelectInput from "./components/inputs/CoreReactSelectInput";
import CoreResponsiveButton from "./components/inputs/CoreResponsiveButton";
import CoreRichTextEditor from "./components/inputs/CoreRichTextEditor";
import CoreSelect from "./components/inputs/CoreSelect";
import CoreSpeechToText from "./components/inputs/CoreSpeechToText";
import CoreSwitch from "./components/inputs/CoreSwitch";
import CoreTextarea from "./components/inputs/CoreTextarea";
import CoreTextButton from "./components/inputs/CoreTextButton";
import CoreTextField from "./components/inputs/CoreTextField";
import CoreTimePicker from "./components/inputs/CoreTimePicker";
import CoreTimeRangePicker from "./components/inputs/CoreTimeRangePicker";
import CoreForm from "./components/inputs/forms/CoreForm";
import {
  FORM_EDIT_MODE,
  FORM_IDS,
  FORM_SANITIZATION_FUNCTION_IDS,
  FORM_SANITIZATOIN_FUNCTION_MAP,
  FORM_VIEW_MODE
} from "./components/inputs/forms/coreFormConstants";
import CoreFormControlLabel from "./components/inputs/forms/CoreFormControlLabel";
import CoreFormGroup from "./components/inputs/forms/CoreFormGroup";
import ParentChildMap from "./components/inputs/ParentChildMap";
import BlankLayout from "./components/layouts/_system/BlankLayout";
import CenteredBlankLayout from "./components/layouts/_system/CenteredBlankLayout";
import ComplexLayout from "./components/layouts/_system/ComplexLayout";
import FixedFooterLayout from "./components/layouts/_system/FixedFooterLayout";
import FixedHeaderFooterLayout from "./components/layouts/_system/FixedHeaderFooterLayout";
import FixedHeaderLayout from "./components/layouts/_system/FixedHeaderLayout";
import FooterLayout from "./components/layouts/_system/FooterLayout";
import HCenteredBlankLayout from "./components/layouts/_system/HCenteredBlankLayout";
import HeaderFooterLayout from "./components/layouts/_system/HeaderFooterLayout";
import HeaderLayout from "./components/layouts/_system/HeaderLayout";
import LeftDrawerLayout from "./components/layouts/_system/LeftDrawerLayout";
import LeftRightDrawerLayout from "./components/layouts/_system/LeftRightDrawerLayout";
import RightDrawerLayout from "./components/layouts/_system/RightDrawerLayout";
import ThreeColumnLayout from "./components/layouts/_system/ThreeColumnLayout";
import TwoColumnLayout from "./components/layouts/_system/TwoColumnLayout";
import VCenteredBlankLayout from "./components/layouts/_system/VCenteredBlankLayout";
import CoreBox from "./components/layouts/CoreBox";
import CoreContainer from "./components/layouts/CoreContainer";
import CoreGrid from "./components/layouts/CoreGrid";
import CoreImageBackground from "./components/layouts/CoreImageBackground";
import CoreSection from "./components/layouts/CoreSection";
import CoreSpan from "./components/layouts/CoreSpan";
import CoreStack from "./components/layouts/CoreStack";
import CoreCustomTabs from "./components/navigation/CoreCustomTabs";
import CoreLink from "./components/navigation/CoreLink";
import CoreMenu from "./components/navigation/CoreMenu";
import CoreMenuItem from "./components/navigation/CoreMenuItem";
import CoreMenuList from "./components/navigation/CoreMenuList";
import CoreScrollTop from "./components/navigation/CoreScrollTop";
import CoreTab from "./components/navigation/CoreTab";
import CoreTabHead from "./components/navigation/CoreTabHead";
import CoreTabPanel from "./components/navigation/CoreTabPanel";
import CoreTabs from "./components/navigation/CoreTabs";
import CoreTOC from "./components/navigation/CoreTOC";
import CoreAccordion from "./components/surfaces/CoreAccordion";
import CoreAccordionDetail from "./components/surfaces/CoreAccordionDetail";
import CoreAccordionSummary from "./components/surfaces/CoreAccordionSummary";
import CoreAppBar from "./components/surfaces/CoreAppBar";
import CoreCard from "./components/surfaces/CoreCard";
import CoreCardActionArea from "./components/surfaces/CoreCardActionArea";
import CoreCardActions from "./components/surfaces/CoreCardActions";
import CoreCardContent from "./components/surfaces/CoreCardContent";
import CoreCardHeader from "./components/surfaces/CoreCardHeader";
import CoreCardMedia from "./components/surfaces/CoreCardMedia";
import CoreCollapse from "./components/surfaces/CoreCollapse";
import CoreDrawer from "./components/surfaces/CoreDrawer";
import CoreFooter from "./components/surfaces/CoreFooter";
import CorePaper from "./components/surfaces/CorePaper";
import CoreRightDrawer from "./components/surfaces/CoreRightDrawer";
import CoreToolbar from "./components/surfaces/CoreToolbar";
import CoreApiVersion from "./components/utils/CoreApiVersion";
import CoreFade from "./components/utils/CoreFade";
import CoreLoginDetails from "./components/utils/CoreLoginDetails";
import CoreModal from "./components/utils/CoreModal";
import CoreNetworkStatus from "./components/utils/CoreNetworkStatus";
import CorePopover from "./components/utils/CorePopover";
import CoreProfilePopOver from "./components/utils/CoreProfilePopOver";
import NotificationPopOver from "./components/utils/NotificationPopOver";
import config from "./config/config";
import { __EntityStatus, coreDialogInitValue, HTTP, urls } from "./config/constants";
import {
  ComponentRegistryContext,
  CoreDialogContext,
  CoreResourceContext, CoreRouteRegistryContext, CoreRoutesContext,
  IconContext
} from "./config/contextHandler";
import {
  MENU_HEADER_ITEM,
  MENU_ITEM,
  MENU_ITEM_BUTTON,
  MENU_ITEM_ICON,
  MENU_ITEM_TEXT,
  MENU_ITEM_WRAPPER,
  MENU_PARENT_ITEM,
  MENU_SEPERATOR
} from "./config/menuConstants";
import useDynamicRefs from "./config/referenceMap";
import CoreApp from "./CoreApp";
import ComponentNotFound from "./error/ComponentNotFound";
import {
  CoreDomNavigate,
  CoreDomRoute,
  CoreDomRoutes,
  coreOpenUrl,
  coreUseLocation,
  coreUseNavigate,
  coreUseParams,
  coreUseSearchParams
} from "./helper/routerHelper";
import CoreLayoutItem from "./layout/CoreLayoutItem";
import CoreLayoutPlaceholder from "./layout/CoreLayoutPlaceholder";
import LayoutManager from "./layout/LayoutManager";
import { getCoreAccessToken } from "./middleware/coreTokenProvider";
import AppService from "./service/AppService";
import { apiRequestAction, setUserTheme } from "./store/action/appActions";
import { reloadDataTableAction } from "./store/action/dataTableActions";
import { cancelFormEdit, onEditForm } from "./store/action/formAction";
import { toggleMenuItemState, toggleRightMenuState } from "./store/action/menuAction";
import CoreProvider from "./store/CoreProvider";
import { createFullStore } from "./store/store";
import { LOGOUT_SUCCESS } from "./store/types/authTypes";
import CoreClasses from "./styles/CoreClasses";
import DefaultCoreStyles from "./styles/DefaultCoreStyles";
import LargeCoreStyles from "./styles/LargeCoreStyles";
import MediumCoreStyles from "./styles/MediumCoreStyles";
import SmallCoreStyles from "./styles/SmallCoreStyles";
import XLargeCoreStyles from "./styles/XLargeCoreStyles";
import XXLargeCoreStyles from "./styles/XXLargeCoreStyles";
import CoreThemeProvider from "./theme/CoreThemeProvider";
import ThemeSelector from "./theme/ThemeSelector";
import { clearValidatePhoneEmail } from "./utils/componentDefaultValidations";
import { defaultInvalidProps, defaultValidProps } from "./utils/componentUtil";
import { createApiMeta, getForm, getFormikRequiredMessage } from "./utils/formUtils";
import {
  createFormData,
  getAge,
  getFullName,
  queryBuilder,
  viewFormattedDate
} from "./utils/helper";
import stringUtils from "./utils/stringUtils";
import {
  APP_PLATFORM,
  CoreCssBaseline,
  detectPlatform,
  WEB_PLATFORM
} from "./utils/themeUtil";

export {
  __EntityStatus, __IconTypes, apiRequestAction, APP_PLATFORM, AppService, BlankLayout, cancelFormEdit, CenteredBlankLayout, ChildMap, clearValidatePhoneEmail, ComplexLayout, ComponentNotFound, ComponentRegistryContext, config, CORE_DIALOG_TYPES, CoreAccordion,
  CoreAccordionDetail,
  CoreAccordionSummary, CoreAlert,
  CoreAlertTitle, CoreApiVersion, CoreApp, CoreAppBar, CoreAsyncSelect,
  CoreAutocomplete, CoreAvatar,
  CoreAvatarGroup, CoreBackdrop, CoreBadge,
  // CoreAppDiv,
  CoreBox, CoreButton, CoreCard,
  CoreCardActionArea,
  CoreCardActions,
  CoreCardContent,
  CoreCardHeader, CoreCardMedia, CoreCheckbox, CoreChip, CoreCircularProgress,
  /**
   * Styles
   */
  CoreClasses, CoreCollapse, CoreComponent, CoreComponentsRegistry, CoreConfirmPasswordField,
  CoreContainedButton, CoreContainer, CoreCssBaseline, CoreCustomTabs, CoreDataTable, CoreDatepicker,
  CoreDateRangepicker,
  CoreDateTimePicker,
  CoreDateTimeRangePicker, CoreDialog,
  CoreDialogContext,
  coreDialogInitValue, CoreDivider, CoreDomNavigate, CoreDomRoute,
  // route
  CoreDomRoutes, CoreDrawer, CoreEmailLink,
  CoreEmailOrPhoneLink, CoreFab,
  // CoreNavigation,
  CoreFade, CoreFilePicker, CoreFlatList, CoreFooter, CoreForm, CoreFormControl, CoreFormControlLabel, CoreFormErrorText, CoreFormGroup, CoreFormHelperText, CoreFormLabelCheckbox, CoreGoogleButton, CoreGrid, CoreH,
  CoreH1,
  CoreH2,
  CoreH3,
  CoreH4,
  CoreH5,
  CoreH6, CoreIcon, CoreIconButton, CoreIconText, CoreImage, CoreImageBackground, CoreImagePicker,
  CoreInput,
  CoreInputAdornment,
  CoreInputLabel,
  CoreInputPassword, CoreJSONEditor, CoreJSONInput, CoreLabel, CoreLayoutItem,
  /**
   * Layout related component
   */
  CoreLayoutPlaceholder, CoreLinearProgress, CoreLink,
  // CoreGridItem,
  CoreList,
  CoreListItem, CoreListItemAvatar, CoreListItemButton, CoreListItemIcon,
  CoreListItemText, CoreListSubheader, CoreLoginDetails, CoreMarkdownViewer, CoreMedicineSelector, CoreMenu, CoreMenuItem,
  CoreMenuList, CoreModal, CoreMultiTimeRangePicker, coreOpenUrl, CoreOtpInput,
  CoreOutlinedButton, CorePaper, CorePhone, CorePhoneLink, CorePopover, CoreProfilePopOver, CoreProvider, CoreRating, CoreReactSelectInput, CoreResourceContext, CoreResponsiveButton,
  CoreRichTextEditor, CoreRightDrawer, CoreRouteRegistryContext, CoreRoutesContext, CoreScrollTop, CoreSection, CoreSelect, CoreSkeleton,
  CoreSnackbar, CoreSpan, CoreSpeechToText, CoreStack, CoreSwitch, CoreTab, CoreTabHead, CoreTable,
  CoreTableBody,
  CoreTableBodyCell,
  CoreTableCell,
  CoreNetworkStatus,
  CoreTableContainer,
  CoreTableFooter,
  CoreTableHead, CoreTableHeadCell, CoreTableHeadRow, CoreTablePagination,
  CoreTableRow,
  CoreTableSortLabel, CoreTabPanel,
  CoreTabs, CoreTextarea,
  CoreTextButton,
  CoreTextField, CoreThemeProvider, CoreTimePicker, CoreTimer, CoreTimeRangePicker, CoreTOC, CoreToolbar, CoreTooltip, CoreTypography, CoreTypographyBody1,
  CoreTypographyBody2,
  CoreTypographyButton,
  CoreTypographyCaption,
  CoreTypographyOverline,
  CoreTypographySubtitle1,
  CoreTypographySubtitle2, coreUseLocation, coreUseNavigate, coreUseParams, coreUseSearchParams, createApiMeta, createFormData, createFullStore, DefaultCoreStyles, defaultInvalidProps, defaultValidProps, detectPlatform, FixedFooterLayout,
  FixedHeaderFooterLayout,
  FixedHeaderLayout,
  FooterLayout, FORM_EDIT_MODE,
  FORM_IDS, FORM_SANITIZATION_FUNCTION_IDS,
  FORM_SANITIZATOIN_FUNCTION_MAP, FORM_VIEW_MODE, getAge, getCoreAccessToken, getForm, getFormikRequiredMessage, getFullName, HCenteredBlankLayout,
  HeaderFooterLayout,
  HeaderLayout, HTTP, IconContext, LargeCoreStyles, LayoutManager,
  LeftDrawerLayout,
  LeftRightDrawerLayout, LOGOUT_SUCCESS, MediumCoreStyles, MENU_HEADER_ITEM, MENU_ITEM, MENU_ITEM_BUTTON, MENU_ITEM_ICON, MENU_ITEM_TEXT, MENU_ITEM_WRAPPER, MENU_PARENT_ITEM, MENU_SEPERATOR,
  /**
   *
   */
  NotificationPopOver, onEditForm, ParentChildMap, queryBuilder, reloadDataTableAction, RightDrawerLayout, setUserTheme, SmallCoreStyles, StatusText, stringUtils,
  /**
   * Themes
   */
  ThemeSelector, ThreeColumnLayout, toggleMenuItemState, toggleRightMenuState, TwoColumnLayout, urls, useDynamicRefs, UserChip, VCenteredBlankLayout, viewFormattedDate, WEB_PLATFORM, XLargeCoreStyles,
  XXLargeCoreStyles,
  // Network status custom hook
  useNetworkStatus
};

