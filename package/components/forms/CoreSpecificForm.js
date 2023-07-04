import React, { useState } from "react";

import { coreUseParams, coreUseSearchParams } from "../../helper/routerHelper";

import CoreForm from "./CoreForm";
import { FORM_VIEW_MODE } from "./coreFormConstants";

export default function CoreSpecificForm() {
    const { formId } = coreUseParams();
    const [searchParams] = coreUseSearchParams();
    const [query, setQuery] = useState();

    React.useEffect(() => {
        try {
            let tmpQuery = searchParams.get("query");
            let _query = tmpQuery ? JSON.parse(tmpQuery) : null;

            setQuery(_query);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error("Error in json query", err);
        }
    }, []);

    return (
        (!searchParams.get("query") || (searchParams.get("query") && query)) && (
            <CoreForm
                arrayView={true}
                coreId={formId}
                formId={formId}
                gridProps={{ gridSize: 6 }}
                mode={FORM_VIEW_MODE}
                query={query ? query : null}
            />
        )
    );
}
