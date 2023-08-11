import { queryBuilder } from "./helper";
import { FORM_IDS } from "../components/forms/coreFormConstants";
import { communicationTypes, __EntityStatus } from "../config/constants";

export function San_URL_ADD_PATH_PARAM_ID(formData, apiMeta, state) {
  return {
    endpoint: apiMeta.endpoint + "/" + formData?.id,
    values  : formData,
  };
}

export function SanAddEmailOrPhone(formData, apiMeta, state) {
  formData["emailOrPhone"] = state?.auth?.navData?.emailOrPhone;
  console.log("--SANITIZATION", formData);
  return { values: formData };
}

export function SanAddEmailOrPhoneRemoveConfirmPassword(
  formData,
  apiMeta,
  state
) {
  let newFormData = { ...formData };

  newFormData["emailOrPhone"] = state?.auth?.navData?.emailOrPhone;
  delete newFormData.confirmPassword;
  console.log("--SANITIZATION", newFormData);
  return { values: newFormData };
}

export function SanBasicEditUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
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

export function SanClinicAddUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  formData["addressTypeId"] = state?.common?.addressTypes?.find(
    (a) => a.type.toLowerCase() === "clinic"
  )?.id;
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

export function SanClinicEditUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  for (let key in formData) {
    if (formData[key] === null) {
      delete formData[key];
    }
  }
  return {
    endpoint: apiMeta.endpoint.replace(":id", others.editing),
    values  : formData,
  };
}

export function SanClinicDeleteUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    endpoint: apiMeta.endpoint.replace(":id", others.deleting),
    values  : formData,
  };
}

export function SanClinicReadUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

export function SanProfileClinicRead(data) {
  // console.log("SANITING", apiMeta, others);
  return data?.rows?.map((m) => {
    return {
      addLine1  : m?.addLine1,
      addLine2  : m?.addLine2,
      city      : m?.city,
      clinicLogo: m?.Clinic?.photoUrl,
      country   : m?.country,
      district  : m?.district,
      fullName  : m?.fullName,
      id        : m?.id,
      landmark  : m?.landmark,
      phone     : m?.phone,
      pin       : m?.pin,
      state     : m?.state,
    };
  });
}

export function SanCoreFormCancelFormId(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    endpoint: "",
    values  : {
      formArrayId: others?.editForm[others.formId]?.formArrayId,
      formId     : others.formId,
    },
  };
}

//PROFILE EDUCATION SANITIZATION FUNCTIONS
export function SanEducationAddUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

export function SanEducationEditUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    endpoint: apiMeta.endpoint.replace(":id", others.editing),
    values  : formData,
  };
}

export function SanEducationReadUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

export function SanProfileEducationRead(data) {
  // console.log("SANITING", apiMeta, others);
  return data?.rows?.map((m) => {
    return {
      board    : m?.board,
      degree   : m?.degree,
      endDate  : m?.endDate,
      field    : m?.field,
      id       : m?.id,
      isCurrent: m?.endDate ? false : true,
      location : m?.location,
      school   : m?.school,
      startDate: m?.startDate,
    };
  });
}

//PROFILE EXP SANITIZATION FUNCTIONS
export function SanExperienceAddUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

export function SanExperienceEditUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    endpoint: apiMeta.endpoint.replace(":id", others.editing),
    values  : formData,
  };
}

export function SanExperienceReadUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

export function SanProfileBasicRead(data) {
  // console.log("SANITING", apiMeta, others);
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

export function SanProfileRegistrationRead(data, otherData) {
  console.log("Registration SANITING", otherData?.AllDepartments);
  if (data && data.departmentId) {
    let dept = otherData?.AllDepartments?.find(
      (d) => d.id === data.departmentId
    );

    return {
      degrees     : data.degrees ? data.degrees : "",
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

export function SanRegistrationReadUrlChange(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: { AllDepartments: state.common.departments },
    values   : formData,
  };
}

export function SanProfileExperienceRead(data) {
  // console.log("SANITING", apiMeta, others);
  return data?.rows?.map((m) => {
    return {
      designation : m?.designation,
      endDate     : m?.endDate,
      id          : m?.id,
      isCurrent   : m?.endDate ? false : true,
      location    : m?.location,
      organization: m?.organization,
      startDate   : m?.startDate,
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

export function SanPrescription(formData, apiMeta, state, others) {
  console.log("SANITING", state.prescription);
  let prescriptionInStore = state.prescription?.prescription;
  let data = {};
  const formId = others?.formId;

  if (prescriptionInStore?.id) {
    data["id"] = prescriptionInStore.id;
  }

  data["doctorId"] = state?.profile?.basic?.id;
  data["patientId"] = state?.prescription?.navData?.Person?.id;
  data["clinicId"] = state?.prescription?.clinic?.Clinic?.id;
  data["templateId"] = state?.prescription?.template?.id;

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
    var finalData = [];

    for (var i = 0; i < vitalIds.length; i++) {
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
    var finalData = [];

    for (var i = 0; i < formData.length; i++) {
      let med = formData[i];
      let ob = {};

      if (
        prescriptionInStore?.AdvicedMedicines &&
        prescriptionInStore.AdvicedMedicines[i]
      ) {
        ob["id"] = prescriptionInStore.AdvicedMedicines[i].id;
      }
      ob["medicineId"] = med?.name?.value;
      ob["formulation"] = med?.formulation?.value;
      ob["quantity"] = med?.quantity?.value;
      ob["frequency"] = med?.frequency?.value;
      ob["meal"] = med?.meal?.value;
      ob["durationCount"] = med?.durationCount?.value;
      ob["durationType"] = med?.durationType?.value;
      ob["notes"] = med?.notes;
      finalData.push(ob);
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
    console.error("NO SANTIZATION WRITTER");
  }

  return {
    endpoint: apiMeta.endpoint,
    values  : data,
  };
}

//settings
export function SanContactEmailsCreate(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.MAIL },
  };
}

export function SanContactsRead(data) {
  // console.log("SANITING", apiMeta, others);
  return data?.rows
    ?.filter((d) => d.isActive)
    .map((m) => {
      return {
        data    : m.data,
        id      : m.id,
        verified: m.verified,
      };
    });
}

export function SanContactsReadUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  let endUrl = apiMeta.endpoint?.includes("?") ? apiMeta.endpoint : queryBuilder(apiMeta.endpoint, { _defaultFilter: encodeURIComponent(JSON.stringify({ personId: state.profile.basic.id })) });

  return {
    endpoint : endUrl,
    reduxData: apiMeta.reduxData,
    values   : apiMeta.values,
  };
}
export function SanContactPhonesCreate(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.SMS },
  };
}

export function SanContactWapCreate(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.WHATSAPP },
  };
}

export function SanChangePrimaryContact(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data.data, id: formData.data.id },
  };
}

export function SanReadPrimaryPhone(data) {
  // console.log("SANITING", apiMeta, others);
  return {
    data    : data.phone,
    verified: data.phoneVerified,
  };
}

export function SanReadPrimaryEmail(data) {
  // console.log("SANITING", apiMeta, others);
  return {
    data    : data.email,
    verified: data.emailVerified,
  };
}

export function SanPatientCreate(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { ...formData, gender: formData?.gender?.label },
  };
}

export function SanPatientRelativeCreate(formData, apiMeta, state, others) {
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

export function SanDoctorCreate(formData, apiMeta, state, others) {
  console.error("formData", formData);
  console.error("endpoint", apiMeta.endpoint);
  console.error("reduxData", apiMeta.reduxData);
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : {
      ...formData,
      gender: formData?.gender?.label,
    },
  };
}

export function SanRxRexharge(formData, apiMeta, state, others) {
  console.error("formData", formData);
  console.error("endpoint", apiMeta.endpoint.replace(":id", state?.auth?.uid));
  console.error("reduxData", apiMeta.reduxData);
  console.error("state", state);
  // var amountWithTax = formData.rxPackages + formData.rxPackages * 0.1;
  let amountWithTax =
    formData.rxPackages +
    formData.rxPackages *
      state.mdm.settingMeta.find((f) => f.name === "rxCacheCharge")?.value?.gst;

  return {
    endpoint : apiMeta.endpoint.replace(":id", state?.auth?.uid),
    reduxData: apiMeta.reduxData,
    values   : {
      amount: amountWithTax * 100,
      token:
        formData.rxPackages *
        state.mdm.settingMeta.find((f) => f.name === "rxTokenRatio")?.value
          ?.ratio,
    },
  };
}

export function SanCreateAppointment(formData, apiMeta, state, others) {
  console.log("formData", formData);
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
      patientId: state?.appointment?.patient?.Person?.id,
    },
  };
}

export function SanReadAppointment(data) {
  return {
    ...data,
    clinicId: { fullName: data?.Clinic?.Address?.fullName, id: data?.Clinic?.id, label: data?.Clinic?.Address?.fullName }
  };
}

export function SanEditAppointment(form, apiMeta, state, others) {
  let formData = { ...form };
  const endpoint = apiMeta.endpoint.replace(":id", form?.id);

  console.error("form", form);
  console.error("endpoint", endpoint);
  console.error("reduxData", apiMeta.reduxData);
  console.error("state", state);
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

export function SanStringValueAdd(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    endpoint: apiMeta.endpoint,
    values  : {
      ...formData,
      key  : state?.language?.languageTableData?.key,
      table: state?.language?.languageTable?.id,
    },
  };
}

export function SanStringValueEdit(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    endpoint: apiMeta.endpoint.replace(":id", others?.editing),
    values  : {
      ...formData,
      key  : state?.language?.languageTableData?.key,
      table: state?.language?.languageTable?.id,
    },
  };
}

export function SanChemDeptReadMap(data) {
  // console.log("SANITING", apiMeta, others);
  let temp = data?.rows?.map((m) => {
    return {
      groupHead: m.parentId === null ? true : false,
      hasEntry:
        m?.ChemicalDepartments && m?.ChemicalDepartments?.length > 0
          ? true
          : false,
      id      : m?.id,
      name    : m?.name,
      parentId: m?.parentId,
      priority:
        m?.ChemicalDepartments && m?.ChemicalDepartments?.length > 0
          ? m?.ChemicalDepartments[0]?.priority
          : 1,
    };
  });

  return { chemDeptMap: nLevelGroup(temp, null) };
}

export function SanChemDeptMap(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.mdm?.baseChemical?.id),
    values  : nLevelFlat(formData, { chemDeptMap: nLevelFlat(formData.chemDeptMap, []) }),
  };
}

/**
 * EDIt delete fucntions
 */

export function DefaultLangEditDel(data) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return data.locale !== 1;
}

/**
 * ROle permission
 */

function nLevelGroup(data, parentId) {
  let finalData = data
    .filter((d) => d.parentId == parentId)
    .map((h) => {
      return {
        ...h,
        __children: nLevelGroup(data, h.id),
      };
    });

  return finalData;
}

function nLevelFlat(data, finalData) {
  for (let i = 0; i < data.length; i++) {
    let ob = { ...data[i] };

    delete ob.__children;
    finalData.push(ob);
    finalData = nLevelFlat(data[i].__children, finalData);
  }
  return finalData;
}

export function SanRolePermissionReadMap(data, otherData) {
  // console.log("SANITING", apiMeta, others);
  let roleId = otherData?.reduxData?.query?.roleId;

  console.log("SANITING0", roleId, roleId);

  let temp = data?.rows?.map((m) => {
    return {
      groupHead: m.parentId === null ? true : false,
      hasEntry:
        m?.RolePermissions &&
        m?.RolePermissions?.length > 0 &&
        m.RolePermissions.find(
          (rp) => rp.roleId === roleId && rp._status === __EntityStatus.ACTIVE
        )
          ? true
          : false,
      id      : m?.id,
      name    : m?.label,
      parentId: m?.parentId,
      priority:
        m?.RolePermissions &&
        m?.RolePermissions?.length > 0 &&
        m.RolePermissions.find(
          (rp) => rp.roleId === roleId && rp._status === __EntityStatus.ACTIVE
        )
          ? m.RolePermissions.find(
            (rp) =>
              rp.roleId === roleId && rp._status === __EntityStatus.ACTIVE
          )?.priority
          : 1,
    };
  });

  return { rolePermissionMap: nLevelGroup(temp, null) };
}

export function SanRolePermission(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    endpoint: apiMeta.endpoint.replace(
      ":id",
      state?.mdm?.rolePermissionRole?.id
    ),
    values: nLevelFlat(formData, { rolePermissionMap: nLevelFlat(formData.rolePermissionMap, []) }),
  };
}

export function SanCreateCommunicationTemplate(
  formData,
  apiMeta,
  state,
  others
) {
  return {
    endpoint: apiMeta.endpoint,
    values  : {
      ...formData,
      _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
    },
  };
}

export function SanEditCommunicationTemplate(formData, apiMeta, state, others) {
  return {
    endpoint: apiMeta?.endpoint.replace(":id", apiMeta?.values?.id),
    values  : {
      ...formData,
      _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
    },
  };
}

export function SanTestCommunicationTemplate(formData, apiMeta, state, others) {
  const obj = {
    endpoint: apiMeta?.endpoint.replace(":name", formData.name),
    values  : { ...formData },
  };

  return obj;
}

export function SanStatusUpdate(formData, apiMeta, state, others) {
  const id = formData.id;
  const model = apiMeta?.reduxData?.reduxData?.query?.model;
  const data = { ...formData };

  delete data["id"];
  const obj = {
    endpoint: apiMeta?.endpoint?.replace(":model", model).replace(":id", id),
    values  : formData,
  };

  return obj;
}

export function getBmi(formik, elem, allElements) {
  const heightId = allElements?.find(el => el.name === "height")?.id;
  const weightId = allElements?.find(el => el.name === "weight")?.id;

  if(heightId 
    && weightId 
    && formik?.values 
    && formik?.values[heightId] 
    && formik?.values[weightId] 
  ){
    return Number(formik?.values[heightId] / (formik?.values[weightId] * formik?.values[weightId] )).toFixed(3);
  }
  else{
    return 0;
  }
}
