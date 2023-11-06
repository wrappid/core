import React from "react";

import CoreIcon from "../../dataDisplay/CoreIcon";
import CoreTooltip from "../../dataDisplay/CoreTooltip";
import CoreIconButton from "../../inputs/CoreIconButton";
import CoreBox from "../../layouts/CoreBox";

export default function CoreTableFilter(props) {
  const { head, filtering, ApplyFilter } = props;
  const [searchFlag, setSearch] = React.useState(false);

  const SetSearch = () => {
    setSearch(!searchFlag);
  };

  return head.id === "action" ? (
    <CoreBox component="div">
      {filtering && (
        <CoreTooltip title="Filter clear">
          <CoreIconButton onClick={props.HandleClearFilter}>
            <CoreIcon>cancel</CoreIcon>
          </CoreIconButton>
        </CoreTooltip>
      )}

      {
        <CoreTooltip title="Search">
          <CoreIconButton onClick={filtering ? ApplyFilter : SetSearch}>
            <CoreIcon>search</CoreIcon>
          </CoreIconButton>
        </CoreTooltip>
      }

      {searchFlag && !filtering && (
        <input
          style={{
            borderBottomWidth: 1,
            borderWidth      : 0,
          }}
          value={props.query}
          onChange={props.HandleQueryChange}
        />
      )}
    </CoreBox>
  ) : (
    <CoreBox component="div">
      {head.isFilter !== false && head.type === "dropdown" && head.dropdowns ? (
        <select
          value={
            props.filters && props.filters[head.id]
              ? props.filters[head.id].filter
              : ""
          }
          onChange={(event) => {
            props.HandleFilterChange(event, head);
          }}
          style={{ width: "85%" }}
          className="browser-default"
        >
          <option value="">Select filter</option>

          {head.dropdowns.map((data, index) => (
            <option key={`${head.dropdownLabel(data).trim("")}-${index}`} value={head.dropdownValue(data)}>
              {head.dropdownLabel(data)}
            </option>
          ))}
        </select>
      ) : head.isFilter !== false && head.type === "text" ? (
        <input
          value={
            props.filters && props.filters[head.id]
              ? props.filters[head.id].filter
              : ""
          }
          onChange={(event) => {
            props.HandleFilterChange(event, head);
          }}
          style={{ width: "85%" }}
          placeholder="Search Text"
        />
      ) : head.isFilter !== false && head.type === "date" ? (
        <input
          type="date"
          value={
            props.filters && props.filters[head.id]
              ? props.filters[head.id].filter
              : ""
          }
          onChange={(event) => {
            props.HandleFilterChange(event, head);
          }}
          style={{ width: "85%" }}
          placeholder="Pick date"
        />
      ) : head.isFilter !== false && head.type === "datetime" ? (
        <input
          type="date"
          value={
            props.filters && props.filters[head.id]
              ? props.filters[head.id].filter
              : ""
          }
          onChange={(event) => {
            props.HandleFilterChange(event, head);
          }}
          style={{ width: "85%" }}
          placeholder="Pick date"
        />
      ) : (
        // head.isFilter&&head.type === "number"?
        //   <input
        //   value={props.filters&&props.filters[head.id]?props.filters[head.id].filter:""}
        //   onChange={(e)=>{props.HandleFilterChange(e, head)}}
        //   style={{width: '50%'}} placeholder="Number"/>
        // :
        <p></p>
      )}
    </CoreBox>
  );
}
