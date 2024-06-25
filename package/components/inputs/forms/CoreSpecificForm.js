import React, { useState } from "react";

import CoreForm from "./CoreForm";
import { FORM_VIEW_MODE } from "./coreFormConstants";
import { coreUseParams, coreUseSearchParams } from "../../../helper/routerHelper";
import CoreLayoutItem from "../../../layout/CoreLayoutItem";
import AppContainerLayout from "../../layouts/_system/AppContainerLayout";

export default function CoreSpecificForm() {
  const { formId } = coreUseParams();
  const [searchParams] = coreUseSearchParams();
  const [query, setQuery] = useState();

  React.useEffect(() => {
    try {
      let tmpQuery = searchParams.get("query");
      let _query = tmpQuery ? JSON.parse(tmpQuery) : null;

      _query._defaultFilter = encodeURIComponent(
        JSON.stringify(_query._defaultFilter)
      );

      setQuery(_query);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error in json query", err);
    }
  }, []);

  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        {(!searchParams.get("query") || (searchParams.get("query") && query)) && (
          <CoreForm
            arrayView={true}
            coreId={formId}
            formId={formId}
            gridProps={{ gridSize: 6 }}
            mode={FORM_VIEW_MODE}
            query={query ? query : null}
          />
        )}
      </CoreLayoutItem>
    </>
  );
}
