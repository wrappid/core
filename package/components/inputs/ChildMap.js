// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreCheckbox from "./CoreCheckbox";
import CoreInput from "./CoreInput";
import CoreClasses from "../../styles/CoreClasses";
import CoreTypographyBody1 from "../dataDisplay/CoreTypographyBody1";
import CoreBox from "../layouts/CoreBox";
import CoreGrid from "../layouts/CoreGrid";

export default function ChildMap({ parentOb, handleChange, formData, label }) {
  return parentOb?.__children?.map((childOb) => (
    <CoreGrid key={childOb.id} styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
      <CoreBox
        gridProps={{ gridSize: 10 }}
        styleClasses={[CoreClasses.MARGIN.ML5, CoreClasses.PADDING.PL3]}
      >
        <CoreCheckbox
          id={childOb.id + "-hasEntry"}
          label={
            <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.M0]}>
              {label + childOb?.name}
            </CoreTypographyBody1>
          }
          onChange={handleChange}
          checked={childOb?.hasEntry}
        />
      </CoreBox>

      <CoreInput
        id={childOb.id + "-priority"}
        label="Order/Priority"
        type="number"
        onChange={handleChange}
        gridProps={{ gridSize: 2 }}
        value={childOb?.priority}
      />

      {childOb?.__children ? (
        <CoreBox gridProps={{ gridSize: 12 }}>
          <ChildMap
            label={label + childOb.name + " > "}
            parentOb={childOb}
            handleChange={handleChange}
            formData={formData}
          />
        </CoreBox>
      ) : null}
    </CoreGrid>
  ));
}
