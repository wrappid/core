import {
    MAIN_MASTER_DATA_ERROR,
    MAIN_MASTER_DATA_LOADING,
    MAIN_MASTER_DATA_SUCCESS,
    MASTER_DATA_LOADING,
    MASTER_DATA_SUCCESS,
    SET_BASE_CHEMICAL,
    __SET_ROLE
} from "../types/mdmTypes";
import {
    GET_SETTING_META_ERROR,
    GET_SETTING_META_LOADING,
    GET_SETTING_META_SUCCESS
} from "../types/settingsTypes";

const initState = {
    baseChemical            : null,
    createSettingMetaError  : false,
    createSettingMetaLoading: false,

    createSettingMetaMsg    : null,
    createSettingMetaSuccess: false,
    getMainMasterDataError  : false,
    getMainMasterDataLoading: false,

    getMainMasterDataSuccess: false,
    getMasterDataError      : false,
    getMasterDataLoading    : false,
    getMasterDataSuccess    : false,
    getSettingMetaError     : false,

    getSettingMetaLoading: false,
    getSettingMetaMsg    : null,
    getSettingMetaSuccess: false,
    mainMasterData       : [],
    rolePermissionRole   : null,
    settingMeta          : null,

    settingMetaErrList      : null,
    settingMetaIds          : null,
    updateSettingMetaError  : false,
    updateSettingMetaLoading: false,

    updateSettingMetaMsg    : null,
    updateSettingMetaSuccess: false,
};

const mdmReducer = (state = initState, action) => {
    switch (action.type) {
        case MASTER_DATA_LOADING:
            return {
                ...state,
                getMasterDataError  : false,
                getMasterDataLoading: true,
                getMasterDataSuccess: false,
            };

        case MASTER_DATA_SUCCESS:
            return {
                ...state,
                getMasterDataError  : false,
                getMasterDataLoading: false,
                getMasterDataSuccess: true,
            };

        case "GET_SCRAPPED_CHEMICAL_COMPOSITIONS_ERROR":
            return {
                ...state,
                getMasterDataError  : true,
                getMasterDataLoading: false,
                getMasterDataSuccess: false,
            };

        case MAIN_MASTER_DATA_LOADING:
            return {
                ...state,
                getMainMasterDataError  : false,
                getMainMasterDataLoading: true,
                getMainMasterDataSuccess: false,
            };

        case MAIN_MASTER_DATA_SUCCESS:
            return {
                ...state,
                getMainMasterDataError  : false,
                getMainMasterDataLoading: false,
                getMainMasterDataSuccess: true,
                mainMasterData          : action?.payload?.data,
            };

        case MAIN_MASTER_DATA_ERROR:
            return {
                ...state,
                getMainMasterDataError  : true,
                getMainMasterDataLoading: false,
                getMainMasterDataSuccess: false,
            };

        case GET_SETTING_META_LOADING:
            return {
                ...state,
                getSettingMetaError  : false,
                getSettingMetaLoading: true,
                getSettingMetaMsg    : null,
                getSettingMetaSuccess: false,
                settingMeta          : null,
            };

        case GET_SETTING_META_SUCCESS:
            return {
                ...state,
                getSettingMetaError  : false,
                getSettingMetaLoading: false,
                getSettingMetaMsg    : action.message,
                getSettingMetaSuccess: true,
                settingMeta          : action.payload?.data ? action.payload?.data : [],
            };

        case GET_SETTING_META_ERROR:
            return {
                ...state,
                getSettingMetaError  : true,
                getSettingMetaLoading: false,
                getSettingMetaMsg    : action.message,
                getSettingMetaSuccess: false,
                settingMeta          : null,
            };

        case "CREATE_SETTING_META_LOADING":
            return {
                ...state,
                createSettingMetaError  : false,
                createSettingMetaLoading: true,
                createSettingMetaMsg    : null,
                createSettingMetaSuccess: false,
                settingMetaErrList      : null,
                settingMetaIds          : null,
            };

        case "CREATE_SETTING_META_SUCCESS":
            return {
                ...state,
                createSettingMetaError  : false,
                createSettingMetaLoading: false,
                createSettingMetaMsg    : action.message,
                createSettingMetaSuccess: true,
                settingMetaErrList      : action.errList,
                settingMetaIds          : action.ids,
            };

        case "CREATE_SETTING_META_ERROR":
            return {
                ...state,
                createSettingMetaError  : true,
                createSettingMetaLoading: false,
                createSettingMetaMsg    : action.message,
                createSettingMetaSuccess: false,
                settingMetaErrList      : null,
                settingMetaIds          : null,
            };

        case "UPDATE_SETTING_META_LOADING":
            return {
                ...state,
                updateSettingMetaError  : false,
                updateSettingMetaLoading: true,
                updateSettingMetaMsg    : null,
                updateSettingMetaSuccess: false,
            };

        case "UPDATE_SETTING_META_SUCCESS":
            return {
                ...state,
                updateSettingMetaError  : false,
                updateSettingMetaLoading: false,
                updateSettingMetaMsg    : action.message,
                updateSettingMetaSuccess: true,
            };

        case "UPDATE_SETTING_META_ERROR":
            return {
                ...state,
                updateSettingMetaError  : true,
                updateSettingMetaLoading: false,
                updateSettingMetaMsg    : action.message,
                updateSettingMetaSuccess: false,
            };

        case SET_BASE_CHEMICAL:
            return {
                ...state,
                baseChemical: action.payload,
            };

        case __SET_ROLE:
            return {
                ...state,
                rolePermissionRole: action.payload,
            };

        default:
            return state;
    }
};

export default mdmReducer;
