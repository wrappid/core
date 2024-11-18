// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreDataTable from "./CoreDataTable";
import { coreUseParams } from "../../../helper/routerHelper";
import CoreLayoutItem from "../../../layout/CoreLayoutItem";
import AppContainerLayout from "../../layouts/_system/AppContainerLayout";

export default function ModelData() {
  const { model } = coreUseParams();

  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        {model && <CoreDataTable entity={model} />}
      </CoreLayoutItem>
    </>
  );
}
