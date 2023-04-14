import React, { useState } from "react";

import { CssBaseline } from "@mui/material";

import ErrorBoundary from "../middleware/ErrorBoundary";
import { CoreClasses } from "@wrappid/styles";
import CoreBox from "../components/layouts/CoreBox";

function AppContainer(props) {
  return (
    <>
      <CoreBox
        styleClasses={[
          CoreClasses.LAYOUT.FULL_HEIGHT,
          CoreClasses.LAYOUT.FLEXBOX,
        ]}
      >
        <CssBaseline />

        {/* {auth.uid && (
                    <>
                        <RxAppBar handleDrawer={handleDrawer} />

                        {auth.accessToken && (
                            <RxDrawer
                                open={windowWidth <= SMALL_WINDOW_WIDTH ? leftMenuOpenSmallScreen : leftMenuOpen}
                            />
                        )}
                    </>
                )} */}

        <CoreBox
          component="main"
          styleClasses={
            auth?.uid
              ? [CoreClasses.LAYOUT.CONTENT_CONTAINER]
              : [CoreClasses.LAYOUT.LOGGED_OUT_CONTENT_CONTAINER]
          }
        >
          {/* <RxDrawerRight open={false} /> */}

          <ErrorBoundary hasError={hasError} setHasError={setHasError}>
            {props.children}
          </ErrorBoundary>

          {/* <RxFooter /> */}
        </CoreBox>
      </CoreBox>
    </>
  );
}

export default AppContainer;
