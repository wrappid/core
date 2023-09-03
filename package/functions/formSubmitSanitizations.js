import { FORM_IDS } from "../components/forms/coreFormConstants";
import { communicationTypes, __EntityStatus } from "../config/constants";

function San_URL_ADD_PATH_PARAM_ID(formData, apiMeta, state) {
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

function SanBasicEditUrlChange(formData, apiMeta, state, others) {
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

function SanClinicAddUrlChange(formData, apiMeta, state, others) {
  formData["addressTypeId"] = state?.common?.addressTypes?.find(
    (a) => a.type.toLowerCase() === "clinic"
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

function SanClinicReadUrlChange(formData, apiMeta, state, others) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

function SanProfileClinicRead(data) {
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
function SanEducationAddUrlChange(formData, apiMeta, state, others) {
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

function SanEducationReadUrlChange(formData, apiMeta, state, others) {
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

function SanProfileEducationRead(data) {
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
function SanExperienceAddUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

function SanExperienceEditUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    endpoint: apiMeta.endpoint.replace(":id", others.editing),
    values  : formData,
  };
}

function SanExperienceReadUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
    values  : formData,
  };
}

function SanProfileBasicRead(data) {
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

function SanProfileRegistrationRead(data, otherData) {
  console.log("Registration SANITING", otherData?.AllDepartments);
  if (data && data.departmentId) {
    let dept = otherData?.AllDepartments?.find(
      (d) => d.id === data.departmentId
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

function SanRegistrationReadUrlChange(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: { AllDepartments: state.common.departments },
    values   : formData,
  };
}

function SanProfileExperienceRead(data) {
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

function SanPrescription(formData, apiMeta, state, others) {
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
function SanContactEmailsCreate(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.MAIL },
  };
}

function SanContactsRead(data) {
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

function SanContactsReadUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    endpoint : apiMeta.endpoint + "&personId=" + state.profile.basic.id,
    reduxData: apiMeta.reduxData,
    values   : apiMeta.values,
  };
}
function SanContactPhonesCreate(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.SMS },
  };
}

function SanContactWapCreate(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data, type: communicationTypes.WHATSAPP },
  };
}

function SanChangePrimaryContact(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { data: formData.data.data, id: formData.data.id },
  };
}

function SanReadPrimaryPhone(data) {
  // console.log("SANITING", apiMeta, others);
  return {
    data    : data.phone,
    verified: data.phoneVerified,
  };
}

function SanReadPrimaryEmail(data) {
  // console.log("SANITING", apiMeta, others);
  return {
    data    : data.email,
    verified: data.emailVerified,
  };
}

function SanPatientCreate(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : { ...formData, gender: formData?.gender?.label },
  };
}

function SanPatientRelativeCreate(formData, apiMeta, state, others) {
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

function SanDoctorCreate(formData, apiMeta, state, others) {
  return {
    endpoint : apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
    values   : {
      ...formData,
      gender: formData?.gender?.label,
    },
  };
}

function SanRxRexharge(formData, apiMeta, state, others) {
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

function SanCreateAppointment(formData, apiMeta, state, others) {
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

function SanEditAppointment(form, apiMeta, state, others) {
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

function SanStringValueAdd(formData, apiMeta, state, others) {
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

function SanChemDeptMap(formData, apiMeta, state, others) {
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

function SanRolePermissionReadMap(data, otherData) {
  let roleId = otherData?.reduxData?.query?.roleId;

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

function SanRolePermission(formData, apiMeta, state, others) {
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

function SanEditCommunicationTemplate(formData, apiMeta, state, others) {
  return {
    endpoint: apiMeta?.endpoint.replace(":id", apiMeta?.values?.id),
    values  : {
      ...formData,
      _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
    },
  };
}

function SanTestCommunicationTemplate(formData, apiMeta, state, others) {
  const obj = {
    endpoint: apiMeta?.endpoint.replace(":name", formData.name),
    values  : { ...formData },
  };

  return obj;
}

export default {
  SanAddEmailOrPhone,
  SanAddEmailOrPhoneRemoveConfirmPassword,
  SanBasicEditUrlChange,
  SanChangePrimaryContact,
  SanClinicAddUrlChange,
  SanClinicDeleteUrlChange,
  SanClinicEditUrlChange,
  SanClinicReadUrlChange,
  SanChemDeptReadMap,
  SanContactEmailsCreate,
  DefaultLangEditDel,
  SanContactPhonesCreate,
  SanChemDeptMap,
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
  San_URL_ADD_PATH_PARAM_ID,
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
  SanTestCommunicationTemplate
};