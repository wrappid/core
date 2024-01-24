// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeAutocomplete } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreAutocomplete(props) {
  props = sanitizeComponentProps(CoreAutocomplete, props);
  return <NativeAutocomplete {...props} />;
}
CoreAutocomplete.validProps = [
  {
    description: "Array of options.",
    name       : "options",
    required   : "true",
    types      : [{ type: "array" }],
  },
  {
    description:
      "Render the input.Signature:function(params: object) => ReactNode",
    name    : "renderInput",
    required: "true",
    types   : [{ type: "function" }],
  },
  {
    description:
      "If true, the portion of the selected suggestion that has not been typed by the user, known as the completion string, appears inline after the input cursor in the textbox. The inline completion string is visually highlighted and has a selected state.",
    name : "autoComplete",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, the first option is automatically highlighted.",
    name       : "autoHighlight",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description:
      "If true, the selected option becomes the value of the input when the Autocomplete loses focus unless the user chooses a different option or changes the character string in the input.When using freeSolo mode, the typed value will be the input value if the Autocomplete loses focus without highlighting an option.",
    name : "autoSelect",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "Control if the input should be blurred when an option is selected:false the input is not blurred.true the input is always blurred.touch the input is blurred after a touch event.mouse the input is blurred after a mouse event.",
    name : "blurOnSelect",
    types: [{ default: false, type: "'mouse'| 'touch'| boolean " }],
  },
  {
    description: "Props applied to the Chip element.",
    name       : "ChipProps",
    types      : [{ type: "object" }],
  },
  {
    description: "The icon to display in place of the default clear icon.",
    name       : "clearIcon",
    types      : [{ default: "<ClearIcon fontSize=\"small\" />\",type:\"node\"", type: "node" }],
  },
  {
    description:
      "If true, the input's text is cleared on blur if no value is selected.Set to true if you want to help the user enter a new value. Set to false if you want to help the user resume their search.",
    name : "clearOnBlur",
    types: [{ default: "!props.freeSolo", type: "boolean" }],
  },
  {
    description:
      "If true, clear all values when the user presses escape and the popup is closed.",
    name : "clearOnEscape",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "Override the default text for the clear icon button.For localization purposes, you can use the provided translations.",
    name : "clearText",
    types: [{ default: "Clear", type: "string" }],
  },
  {
    description:
      "Override the default text for the close popup icon button.For localization purposes, you can use the provided translations.",
    name : "closeText",
    types: [{ default: "Close", type: "string" }],
  },
  {
    description: "The props used for each slot inside.",
    name       : "componentsProps",
    types      : [
      {
        default: {},
        type   : "{ clearIndicator?: object, paper?: object, popper?: object, popupIndicator?: object }",
      },
    ],
  },
  {
    description: "The default value. Use when the component is not controlled.",
    name       : "defaultValue",
    types      : [{ default: "props.multiple ? [] : null", type: "any" }],
  },
  {
    description: "If true, the input can't be cleared.",
    name       : "disableClearable",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, the popup won't close when a value is selected.",
    name       : "disableCloseOnSelect",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, the component is disabled.",
    name       : "disabled",
    types      : [{ default: false, type: "boolean" }] 
  },
  {
    description: "If true, will allow focus on disabled items.",
    name       : "disabledItemsFocusable",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "If true, the list box in the popup will not wrap focus.",
    name       : "disableListWrap",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description:
      "If true, the Popper content will be under the DOM hierarchy of the parent component.",
    name : "disablePortal",
    types: [{ default: false, type: "boolean" }]
  },
  {
    description:
      "A function that determines the filtered options to be rendered on search.Signature:function(options: Array, state: object) => Arrayoptions The options to render.state The state of the component.",
    name : "filterOptions",
    types: [{ default: "createFilterOptions()", type: "function" }],
  },
  {
    description: "If true, hide the selected options from the list box.",
    name       : "filterSelectedOptions",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "Force the visibility display of the popup icon.",
    name       : "forcePopupIcon",
    types      : [{ default: "auto'", type: "auto'| boolean" }],
  },
  {
    description:
      "If true, the Autocomplete is free solo, meaning that the user input is not bound to provided options.",
    name : "freeSolo",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "If true, the input will take up the full width of its container.",
    name : "fullWidth",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "The label to display when the tags are truncated (limitTags).Signature:function(more: number) => ReactNodemore The number of truncated tags.",
    name : "getLimitTagsText",
    types: [{ default: "(more) => `+${more}`", type: "function" }],
  },
  {
    description:
      "Used to determine the disabled state for a given option.Signature:function(option: Value) => booleanoption The option to test.",
    name : "getOptionDisabled",
    types: [{ type: "function" }],
  },
  {
    description:
      "Used to determine the string value for a given option. It's used to fill the input (and the list box options if renderOption is not provided).If used in free solo mode, it must accept both the type of the options and a string.Signature:function(option: Value) => string",
    name : "getOptionLabel",
    types: [{ default: "(option) => option.label ?? option", type: "function" }],
  },
  {
    description:
      "If provided, the options will be grouped under the returned string. The groupBy value is also used as the text for group headings when renderGroup is not provided.Signature:function(options: Value) => stringoptions The options to group.",
    name : "groupBy",
    types: [{ type: "function" }],
  },
  {
    description: "If true, the component handles the \"Home\" and \"End\" keys when the popup is open. It should move focus to the first option and last option, respectively.",
    name       : "handleHomeEndKeys",
    types      : [{ default: "!props.freeSolo", type: "boolean" }],
  },
  {
    description:
      "This prop is used to help implement the accessibility logic. If you don't provide an id it will fall back to a randomly generated one.",
    name : "id",
    types: [{ type: "string" }],
  },
  {
    description: "If true, the highlight can move to the input.",
    name       : "includeInputInList",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "The input value.",
    name       : "inputValue",
    types      : [{ type: "string" }],
  },
  {
    description:
      "Used to determine if the option represents the given value. Uses strict equality by default. ⚠️ Both arguments need to be handled, an option can only match with one value.Signature:function(option: Value, value: Value) => booleanoption The option to test.value The value to test against.",
    name : "isOptionEqualToValue",
    types: [{ type: "function" }],
  },
  {
    description:
      "The maximum number of tags that will be visible when not focused. Set -1 to disable the limit.",
    name : "limitTags",
    types: [{ default: "-1", type: "integer" }],
  },
  {
    description: "The component used to render the listbox.",
    name       : "ListboxComponent",
    types      : [{ default: "ul'", type: "elementType" }],
  },
  {
    description: "Props applied to the Listbox element.",
    name       : "ListboxProps",
    types      : [{ type: "object" }],
  },
  {
    description:
      "If true, the component is in a loading state. This shows the loadingText in place of suggestions (only if there are no suggestions to show, e.g. options are empty).",
    name : "loading",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "Text to display when in a loading state.For localization purposes, you can use the provided translations.",
    name : "loadingText",
    types: [{ default: "Loading…'", type: "node" }],
  },
  {
    description:
      "If true, value must be an array and the menu will support multiple selections.",
    name : "multiple",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "Text to display when there are no options.For localization purposes, you can use the provided translations.",
    name : "noOptionsText",
    types: [{ default: "No options'", type: "node" }],
  },
  {
    description: "Callback fired when the value changes.Signature:function(event: React.SyntheticEvent, value: Value | Array, reason: string, details?: string) => voidevent The event source of the callback.value The new value of the component.reason One of \"createOption\", \"selectOption\", \"removeOption\", \"blur\" or \"clear\".",
    name       : "onChange",
    types      : [{ type: "function" }],
  },
  {
    description: "Callback fired when the popup requests to be closed. Use in controlled mode (see open).Signature:function(event: React.SyntheticEvent, reason: string) => voidevent The event source of the callback.reason Can be: \"toggleInput\", \"escape\", \"selectOption\", \"removeOption\", \"blur\".",
    name       : "onClose",
    types      : [{ type: "function" }],
  },
  {
    description: "Callback fired when the highlight option changes.Signature:function(event: React.SyntheticEvent, option: Value, reason: string) => voidevent The event source of the callback.option The highlighted option.reason Can be: \"keyboard\", \"auto\", \"mouse\", \"touch\".",
    name       : "onHighlightChange",
    types      : [{ type: "function" }],
  },
  {
    description: "Callback fired when the input value changes.Signature:function(event: React.SyntheticEvent, value: string, reason: string) => voidevent The event source of the callback.value The new value of the text input.reason Can be: \"input\" (user input), \"reset\" (programmatic change), \"clear\".",
    name       : "onInputChange",
    types      : [{ type: "function" }],
  },
  {
    description:
      "Callback fired when the popup requests to be opened. Use in controlled mode (see open).Signature:function(event: React.SyntheticEvent) => voidevent The event source of the callback.",
    name : "onOpen",
    types: [{ type: "function" }],
  },
  {
    description: "If true, the component is shown.",
    name       : "open",
    types      : [{ type: "boolean" }],
  },
  {
    description: "If true, the popup will open on input focus.",
    name       : "openOnFocus",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description:
      "Override the default text for the open popup icon button.For localization purposes, you can use the provided translations.",
    name : "openText",
    types: [{ default: "Open'", type: "string" }],
  },
  {
    description: "The component used to render the body of the popup.",
    name       : "PaperComponent",
    types      : [{ default: "Paper", type: "elementType" }],
  },
  {
    description: "The component used to position the popup.",
    name       : "PopperComponent",
    types      : [{ default: "Popper", type: "elementType" }],
  },
  {
    description: "The icon to display in place of the default popup icon.",
    name       : "popupIcon",
    types      : [{ default: "<ArrowDropDownIcon />", type: "node" }],
  },
  {
    description:
      "If true, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.",
    name : "readOnly",
    types: [{ default: false, type: "boolean" }],
  },
  {
    description:
      "Render the group.Signature:function(params: AutocompleteRenderGroupParams) => ReactNodeparams The group to render.",
    name : "renderGroup",
    types: [{ default: "", type: "function" }],
  },
  {
    description:
      "Render the option, use getOptionLabel by default.Signature:function(props: object, option: Value, state: object, ownerState: object) => ReactNodeprops The props to apply on the li element.option The option to render.state The state of each option.ownerState The state of the Autocomplete component.",
    name : "renderOption",
    types: [{ type: "function" }],
  },
  {
    description:
      "Render the selected value.Signature:function(value: Array, getTagProps: function, ownerState: object) => ReactNodevalue The value provided to the component.getTagProps A tag props getter.ownerState The state of the Autocomplete component.",
    name : "renderTags",
    types: [{ type: "function" }],
  },
  {
    description:
      "If true, the input's text is selected on focus. It helps the user clear the selected value.",
    name : "selectOnFocus",
    types: [{ default: "!props.freeSolo", type: "boolean" }],
  },
  {
    description: "The size of the component.",
    name       : "size",
    types      : [{ default: "medium'", type: "small'| 'medium'| string" }],
  },
  {
    description: "The props used for each slot inside.",
    name       : "slotProps",
    types      : [
      {
        default: {},
        type   : "{ clearIndicator?: object, paper?: object, popper?: object, popupIndicator?: object }",
      },
    ],
  },
  {
    description:
      "The system prop that allows defining system overrides as well as additional CSS styles.See the `sx` page for more details.",
    name : "sx",
    types: [{ default: "", type: "Array<func| object| bool>| func| object" }],
  },
  {
    description:
      "The value of the autocomplete.The value must have reference equality with the option in order to be selected. You can customize the equality behavior with the isOptionEqualToValue prop.",
    name : "value",
    types: [{ type: "any" }],
  },
];
CoreAutocomplete.invalidProps = ["sx", "classes"];
