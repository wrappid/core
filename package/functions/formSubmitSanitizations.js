import { FORM_IDS } from "../components/inputs/forms/coreFormConstants";
import { communicationTypes, __EntityStatus } from "../config/constants";

function San_URL_ADD_PATH_PARAM_ID(formData, apiMeta/* , state */) {
  return {
    endpoint: apiMeta.endpoint + "/" + formData?.id,
    values  : formData,
  };
}

function SanAddEmailOrPhone(formData, apiMeta, state) {
  formData["emailOrPhone"] = state?.auth?.navData?.emailOrPhone;
  return { values: formData };
}

function SanAddEmailOrPhoneRemoveConfirmPassword(
  formData,
  apiMeta,
  state
) {
  formData["emailOrPhone"] = state?.auth?.navData?.emailOrPhone;
  delete formData.confirmPassword;
  return { values: formData };
}

function SanBasicEditUrlChange(formData, apiMeta, state/* , others */) {
  if (formData.gender) {
    formData.gender = formData.gender.id;
  }
  if (formData.departmentId) {
    formData.departmentId = formData.departmentId.id;
  }
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

function SanClinicAddUrlChange(formData, apiMeta, state/* , others */) {
  formData["addressTypeId"] = state?.common?.addressTypes?.find(
    (addrType) => addrType.type.toLowerCase() === "clinic"
  )?.id;
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

function SanClinicEditUrlChange(formData, apiMeta, state, others) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", others.editing),
    values  : formData,
  };
}

function SanClinicDeleteUrlChange(formData, apiMeta, state, others) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", others.deleting),
    values  : formData,
  };
}

function SanClinicReadUrlChange(formData, apiMeta, state/* , others */) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

function SanProfileClinicRead(data) {
  return data?.rows?.map((eachRowItem) => {
    return {
      addLine1  : eachRowItem?.addLine1,
      addLine2  : eachRowItem?.addLine2,
      city      : eachRowItem?.city,
      clinicLogo: eachRowItem?.Clinic?.photoUrl,
      country   : eachRowItem?.country,
      district  : eachRowItem?.district,
      fullName  : eachRowItem?.fullName,
      id        : eachRowItem?.id,
      landmark  : eachRowItem?.landmark,
      phone     : eachRowItem?.phone,
      pin       : eachRowItem?.pin,
      state     : eachRowItem?.state,
    };
  });
}

function SanCoreFormCancelFormId(formData, apiMeta, state, others) {
  return {
    endpoint: "",
    values  : {
      formArrayId: others?.editForm[others.formId]?.formArrayId,
      formId     : others.formId,
    },
  };
}

//PROFILE EDUCATION SANITIZATION FUNCTIONS
function SanEducationAddUrlChange(formData, apiMeta, state/* , others */) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

function SanEducationEditUrlChange(formData, apiMeta, state, others) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", others.editing),
    values  : formData,
  };
}

function SanEducationReadUrlChange(formData, apiMeta, state/* , others */) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

function SanProfileEducationRead(data) {
  return data?.rows?.map((eachRowItem) => {
    return {
      board    : eachRowItem?.board,
      degree   : eachRowItem?.degree,
      endDate  : eachRowItem?.endDate,
      field    : eachRowItem?.field,
      id       : eachRowItem?.id,
      isCurrent: eachRowItem?.endDate ? false : true,
      location : eachRowItem?.location,
      school   : eachRowItem?.school,
      startDate: eachRowItem?.startDate,
    };
  });
}

//PROFILE EXP SANITIZATION FUNCTIONS
function SanExperienceAddUrlChange(formData, apiMeta, state/* , others */) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

function SanExperienceEditUrlChange(formData, apiMeta, state, others) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", others.editing),
    values  : formData,
  };
}

function SanExperienceReadUrlChange(formData, apiMeta, state/* , others */) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

function SanProfileBasicRead(data) {
  return {
    bio      : data?.data.extraInfo ? data?.data.extraInfo.bio : "",
    dob      : data?.data.dob ? data?.data.dob : "",
    firstName: data?.data.firstName ? data.data.firstName : "",
    gender   : data?.data.gender
      ? { id: data?.data.gender, label: data?.data.gender }
      : "",
    lastName  : data?.data.lastName ? data.data.lastName : "",
    middleName: data?.data.middleName ? data.data.middleName : "",
    photo     : data?.data.photoUrl ? data?.data.photoUrl : "",
  };
}

function SanProfileRegistrationRead(data, otherData) {
  if (data && data.departmentId) {
    let dept = otherData?.AllDepartments?.find(
      (data) => data.id === data.departmentId
    );

    return {
      departmentId: dept
        ? { id: dept.id, label: dept.name }
        : { id: "", label: "" },
      regDate             : data.regDate ? data.regDate : "",
      regNo               : data.regNo ? data.regNo : "",
      registrationDocument: data.registrationDocument,
    };
  } else {
    return { departmentId: { id: "", label: "" }, regDate: "", regNo: "" };
  }
}

function SanRegistrationReadUrlChange(formData, apiMeta, state/* , others */) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: { AllDepartments: state.common.departments },
    values   : formData,
  };
}

function SanProfileExperienceRead(data) {
  return data?.rows?.map((eachRowItem) => {
    return {
      designation : eachRowItem?.designation,
      endDate     : eachRowItem?.endDate,
      id          : eachRowItem?.id,
      isCurrent   : eachRowItem?.endDate ? false : true,
      location    : eachRowItem?.location,
      organization: eachRowItem?.organization,
      startDate   : eachRowItem?.startDate,
    };
  });
}

const formToFieldMap = {
  prescriptionComplaints: { field: "Complaints" },
  prescriptionDiagnosis : { field: "Diagnoses" },
  prescriptionFollowups : { field: "Followups" },
  prescriptionGuidelines: { field: "Guidelines" },
  prescriptionHistory   : { field: "Histories" },
  prescriptionProcedures: { field: "Procedures" },
  prescriptionRefferedTo: { field: "Reffers" },
};

function SanPrescription(formData, apiMeta, state, others) {
  let prescriptionInStore = state.prescription?.prescription;
  let data = {};
  const formId = others?.formId;

  if (prescriptionInStore?.id) {
    data["id"] = prescriptionInStore.id;
  }

  data["doctorId"] = state?.profile?.basic?.id;
  data["patientId"] = state?.prescription?.navData?.Person?.id;
  data["clinicId"] = state?.prescription?.clinic?.Clinic?.id;

  data["appointmentId"] = state.prescription?.navData?.appointment?.id;
  data["languageId"] = state.prescription?.language?.id;

  if (formToFieldMap[formId]) {
    data = {
      ...data,
      [formToFieldMap[formId]?.field]:
        prescriptionInStore[formToFieldMap[formId]?.field] &&
        prescriptionInStore[formToFieldMap[formId]?.field][0] &&
        prescriptionInStore[formToFieldMap[formId]?.field][0].id
          ? {
            id: prescriptionInStore[formToFieldMap[formId]?.field][0].id,
            ...formData,
          }
          : formData,
    };
  } else if (formId === FORM_IDS.__PRESCRIPTION_VITALS) {
    let vitalIds = Object.keys(formData);
    let finalData = [];

    for (let i = 0; i < vitalIds.length; i++) {
      if (formData[vitalIds[i]])
        finalData.push({
          masterDataId: vitalIds[i],
          value       : formData[vitalIds[i]],
        });
    }
    data = {
      ...data,
      PrescriptionVitals: finalData,
    };
  } else if (formId === FORM_IDS.__PRESCRIPTION_MEDICINE) {
    let finalData = [];

    for (let i = 0; i < formData.length; i++) {
      let med = formData[i];
      let obj = {};

      if (
        prescriptionInStore?.AdvicedMedicines &&
        prescriptionInStore.AdvicedMedicines[i]
      ) {
        obj["id"] = prescriptionInStore.AdvicedMedicines[i].id;
      }
      obj["medicineId"] = med?.name?.value;
      obj["formulation"] = med?.formulation?.value;
      obj["quantity"] = med?.quantity?.value;
      obj["frequency"] = med?.frequency?.value;
      obj["meal"] = med?.meal?.value;
      obj["durationCount"] = med?.durationCount?.value;
      obj["durationType"] = med?.durationType?.value;
      obj["notes"] = med?.notes;
      finalData.push(obj);
    }
    data = {
      ...data,
      AdvicedMedicines: finalData,
    };
  } else if (formId === FORM_IDS.__PRESCRIPTION_GENERATE) {
    data = {
      ...data,
      isCompleted: true,
    };
  } else {
    // eslint-disable-next-line no-console
    console.error("NO SANTIZATION WRITTER");
  }

  return {
    endpoint: apiMeta.endpoint,
    values  : data,
  };
}

//settings
function SanContactEmailsCreate(formData, apiMeta/* , state, others */) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.MAIL },
  };
}

function SanContactsRead(data) {
  return data?.rows
    ?.filter((data) => data.isActive)
    .map((eachData) => {
      return {
        data    : eachData?.data,
        id      : eachData?.id,
        verified: eachData?.verified,
      };
    });
}

function SanContactsReadUrlChange(formData, apiMeta, state/* , others */) {
  return {
    endpoint : apiMeta.endpoint + "&personId=" + state.profile.basic.id,
    reduxData: apiMeta.reduxData,
    values   : apiMeta.values,
  };
}
function SanContactPhonesCreate(formData, apiMeta/* , state, others */) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.SMS },
  };
}

function SanContactWapCreate(formData, apiMeta/* , state, others */) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.WHATSAPP },
  };
}

function SanChangePrimaryContact(formData, apiMeta/* , state, others */) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data.data, id: formData.data.id },
  };
}

function SanReadPrimaryPhone(data) {
  return {
    data    : data.phone,
    verified: data.phoneVerified,
  };
}

function SanReadPrimaryEmail(data) {
  return {
    data    : data.email,
    verified: data.emailVerified,
  };
}

function SanPatientCreate(formData, apiMeta/* , state, others */) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { ...formData, gender: formData?.gender?.label },
  };
}

function SanPatientRelativeCreate(formData, apiMeta, state/* , others */) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : {
      ...formData,
      gender  : formData?.gender?.label,
      personId: state?.manageUser?.currentPerson,
    },
  };
}

function SanDoctorCreate(formData, apiMeta/* , state, others */) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : {
      ...formData,
      gender: formData?.gender?.label,
    },
  };
}

function SanRxRexharge(formData, apiMeta, state/* , others */) {
  let amountWithTax =
    formData.rxPackages +
    formData.rxPackages *
      state.mdm.settingMeta.find((eachMeta) => eachMeta.name === "rxCacheCharge")?.value?.gst;

  return {
    endpoint : apiMeta.endpoint.replace(":id", state?.auth?.uid),
    reduxData: apiMeta.reduxData,
    values   : {
      amount: amountWithTax * 100,
      token:
        formData.rxPackages *
        state.mdm.settingMeta.find((eachMeta) => eachMeta.name === "rxTokenRatio")?.value
          ?.ratio,
    },
  };
}

function SanCreateAppointment(formData, apiMeta, state/* , others */) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : {
      ...formData,
      clinicId:
        Number(formData?.clinicId?.Clinic?.id) === 0
          ? null
          : Number(formData?.clinicId?.Clinic?.id),
      doctorId : state?.profile?.basic?.id,
      patientId: state?.prescription?.navData?.Person?.id,
    },
  };
}

function SanEditAppointment(form, apiMeta, state/* , others */) {
  let formData = { ...form };
  const endpoint = apiMeta.endpoint.replace(":id", form?.id);

  return {
    endpoint : endpoint,
    reduxData: apiMeta.reduxData,
    values   : {
      clinicId:
        Number(formData?.clinicId?.Clinic?.id) === 0
          ? null
          : Number(formData?.clinicId?.Clinic?.id),
      date     : formData.date,
      doctorId : state?.profile?.basic?.id,
      endTime  : formData.endTime,
      patientId: formData["Patient.id"],
      startTime: formData.startTime,
    },
  };
}

function SanStringValueAdd(formData, apiMeta, state/* , others */) {
  return {
    endpoint: apiMeta.endpoint,
    values  : {
      ...formData,
      key  : state?.language?.languageTableData?.key,
      table: state?.language?.languageTable?.id,
    },
  };
}

function SanStringValueEdit(formData, apiMeta, state, others) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", others?.editing),
    values  : {
      ...formData,
      key  : state?.language?.languageTableData?.key,
      table: state?.language?.languageTable?.id,
    },
  };
}

function SanChemDeptReadMap(data) {
  let temp = data?.rows?.map((eachRowItem) => {
    return {
      groupHead: eachRowItem.parentId === null ? true : false,
      hasEntry:
        eachRowItem?.ChemicalDepartments && eachRowItem?.ChemicalDepartments?.length > 0
          ? true
          : false,
      id      : eachRowItem?.id,
      name    : eachRowItem?.name,
      parentId: eachRowItem?.parentId,
      priority:
        eachRowItem?.ChemicalDepartments && eachRowItem?.ChemicalDepartments?.length > 0
          ? eachRowItem?.ChemicalDepartments[0]?.priority
          : 1,
    };
  });

  return { chemDeptMap: nLevelGroup(temp, null) };
}

function SanChemDeptMap(formData, apiMeta, state/* , others */) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.mdm?.baseChemical?.id),
    values  : nLevelFlat(formData, { chemDeptMap: nLevelFlat(formData.chemDeptMap, []) }),
  };
}

/**
 * EDIt delete fucntions
 */

function DefaultLangEditDel(data) {
  return data.locale !== 1;
}

/**
 * ROle permission
 */

function nLevelGroup(data, parentId) {
  let finalData = data
    .filter((eachData) => eachData.parentId == parentId)
    .map((eachFilterData) => {
      return {
        ...eachFilterData,
        __children: nLevelGroup(data, eachFilterData.id),
      };
    });

  return finalData;
}

function nLevelFlat(data, finalData) {
  for (let i = 0; i < data.length; i++) {
    let obj = { ...data[i] };

    delete obj.__children;
    finalData.push(obj);
    finalData = nLevelFlat(data[i].__children, finalData);
  }
  return finalData;
}

function SanRolePermissionReadMap(data, otherData) {
  let roleId = otherData?.reduxData?.query?.roleId;

  let temp = data?.rows?.map((eachRowItem) => {
    return {
      groupHead: eachRowItem.parentId === null ? true : false,
      hasEntry:
        eachRowItem?.RolePermissions &&
        eachRowItem?.RolePermissions?.length > 0 &&
        eachRowItem.RolePermissions.find(
          (eachRolePermission) => eachRolePermission.roleId === roleId && eachRolePermission._status === __EntityStatus.ACTIVE
        )
          ? true
          : false,
      id      : eachRowItem?.id,
      name    : eachRowItem?.label,
      parentId: eachRowItem?.parentId,
      priority:
        eachRowItem?.RolePermissions &&
        eachRowItem?.RolePermissions?.length > 0 &&
        eachRowItem.RolePermissions.find(
          (eachRolePermission) => eachRolePermission.roleId === roleId && eachRolePermission._status === __EntityStatus.ACTIVE
        )
          ? eachRowItem.RolePermissions.find(
            (eachRolePermission) =>
              eachRolePermission.roleId === roleId && eachRolePermission._status === __EntityStatus.ACTIVE
          )?.priority
          : 1,
    };
  });

  return { rolePermissionMap: nLevelGroup(temp, null) };
}

function SanRolePermission(formData, apiMeta, state/* , others */) {
  return {
    endpoint: apiMeta.endpoint.replace(
      ":id",
      state?.mdm?.rolePermissionRole?.id
    ),
    values: nLevelFlat(formData, { rolePermissionMap: nLevelFlat(formData.rolePermissionMap, []) }),
  };
}

function SanCreateCommunicationTemplate(
  formData,
  apiMeta/* ,
  state,
  others */
) {
  return {
    endpoint: apiMeta.endpoint,
    values  : {
      ...formData,
      _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
    },
  };
}

function SanEditCommunicationTemplate(formData, apiMeta/* , state, others */) {
  return {
    endpoint: apiMeta?.endpoint.replace(":id", apiMeta?.values?.id),
    values  : {
      ...formData,
      _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
    },
  };
}

function SanTestCommunicationTemplate(formData, apiMeta/* , state, others */) {
  const obj = {
    endpoint: apiMeta?.endpoint.replace(":name", formData.name),
    values  : { ...formData },
  };

  return obj;
}

export default {
  DefaultLangEditDel,
  SanAddEmailOrPhone,
  SanAddEmailOrPhoneRemoveConfirmPassword,
  SanBasicEditUrlChange,
  SanChangePrimaryContact,
  SanChemDeptMap,
  SanChemDeptReadMap,
  SanClinicAddUrlChange,
  SanClinicDeleteUrlChange,
  SanClinicEditUrlChange,
  SanClinicReadUrlChange,
  SanContactEmailsCreate,
  SanContactPhonesCreate,
  SanContactWapCreate,
  SanContactsRead,
  SanContactsReadUrlChange,
  SanCoreFormCancelFormId,
  SanCreateAppointment,
  SanCreateCommunicationTemplate,
  SanDoctorCreate,
  SanEditAppointment,
  SanEditCommunicationTemplate,
  SanEducationAddUrlChange,
  SanEducationEditUrlChange,
  SanEducationReadUrlChange,
  SanExperienceAddUrlChange,
  SanExperienceEditUrlChange,
  SanExperienceReadUrlChange,
  SanPatientCreate,
  SanPatientRelativeCreate,
  SanPrescription,
  SanProfileBasicRead,
  SanProfileClinicRead,
  SanProfileEducationRead,
  SanProfileExperienceRead,
  SanProfileRegistrationRead,
  SanReadPrimaryEmail,
  SanReadPrimaryPhone,
  SanRegistrationReadUrlChange,
  SanRolePermission,
  SanRolePermissionReadMap,
  SanRxRexharge,
  SanStringValueAdd,
  SanStringValueEdit,
  SanTestCommunicationTemplate,
  San_URL_ADD_PATH_PARAM_ID
};