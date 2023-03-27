import React from "react";
import { Children } from "react";
import { getGridSizeProps } from "../../utils/componentUtil";
import { SCGrid } from "../../styledComponents/layouts/SCGrid";
import { DEFAULT_SPACING } from "../../styles/default/DefaultCoreStyles";
import { getUUID } from "../../utils/appUtils";

export default function CoreGrid(props) {
  let _uuid = getUUID();
  var containerId = props?.coreId ? "gc_" + props.coreId : "gc_" + _uuid;

  return (
    <SCGrid
      coreId={containerId}
      styleClasses={props?.styleClasses}
      container={props?.container || true}
      item={props?.item || false}
      spacing={props?.spacing || DEFAULT_SPACING}
      {...props}
    >
      {props?.item
        ? props.children
        : Children.toArray(props.children).map((child, index) => {
            var itemId = child.props?.coreId
              ? containerId + "-gi-" + index + "_" + child.props.coreId
              : containerId + "-gi-" + index;
            return (
              <SCGrid
                coreId={itemId}
                item
                {...getGridSizeProps(child?.props?.gridProps?.gridSize)}
                styleClasses={child.props?.gridProps?.styleClasses || []}
              >
                {child}
              </SCGrid>
            );
          })}
    </SCGrid>
  );
}
