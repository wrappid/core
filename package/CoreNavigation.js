import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { urls } from "./config/constants";
import Error404 from "./error/Error404";
import PageContainer from "./layout/PageContainer";
import Error500 from "./error/Error500";
import { useDispatch, useSelector } from "react-redux";
import { apiRequestAction } from "./store/action/appActions";
import { HTTP_GET } from "./config/constants";
import {
  GET_ROUTE_FAILURE,
  GET_ROUTE_SUCCESS,
} from "./store/types/appTypes";

export default function CoreNavigation() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);
  const _routes = useSelector((state) => state.app.routes);
  let authenticated = auth?.uid ? true : false;

  React.useEffect(() => {
    dispatch(
      apiRequestAction(
        HTTP_GET,
        "/noauth/business/all/RoutePages",
        true,
        {
          _defaultFilter: encodeURIComponent(
            JSON.stringify({ authRequired: authenticated })
          ),
        },
        GET_ROUTE_SUCCESS,
        GET_ROUTE_FAILURE
      )
    );
  }, []);

  React.useEffect(() => {
    dispatch(
      apiRequestAction(
        HTTP_GET,
        "/noauth/business/all/RoutePages",
        true,
        {
          _defaultFilter: encodeURIComponent(
            JSON.stringify({ authRequired: authenticated })
          ),
        },
        GET_ROUTE_SUCCESS,
        GET_ROUTE_FAILURE
      )
    );
  }, [authenticated]);

  React.useEffect(() => {
    console.log("-----------------------------------------------");
    console.log(_routes);
    console.log("-----------------------------------------------");
  }, [_routes]);

  return (
    <Routes>
      {/* {Object.keys(routes).map((key) => (
        <Route
          key={key}
          exact
          path={"/" + key}
          element={<PageContainer page={routes[key]} route />}
        />
      ))} */}
      {_routes?.map((route) => {
        return (
          <Route
            key={route.url}
            exact
            path={"/" + route.url}
            element={<PageContainer page={""} route={route} />}
          />
        );
      })}
      <Route
        exact
        path="/"
        element={<Navigate to={"/" + urls.LOGIN_ROUTE} />}
      />
      {/* Error 500 */}
      <Route
        path="/error"
        element={
          <PageContainer
            page={{
              auth: false,
              comp: <Error500 />,
            }}
          />
        }
      />
      {/* Not Found */}
      <Route
        path="*"
        element={
          <PageContainer
            page={{
              auth: false,
              comp: <Error404 />,
            }}
          />
        }
      />
      {/* <Route exact path="/" element={<AuthContainer page="signin" />} /> */}
      {/* <Route
        path="/enterPassword"
        element={<AuthContainer page="password" />}
      />
      <Route path="/enterOTP" element={<AuthContainer page="otp" />} />
      <Route
        path="/resetPassword"
        element={<AuthContainer page="resetPassword" />}
      />
      <Route path="/signUp" element={<AuthContainer page="resetPassword" />} />
      <Route path={`/${urls.DASHBOARD}`} element={<Dashboard />} />

      <Route path="/createDoctor" element={<CreateUser />} />
      <Route path="/createAssistant" element={<CreateUser />} />
      <Route path="/createPatient" element={<CreateUser />} />
      <Route path="/createSystemAdmin" element={<CreateUser />} />
      <Route path="/createSalesForce" element={<CreateUser />} />
      <Route path="/createBackOffice" element={<CreateUser />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/manageAppointment" element={<ManageAppointment />} />
      <Route path="/prescription" element={<Prescription />} />
      <Route path="/schedulePatient" element={<SchedulePatient />} />
      <Route path="/followUps" element={<FollowUps />} />
      <Route path="/manageAssistant" element={<ManageAssistant />} />
      <Route path="/managePatient" element={<ManagePatient />} />
      <Route path="/viewPrescription" element={<ViewPrescriptionDetails />} />
      <Route path="/baseChemicalMapping" element={<BaseChemicalMapping />} />
      <Route
        path="/chemicalCompositionMapping"
        element={<ChemicalCompositionMapping />}
      />
      <Route path="/chemicalCompositionMappingDetail" element={<ChemicalCompositionMappingDetail/>} />

      <Route path="/masterDataManagement" element={<MasterDataManagement />} />
      <Route path="/verifyUser" element={<Verifications />} />
      <Route path="/settings" element={<Settings />} />
      <Route
        path="/PrescriptionPreview"
        element={<ViewPrescriptionDetails />}
      />
      <Route path="/assistantRequest" element={<AssistantRequest />} />
      <Route path="/manageUser" element={<UserManagement />} /> */}
    </Routes>
  );
}
