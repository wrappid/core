import React from "react";
import {
  NativeDomRoutes,
  NativeDomRoute,
  NativeDomNavigate,
} from "@wrappid/styled-components";
import { urls } from "./config/constants";
import Error404 from "./error/Error404";
import PageContainer from "./layout/PageContainer";
import Error500 from "./error/Error500";
import { useDispatch, useSelector } from "react-redux";
import { apiRequestAction } from "./store/action/appActions";
import { HTTP_GET } from "./config/constants";
import { GET_ROUTE_FAILURE, GET_ROUTE_SUCCESS } from "./store/types/appTypes";

export default function CoreRoutes() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);
  const _routes = useSelector((state) => state?.route?.routes);
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
    <NativeDomRoutes>
      {/* {Object.keys(routes).map((key) => (
        <NativeDomRoute
          key={key}
          exact
          path={"/" + key}
          element={<PageContainer page={routes[key]} route />}
        />
      ))} */}
      {_routes?.map((route) => {
        return (
          <NativeDomRoute
            key={route.url}
            exact
            path={"/" + route.url}
            element={<PageContainer page={""} route={route} />}
          />
        );
      })}
      <NativeDomRoute
        exact
        path="/"
        element={<NativeDomNavigate to={"/" + urls.LOGIN_ROUTE} />}
      />
      {/* Error 500 */}
      <NativeDomRoute
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
      <NativeDomRoute
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
      {/* <NativeDomRoute exact path="/" element={<AuthContainer page="signin" />} /> */}
      {/* <NativeDomRoute
        path="/enterPassword"
        element={<AuthContainer page="password" />}
      />
      <NativeDomRoute path="/enterOTP" element={<AuthContainer page="otp" />} />
      <NativeDomRoute
        path="/resetPassword"
        element={<AuthContainer page="resetPassword" />}
      />
      <NativeDomRoute path="/signUp" element={<AuthContainer page="resetPassword" />} />
      <NativeDomRoute path={`/${urls.DASHBOARD}`} element={<Dashboard />} />

      <NativeDomRoute path="/createDoctor" element={<CreateUser />} />
      <NativeDomRoute path="/createAssistant" element={<CreateUser />} />
      <NativeDomRoute path="/createPatient" element={<CreateUser />} />
      <NativeDomRoute path="/createSystemAdmin" element={<CreateUser />} />
      <NativeDomRoute path="/createSalesForce" element={<CreateUser />} />
      <NativeDomRoute path="/createBackOffice" element={<CreateUser />} />
      <NativeDomRoute path="/profile" element={<Profile />} />
      <NativeDomRoute path="/manageAppointment" element={<ManageAppointment />} />
      <NativeDomRoute path="/prescription" element={<Prescription />} />
      <NativeDomRoute path="/schedulePatient" element={<SchedulePatient />} />
      <NativeDomRoute path="/followUps" element={<FollowUps />} />
      <NativeDomRoute path="/manageAssistant" element={<ManageAssistant />} />
      <NativeDomRoute path="/managePatient" element={<ManagePatient />} />
      <NativeDomRoute path="/viewPrescription" element={<ViewPrescriptionDetails />} />
      <NativeDomRoute path="/baseChemicalMapping" element={<BaseChemicalMapping />} />
      <NativeDomRoute
        path="/chemicalCompositionMapping"
        element={<ChemicalCompositionMapping />}
      />
      <NativeDomRoute path="/chemicalCompositionMappingDetail" element={<ChemicalCompositionMappingDetail/>} />

      <NativeDomRoute path="/masterDataManagement" element={<MasterDataManagement />} />
      <NativeDomRoute path="/verifyUser" element={<Verifications />} />
      <NativeDomRoute path="/settings" element={<Settings />} />
      <NativeDomRoute
        path="/PrescriptionPreview"
        element={<ViewPrescriptionDetails />}
      />
      <NativeDomRoute path="/assistantRequest" element={<AssistantRequest />} />
      <NativeDomRoute path="/manageUser" element={<UserManagement />} /> */}
    </NativeDomRoutes>
  );
}
