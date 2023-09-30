/* eslint-disable no-console */
/* eslint-disable id-length */
import React, { useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseNavigate, nativeFilterOptions } from "@wrappid/native";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

import CoreAutocomplete from "./CoreAutocomplete";
import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreIconButton from "./CoreIconButton";
import CoreTextField from "./CoreTextField";
import { HTTP } from "../../config/constants";
import { mergedComponentRegistry } from "../../layout/PageContainer";
import { apiRequestAction } from "../../store/action/appActions";
import {
  SELECT_OPTION_ERROR,
  SELECT_OPTION_LOAD,
  SELECT_OPTION_SUCCESS
} from "../../store/types/selectOptionsTypes";
import CoreClasses from "../../styles/CoreClasses";
import { getAsyncSelectValue } from "../../utils/objectUtils";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreListItem from "../dataDisplay/CoreListItem";
import CoreCircularProgress from "../feedback/CoreCircularProgress";
import CoreFieldButton from "../forms/CoreFieldButton";

const filter = nativeFilterOptions();
//TODO:
// - async select
// 	- up down arrow and enter key should work [priority: high]
// 	- load more on down arrow [priority: high]
// 	- home and end key will show first and last element of existing list [priority: low]
// 	- page up and page down should show first and last element of the visible list [priority: low]

export default function CoreAsyncSelect(props) {
  const {
    id,
    label,
    itemKey,
    endpoint = null,
    query = {},
    optionsData = [],
    handleChange,
    onChangeDispatch,
    inlineAction,
    fieldActions,
    disableClearable,
    handleButtonCLick,
    submitLoading,
    submitSuccess,
    OnEditClick,
    editId,
    asyncLoading,
    allowEdit,
    optionComp,
    optionCompProps,
    multiple,
    value,
    touched,
    error,
    helperText,
    readOnly,
    formik,
    onFormFocus,
    isOptionEqualToValue,
    getOptionValue,
    getOptionLabel,
    creatable,
    navigateUrl,
    strictItemKey = false,
    dependentQuery,
    mountValueMatch,
    freeSolo
  } = props;

  const options = useSelector(state => state?.selectOptions?.options);
  const dispatch = useDispatch();
  const navigate = nativeUseNavigate();
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [oldValue, setOldValue] = React.useState(null);
  const [mountMatch, setMountMatch] = React.useState(false);
  const [misMatch, setMisMatch] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  const getKey = () => {
    return itemKey
      ? itemKey
      : label?.toString()?.trim().toLocaleLowerCase()
        .split(" ")
        .join("-");
  };

  const loading = submitLoading
    ? true
    : open
      ? optionsData && optionsData.length !== 0
        ? false
        : options[getKey()]
          ? options[getKey()].loading
          : true
      : false;

  useEffect(() => {
    loadData(true, null, true);
    setMounted(true);
  }, []);

  useEffect(() => {
    // -- let active = true;
    if (!open) {
      return undefined;
    }
    if (asyncLoading !== false) loadData(true);
    return () => {
      // -- active = false;
    };
  }, [loading, inputValue]);

  useEffect(() => {
    if (
      !dependentQuery ||
      (dependentQuery && Object.keys(dependentQuery).length < 1)
    ) {
      return undefined;
    }
    loadData(true, dependentQuery);
    return () => {
      // -- active = false;
    };
  }, [dependentQuery]);

  useEffect(() => {
    if (submitSuccess) {
      setOldValue(value);
    }
  }, [submitLoading]);

  useEffect(() => {
    if (
      value &&
      value?.length > 0 &&
      mountValueMatch &&
      !mountMatch &&
      !loading &&
      options[getKey()]?.data?.length > 0 &&
      mounted
    ) {
      setMountMatch(true);
      let { newValue, misMatchFlag, stringFlag } =
        getAsyncSelectValue(value, {
          getOptionLabel,
          getOptionValue,
          isOptionEqualToValue,
          multiple,
          options: options[getKey()]?.data,
        }) || {};

      if (misMatchFlag) {
        setMisMatch(true);
      }
      if (stringFlag) {
        setInputValue(newValue);
      }

      formik.setFieldValue(id, newValue);
    }
  }, [loading, options]);

  const findOption = (options, value) => {
    if (
      !Array.isArray(options) ||
      (Array.isArray(options) && options.length === 0)
    ) {
      return "";
    }
    let f1 = options?.find(x => String(x.id) === String(value));
    let f2 = options?.find(x => String(x.value) === String(value));
    let f3 = options?.find(x => String(x.name) === String(value));

    if (f1) {
      return f1.label ? f1.label : f1.name ? f1.name : "";
    } else if (f2) {
      return f2.label ? f2.label : f2.name ? f2.name : "";
    } else if (f3) {
      return f3.label ? f3.label : f3.name ? f3.name : "";
    } else return "";
  };

  const getLabelFromValue = (option, optionsData, options) => {
    if (optionsData.length !== 0) {
      return findOption(optionsData, option);
    } else if (options[getKey()]?.data) {
      return findOption(options[getKey()]?.data, option);
    }
  };

  const checkValueDiff = () => {
    let flag = false;

    if (multiple) {
      if (!oldValue && (!value || value.length === 0)) {
        return false;
      }
      if (value?.length !== oldValue?.length) {
        return true;
      }
      for (let i = 0; i < value?.length; i++) {
        if (value[i].id !== oldValue[i]?.id) {
          return true;
        }
      }
    } else {
      if ((!value || !value?.id || value?.id === "") && !oldValue) {
        return false;
      }
      if (value && !oldValue) {
        return true;
      }
      if (value && oldValue) {
        if (
          (typeof value === typeof oldValue) === "string" &&
          value !== oldValue
        ) {
          return true;
        } else if (
          (typeof value === typeof oldValue) === "object" &&
          value?.id !== oldValue.id
        ) {
          return true;
        }
      }
    }

    return flag;
  };

  const OnChangeInput = val => {
    setInputValue(val);
  };

  const loadData = async (noPagination, depQuery) => {
    let apiQuery = { ...(depQuery || query || {}) };

    if (asyncLoading !== false) {
      apiQuery["start"] =
        options[getKey()]?.data && !noPagination
          ? options[getKey()]?.data.length
          : 0;
      apiQuery["length"] = 100;
      apiQuery["input"] = encodeURIComponent(inputValue);
      apiQuery["_searchValue"] = encodeURIComponent(inputValue);
    }
    if ((!optionsData || optionsData.length === 0) && endpoint) {
      dispatch({
        payload: { key: getKey(), strictItemKey: strictItemKey },
        type   : SELECT_OPTION_LOAD,
      });
      dispatch(
        apiRequestAction(
          HTTP.GET,
          endpoint,
          true,
          apiQuery,
          SELECT_OPTION_SUCCESS,
          SELECT_OPTION_ERROR,
          null, //localAction
          null, //includeFile
          null, //file
          null, //formId
          null, //reload
          { key: getKey(), strictItemKey: strictItemKey }
        )
      );
    }
  };

  const CustomListboxComponent = React.forwardRef(function ListboxComponent(
    param,
    ref
  ) {
    /**
     * @todo there is still some problem on keyboard navigation
     * it is not stopping on first element it rolling over and scoll not happening
     * on keybard action
     */
    return (
      <div {...param} ref={ref}>
        <InfiniteScroll
          ref={ref}
          height={300}
          role="listbox"
          {...param}
          dataLength={options[getKey()]?.data.length}
          next={loadData}
          scrollableTarget={id + "-listbox"}
          hasMore={
            options[getKey()]?.data.length < options[getKey()].total
              ? true
              : false
          }
          loader={
            <p style={{ backgroundColor: "#f9dc01", textAlign: "center" }}>
              <b>Loading...</b>
            </p>
          }
          // endMessage={
          //   <p style={{ textAlign: "center", backgroundColor: "#f9dc01" }}>
          //     <b>Yay! You have seen it all</b>
          //   </p>
          // }
        />
      </div>
    );
  });

  const getEndAdornment = params => {
    return (
      <React.Fragment>
        {loading &&
        inlineAction &&
        fieldActions &&
        fieldActions.length === 1 &&
        !readOnly ? (
            <CoreCircularProgress color="inherit" size={20} />
          ) : null}

        {/* inline form submits */}
        {inlineAction && fieldActions && fieldActions.length === 1 ? (
          !readOnly ? (
            <>
              {checkValueDiff() &&
                fieldActions?.map((actionElement, i) => (
                  <CoreFieldButton
                    key={i}
                    element={actionElement}
                    formikprops={formik}
                    handleButtonCLick={handleButtonCLick}
                    submitLoading={submitLoading}
                  />
                ))}

              {value &&
                ((multiple && value.length > 0) ||
                  (value.label && value.id)) && (
                <CoreIconButton
                  onClick={e => {
                    multiple
                      ? formik?.setFieldValue(id, [])
                      : formik?.setFieldValue(id, {});

                    // @todo added for on clear handle change support
                    if (handleChange) {
                      handleChange(e, multiple ? [] : {});
                    }
                  }}>
                  <CoreIcon fontSize="small">close</CoreIcon>
                </CoreIconButton>
              )}
            </>
          ) : (
            allowEdit !== false &&
            !onFormFocus && (
              <CoreIconButton
                onClick={() => {
                  OnEditClick(editId);
                }}>
                <CoreIcon fontSize="small">edit</CoreIcon>
              </CoreIconButton>
            )
          )
        ) : (
          params?.InputProps?.endAdornment
        )}
      </React.Fragment>
    );
  };

  return (
    <>
      <CoreAutocomplete
        _topLabel={label} //required for mobile layer
        _inputValue={inputValue} //required for mobile layer
        _optionComp={optionComp} //required for mobile layer
        _onFormFocus={onFormFocus} //required for mobile layer
        _editId={editId} //required for mobile layer
        _getEndAdornment={getEndAdornment} //required for mobile layer
        _formik={formik} //required for mobile layer
        _misMatch={misMatch} //required for mobile layer not matched values
        onBlur={formik?.handleBlur(id)}
        multiple={multiple ? multiple : false}
        id={id || `"async-select-"+${getKey()}`}
        disableClearable={inlineAction ? true : disableClearable ? true : false}
        open={open}
        value={value ? value : multiple ? [] : ""}
        autoComplete={true}
        freeSolo={freeSolo || true}
        loading={loading}
        readOnly={readOnly}
        onHighlightChange={() => {
          console.log("CHANGE");
        }}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
          ("");
        }}
        onFocus={
          onFormFocus && editId && readOnly
            ? () => {
              console.log("CLICKED");
              onFormFocus(editId);
            }
            : () => {
              console.log("CLICKED else");
            }
        }
        isOptionEqualToValue={
          isOptionEqualToValue
            ? (option, value) => isOptionEqualToValue(option, value)
            : (option, value) => {
              // -- console.log("COMPARE", option, value);
              if (
                typeof option === "string" &&
                  typeof option === typeof value
              ) {
                return option === value;
              } else if (typeof value === "string") {
                return option?.id === value;
              } else return option.id === value.id;
            }
        }
        getOptionLabel={option => {
          let label = "";

          console.log("OPTION", option);
          if (typeof option === "string" && isNaN(option)) {
            label = getLabelFromValue(option, optionsData, options);
          } else if (option) {
            if (getOptionLabel) {
              label = getOptionLabel(option);
            } else if (
              typeof option === "number" ||
              (typeof option === "string" && !isNaN(option))
            ) {
              label = getLabelFromValue(option, optionsData, options);
            } else if (option.label) {
              label = option.label;
            } else if (option.name) {
              label = option.name;
            } else {
              label = "";
            }
          } else {
            label = "";
          }
          return label;
        }}
        filterOptions={(options, params) => {
          const filtered =
            asyncLoading !== false ? options : filter(options, params);

          if (creatable && params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              label     : `Add "${params.inputValue}"`,
              name      : `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        onInputChange={(e, v) => {
          OnChangeInput(v);
        }}
        onChange={(e, values) => {
          setMisMatch(false);
          console.log("VALUES", values);
          console.log("navigateUrl", navigateUrl);
          if (values?.inputValue && navigateUrl) {
            navigate(navigateUrl, { state: { inputValue } });
          }
          if (onChangeDispatch) {
            /**
             * @todo
             * if onChangeDispatch is a function
             *    dispatch the function
             * else if onChangeDispatch is a string
             *    if onChangeDispatch value is available in the asyncSelectFunction Map
             *      then get it from asyncSelectFunctionMap
             *    else
             *       dispatch with onChangeDispatch value as type(reducer type)
             * else if it's a object
             *       do we really need it?
             */
            if (typeof onChangeDispatch === "function") {
              dispatch(onChangeDispatch(values));
            } else if (typeof onChangeDispatch === "object") {
              dispatch({
                payload: values,
                type   : onChangeDispatch.type,
              });
            } else {
              dispatch({
                payload: values,
                type   : onChangeDispatch,
              });
            }
          }
          if (handleChange) {
            handleChange(values);
          } else {
            if (getOptionValue) {
              formik?.setFieldValue(id, getOptionValue(values));
            } else {
              if (multiple) {
                let finalValue = "";

                for (let i = 0; i < values.length; i++) {
                  let val =
                    typeof values[i] === "string"
                      ? values[i]
                      : values[i].id
                        ? values[i].id
                        : values[i].name
                          ? values[i].id
                          : values[i].name
                            ? values[i].name
                            : "";

                  finalValue += val;
                  if (i < values.length - 1) {
                    finalValue += "|";
                  }
                }
                console.log("VALUE", finalValue);
                formik?.setFieldValue(id, finalValue);
              } else formik?.setFieldValue(id, values?.id);
            }
          }
        }}
        options={
          optionsData.length !== 0
            ? optionsData
            : options[getKey()]?.data
              ? options[getKey()]?.data
              : []
        }
        renderOption={(optionProps, option, state) =>
          optionComp && mergedComponentRegistry[optionComp]?.comp ? (
            <React.Fragment>
              {React.createElement(mergedComponentRegistry[optionComp].comp, {
                data: option,
                optionCompProps,
                optionProps,
                state,
              })}
            </React.Fragment>
          ) : (
            <CoreListItem {...optionProps}>
              {option.inputValue
                ? option.label
                : getOptionLabel
                  ? getOptionLabel(option)
                  : option.label
                    ? option.label
                    : option.name
                      ? option.name
                      : ""}
            </CoreListItem>
          )
        }
        ListboxComponent={asyncLoading ? CustomListboxComponent : null}
        renderInput={params => (
          <CoreTextField
            {...params}
            label={label}
            InputLabelProps={{ ...params.InputLabelProps, shrink: true }}
            InputProps={{
              ...params.InputProps,
              endAdornment: getEndAdornment(params),
            }}
          />
        )}
      />

      {touched && error && (
        <CoreFormErrorText styleClasses={[CoreClasses.MARGIN.MT1]}>
          {touched && error}
        </CoreFormErrorText>
      )}

      {helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.MARGIN.MT1]}>
          {helperText}
        </CoreFormHelperText>
      )}
    </>
  );
}
