import { queryBuilder } from "./helper";
import { FORM_IDS } from "../components/forms/coreFormConstants";
import { communicationTypes, __EntityStatus } from "../config/constants";

export function San_URL_ADD_PATH_PARAM_ID(formData, apiMeta) {
  return {
    endpoint: apiMeta.endpoint + "/" + formData?.id,
    values  : formData,
  };
}

export function SanAddEmailOrPhone(formData, apiMeta, state) {
  formData["emailOrPhone"] = state?.auth?.navData?.emailOrPhone;
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
  return { values: newFormData };
}

export function SanBasicEditUrlChange(formData, apiMeta, state) {
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

export function SanClinicAddUrlChange(formData, apiMeta, state) {
  formData["addressTypeId"] = state?.common?.addressTypes?.find(
    (addressType) => addressType?.type?.toLowerCase() === "clinic"
  )?.id;
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

export function SanClinicEditUrlChange(formData, apiMeta, state, others) {
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
  return {
    endpoint: apiMeta.endpoint.replace(":id", others.deleting),
    values  : formData,
  };
}

export function SanClinicReadUrlChange(formData, apiMeta, state) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

export function SanProfileClinicRead(data) {
  return data?.rows?.map((row) => {
    return {
      addLine1  : row?.addLine1,
      addLine2  : row?.addLine2,
      city      : row?.city,
      clinicLogo: row?.Clinic?.photoUrl,
      country   : row?.country,
      district  : row?.district,
      fullName  : row?.fullName,
      id        : row?.id,
      landmark  : row?.landmark,
      phone     : row?.phone,
      pin       : row?.pin,
      state     : row?.state,
    };
  });
}

export function SanCoreFormCancelFormId(formData, apiMeta, state, others) {
  return {
    endpoint: "",
    values  : {
      formArrayId: others?.editForm[others.formId]?.formArrayId,
      formId     : others.formId,
    },
  };
}

//PROFILE EDUCATION SANITIZATION FUNCTIONS
export function SanEducationAddUrlChange(formData, apiMeta, state) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

export function SanEducationEditUrlChange(formData, apiMeta, state, others) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", others.editing),
    values  : formData,
  };
}

export function SanEducationReadUrlChange(formData, apiMeta, state) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

export function SanProfileEducationRead(data) {
  return data?.rows?.map((row) => {
    return {
      board    : row?.board,
      degree   : row?.degree,
      endDate  : row?.endDate,
      field    : row?.field,
      id       : row?.id,
      isCurrent: row?.endDate ? false : true,
      location : row?.location,
      school   : row?.school,
      startDate: row?.startDate,
    };
  });
}

//PROFILE EXP SANITIZATION FUNCTIONS
export function SanExperienceAddUrlChange(formData, apiMeta, state) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

export function SanExperienceEditUrlChange(formData, apiMeta, state, others) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", others.editing),
    values  : formData,
  };
}

export function SanExperienceReadUrlChange(formData, apiMeta, state) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

export function SanProfileBasicRead(data) {
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
  if (data && data.departmentId) {
    let dept = otherData?.AllDepartments?.find(
      (dep) => dep.id === data.departmentId
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

export function SanRegistrationReadUrlChange(formData, apiMeta, state) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: { AllDepartments: state.common.departments },
    values   : formData,
  };
}

export function SanProfileExperienceRead(data) {
  return data?.rows?.map((row) => {
    return {
      designation : row?.designation,
      endDate     : row?.endDate,
      id          : row?.id,
      isCurrent   : row?.endDate ? false : true,
      location    : row?.location,
      organization: row?.organization,
      startDate   : row?.startDate,
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
      let newOb = {};

      if (
        prescriptionInStore?.AdvicedMedicines &&
        prescriptionInStore.AdvicedMedicines[i]
      ) {
        newOb["id"] = prescriptionInStore.AdvicedMedicines[i].id;
      }
      newOb["medicineId"] = med?.name?.value;
      newOb["formulation"] = med?.formulation?.value;
      newOb["quantity"] = med?.quantity?.value;
      newOb["frequency"] = med?.frequency?.value;
      newOb["meal"] = med?.meal?.value;
      newOb["durationCount"] = med?.durationCount?.value;
      newOb["durationType"] = med?.durationType?.value;
      newOb["notes"] = med?.notes;
      finalData.push(newOb);
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
export function SanContactEmailsCreate(formData, apiMeta) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.MAIL },
  };
}

export function SanContactsRead(data) {
  return data?.rows
    ?.filter((row) => row.isActive)
    .map((master) => {
      return {
        data    : master.data,
        id      : master.id,
        verified: master.verified,
      };
    });
}

export function SanContactsReadUrlChange(formData, apiMeta, state) {
  let endUrl = apiMeta.endpoint?.includes("?") ? apiMeta.endpoint : queryBuilder(apiMeta.endpoint, { _defaultFilter: encodeURIComponent(JSON.stringify({ personId: state.profile.basic.id })) });

  return {
    endpoint : endUrl,
    reduxData: apiMeta.reduxData,
    values   : apiMeta.values,
  };
}
export function SanContactPhonesCreate(formData, apiMeta) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.SMS },
  };
}

export function SanContactWapCreate(formData, apiMeta) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.WHATSAPP },
  };
}

export function SanChangePrimaryContact(formData, apiMeta) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data.data, id: formData.data.id },
  };
}

export function SanReadPrimaryPhone(data) {
  return {
    data    : data.phone,
    verified: data.phoneVerified,
  };
}

export function SanReadPrimaryEmail(data) {
  return {
    data    : data.email,
    verified: data.emailVerified,
  };
}

export function SanPatientCreate(formData, apiMeta) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { ...formData, gender: formData?.gender?.label },
  };
}

export function SanPatientRelativeCreate(formData, apiMeta, state) {
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

export function SanDoctorCreate(formData, apiMeta) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : {
      ...formData,
      gender: formData?.gender?.label,
    },
  };
}

export function SanRxRexharge(formData, apiMeta, state) {
  // eslint-disable-next-line no-console
  console.error("formData", formData);
  // eslint-disable-next-line no-console
  console.error("endpoint", apiMeta.endpoint.replace(":id", state?.auth?.uid));
  // eslint-disable-next-line no-console
  console.error("reduxData", apiMeta.reduxData);
  // eslint-disable-next-line no-console
  console.error("state", state);
  let amountWithTax =
    formData.rxPackages +
    formData.rxPackages *
      state.mdm.settingMeta.find((settings) => settings.name === "rxCacheCharge")?.value?.gst;

  return {
    endpoint : apiMeta.endpoint.replace(":id", state?.auth?.uid),
    reduxData: apiMeta.reduxData,
    values   : {
      amount: amountWithTax * 100,
      token:
        formData.rxPackages *
        state.mdm.settingMeta.find((settings) => settings.name === "rxTokenRatio")?.value
          ?.ratio,
    },
  };
}

export function SanCreateAppointment(formData, apiMeta, state) {
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

export function SanEditAppointment(form, apiMeta, state) {
  let formData = { ...form };
  const endpoint = apiMeta.endpoint.replace(":id", form?.id);

  // eslint-disable-next-line no-console
  console.error("form", form);
  // eslint-disable-next-line no-console
  console.error("endpoint", endpoint);
  // eslint-disable-next-line no-console
  console.error("reduxData", apiMeta.reduxData);
  // eslint-disable-next-line no-console
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

export function SanStringValueAdd(formData, apiMeta, state) {
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
  let temp = data?.rows?.map((master) => {
    return {
      groupHead: master.parentId === null ? true : false,
      hasEntry:
        master?.ChemicalDepartments && master?.ChemicalDepartments?.length > 0
          ? true
          : false,
      id      : master?.id,
      name    : master?.name,
      parentId: master?.parentId,
      priority:
        master?.ChemicalDepartments && master?.ChemicalDepartments?.length > 0
          ? master?.ChemicalDepartments[0]?.priority
          : 1,
    };
  });

  return { chemDeptMap: nLevelGroup(temp, null) };
}

export function SanChemDeptMap(formData, apiMeta, state) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.mdm?.baseChemical?.id),
    values  : nLevelFlat(formData, { chemDeptMap: nLevelFlat(formData.chemDeptMap, []) }),
  };
}

/**
 * EDIt delete fucntions
 */

export function DefaultLangEditDel(data) {
  return data.locale !== 1;
}

/**
 * ROle permission
 */

function nLevelGroup(data, parentId) {
  let finalData = data
    .filter((datum) => datum.parentId == parentId)
    .map((header) => {
      return {
        ...header,
        __children: nLevelGroup(data, header.id),
      };
    });

  return finalData;
}

function nLevelFlat(data, finalData) {
  for (let i = 0; i < data.length; i++) {
    let newOb = { ...data[i] };

    delete newOb.__children;
    finalData.push(newOb);
    finalData = nLevelFlat(data[i].__children, finalData);
  }
  return finalData;
}

export function SanRolePermissionReadMap(data, otherData) {
  let roleId = otherData?.reduxData?.query?.roleId;

  let temp = data?.rows?.map((master) => {
    return {
      groupHead: master.parentId === null ? true : false,
      hasEntry:
        master?.RolePermissions &&
        master?.RolePermissions?.length > 0 &&
        master.RolePermissions.find(
          (rolePermission) => rolePermission.roleId === roleId && rolePermission._status === __EntityStatus.ACTIVE
        )
          ? true
          : false,
      id      : master?.id,
      name    : master?.label,
      parentId: master?.parentId,
      priority:
        master?.RolePermissions &&
        master?.RolePermissions?.length > 0 &&
        master.RolePermissions.find(
          (rolePermission) => rolePermission.roleId === roleId && rolePermission._status === __EntityStatus.ACTIVE
        )
          ? master.RolePermissions.find(
            (rolePermission) =>
              rolePermission.roleId === roleId && rolePermission._status === __EntityStatus.ACTIVE
          )?.priority
          : 1,
    };
  });

  return { rolePermissionMap: nLevelGroup(temp, null) };
}

export function SanRolePermission(formData, apiMeta, state) {
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
  apiMeta
) {
  return {
    endpoint: apiMeta.endpoint,
    values  : {
      ...formData,
      _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
    },
  };
}

export function SanEditCommunicationTemplate(formData, apiMeta) {
  return {
    endpoint: apiMeta?.endpoint.replace(":id", apiMeta?.values?.id),
    values  : {
      ...formData,
      _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
    },
  };
}

export function SanTestCommunicationTemplate(formData, apiMeta) {
  const obj = {
    endpoint: apiMeta?.endpoint.replace(":name", formData.name),
    values  : { ...formData },
  };

  return obj;
}

export function SanStatusUpdate(formData, apiMeta) {
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
  const heightId = allElements?.find(element => element.name === "height")?.id;
  const weightId = allElements?.find(element => element.name === "weight")?.id;

  if(heightId 
    && weightId 
    && formik?.values 
    && formik?.values[heightId] 
    && formik?.values[weightId] 
  ){
    return { calculatedValue: Number(formik?.values[heightId] / (formik?.values[weightId] * formik?.values[weightId] )).toFixed(3) };
  }
  else{
    return 0;
  }
}
