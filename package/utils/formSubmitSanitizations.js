import { FORM_IDS } from "../components/forms/coreFormConstants";
import { communicationTypes, __EntityStatus } from "../config/constants";

export function San_URL_ADD_PATH_PARAM_ID(formData, apiMeta, state) {
  return {
    values: formData,
    endpoint: apiMeta.endpoint + "/" + formData?.id,
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
  formData["emailOrPhone"] = state?.auth?.navData?.emailOrPhone;
  delete formData.confirmPassword;
  console.log("--SANITIZATION", formData);
  return { values: formData };
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
    values: formData,
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
  };
}

export function SanClinicAddUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  formData["addressTypeId"] = state?.common?.addressTypes?.find(
    (a) => a.type.toLowerCase() === "clinic"
  )?.id;
  return {
    values: formData,
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
  };
}

export function SanClinicEditUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    values: formData,
    endpoint: apiMeta.endpoint.replace(":id", others.editing),
  };
}

export function SanClinicDeleteUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    values: formData,
    endpoint: apiMeta.endpoint.replace(":id", others.deleting),
  };
}

export function SanClinicReadUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    values: formData,
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
  };
}

export function SanProfileClinicRead(data) {
  // console.log("SANITING", apiMeta, others);
  return data?.rows?.map((m) => {
    return {
      id: m?.id,
      clinicLogo: m?.Clinic?.photoUrl,
      fullName: m?.fullName,
      addLine1: m?.addLine1,
      addLine2: m?.addLine2,
      country: m?.country,
      state: m?.state,
      district: m?.district,
      city: m?.city,
      pin: m?.pin,
      landmark: m?.landmark,
      phone: m?.phone,
    };
  });
}

export function SanCoreFormCancelFormId(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    values: {
      formId: others.formId,
      formArrayId: others?.editForm[others.formId]?.formArrayId,
    },
    endpoint: "",
  };
}

//PROFILE EDUCATION SANITIZATION FUNCTIONS
export function SanEducationAddUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    values: formData,
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
  };
}

export function SanEducationEditUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    values: formData,
    endpoint: apiMeta.endpoint.replace(":id", others.editing),
  };
}

export function SanEducationReadUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    values: formData,
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
  };
}

export function SanProfileEducationRead(data) {
  // console.log("SANITING", apiMeta, others);
  return data?.rows?.map((m) => {
    return {
      id: m?.id,
      degree: m?.degree,
      school: m?.school,
      location: m?.location,
      board: m?.board,
      field: m?.field,
      startDate: m?.startDate,
      endDate: m?.endDate,
      isCurrent: m?.endDate ? false : true,
    };
  });
}

//PROFILE EXP SANITIZATION FUNCTIONS
export function SanExperienceAddUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    values: formData,
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
  };
}

export function SanExperienceEditUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    values: formData,
    endpoint: apiMeta.endpoint.replace(":id", others.editing),
  };
}

export function SanExperienceReadUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    values: formData,
    endpoint: apiMeta.endpoint.replace(":id", state?.profile?.basic?.id),
  };
}

export function SanProfileBasicRead(data) {
  // console.log("SANITING", apiMeta, others);
  return {
    firstName: data?.data.firstName ? data.data.firstName : "",
    middleName: data?.data.middleName ? data.data.middleName : "",
    lastName: data?.data.lastName ? data.data.lastName : "",
    gender: data?.data.gender
      ? { label: data?.data.gender, id: data?.data.gender }
      : "",
    dob: data?.data.dob ? data?.data.dob : "",
    photo: data?.data.photoUrl ? data?.data.photoUrl : "",
    bio: data?.data.extraInfo ? data?.data.extraInfo.bio : "",
  };
}

export function SanProfileRegistrationRead(data, otherData) {
  console.log("Registration SANITING", otherData?.AllDepartments);
  if (data && data.departmentId) {
    var dept = otherData?.AllDepartments?.find(
      (d) => d.id === data.departmentId
    );
    return {
      regNo: data.regNo ? data.regNo : "",
      regDate: data.regDate ? data.regDate : "",
      departmentId: dept
        ? { label: dept.name, id: dept.id }
        : { label: "", id: "" },
      registrationDocument: data.registrationDocument,
    };
  } else {
    return { regNo: "", regDate: "", departmentId: { label: "", id: "" } };
  }
}

export function SanRegistrationReadUrlChange(formData, apiMeta, state, others) {
  return {
    values: formData,
    endpoint: apiMeta.endpoint,
    reduxData: { AllDepartments: state.common.departments },
  };
}

export function SanProfileExperienceRead(data) {
  // console.log("SANITING", apiMeta, others);
  return data?.rows?.map((m) => {
    return {
      id: m?.id,
      designation: m?.designation,
      organization: m?.organization,
      location: m?.location,
      startDate: m?.startDate,
      endDate: m?.endDate,
      isCurrent: m?.endDate ? false : true,
    };
  });
}

const formToFieldMap = {
  prescriptionComplaints: { field: "Complaints" },
  prescriptionGuidelines: { field: "Guidelines" },
  prescriptionFollowups: { field: "Followups" },
  prescriptionProcedures: { field: "Procedures" },
  prescriptionDiagnosis: { field: "Diagnoses" },
  prescriptionHistory: { field: "Histories" },
  prescriptionRefferedTo: { field: "Reffers" },
};
export function SanPrescription(formData, apiMeta, state, others) {
  console.log("SANITING", state.prescription);
  var prescriptionInStore = state.prescription?.prescription;
  var data = {};
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
    var vitalIds = Object.keys(formData);
    var finalData = [];
    for (var i = 0; i < vitalIds.length; i++) {
      if (formData[vitalIds[i]])
        finalData.push({
          masterDataId: vitalIds[i],
          value: formData[vitalIds[i]],
        });
    }
    data = {
      ...data,
      PrescriptionVitals: finalData,
    };
  } else if (formId === FORM_IDS.__PRESCRIPTION_MEDICINE) {
    var finalData = [];
    for (var i = 0; i < formData.length; i++) {
      var med = formData[i];
      var ob = {};
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
    values: data,
    endpoint: apiMeta.endpoint,
  };
}

//settings
export function SanContactEmailsCreate(formData, apiMeta, state, others) {
  return {
    values: { data: formData.data, type: communicationTypes.MAIL },
    endpoint: apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
  };
}

export function SanContactsRead(data) {
  // console.log("SANITING", apiMeta, others);
  return data?.rows
    ?.filter((d) => d.isActive)
    .map((m) => {
      return {
        id: m.id,
        data: m.data,
        verified: m.verified,
      };
    });
}

export function SanContactsReadUrlChange(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta, others);
  return {
    values: apiMeta.values,
    endpoint: apiMeta.endpoint + "&personId=" + state.profile.basic.id,
    reduxData: apiMeta.reduxData,
  };
}
export function SanContactPhonesCreate(formData, apiMeta, state, others) {
  return {
    values: { data: formData.data, type: communicationTypes.SMS },
    endpoint: apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
  };
}

export function SanContactWapCreate(formData, apiMeta, state, others) {
  return {
    values: { data: formData.data, type: communicationTypes.WHATSAPP },
    endpoint: apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
  };
}

export function SanChangePrimaryContact(formData, apiMeta, state, others) {
  return {
    values: { data: formData.data.data, id: formData.data.id },
    endpoint: apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
  };
}

export function SanReadPrimaryPhone(data) {
  // console.log("SANITING", apiMeta, others);
  return {
    data: data.phone,
    verified: data.phoneVerified,
  };
}

export function SanReadPrimaryEmail(data) {
  // console.log("SANITING", apiMeta, others);
  return {
    data: data.email,
    verified: data.emailVerified,
  };
}

export function SanPatientCreate(formData, apiMeta, state, others) {
  return {
    values: { ...formData, gender: formData?.gender?.label },
    endpoint: apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
  };
}

export function SanPatientRelativeCreate(formData, apiMeta, state, others) {
  return {
    values: {
      ...formData,
      gender: formData?.gender?.label,
      personId: state?.manageUser?.currentPerson,
    },
    endpoint: apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
  };
}

export function SanDoctorCreate(formData, apiMeta, state, others) {
  console.error("formData", formData);
  console.error("endpoint", apiMeta.endpoint);
  console.error("reduxData", apiMeta.reduxData);
  return {
    values: {
      ...formData,
      gender: formData?.gender?.label,
    },
    endpoint: apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
  };
}

export function SanRxRexharge(formData, apiMeta, state, others) {
  console.error("formData", formData);
  console.error("endpoint", apiMeta.endpoint.replace(":id", state?.auth?.uid));
  console.error("reduxData", apiMeta.reduxData);
  console.error("state", state);
  // var amountWithTax = formData.rxPackages + formData.rxPackages * 0.1;
  var amountWithTax =
    formData.rxPackages +
    formData.rxPackages *
      state.mdm.settingMeta.find((f) => f.name === "rxCacheCharge")?.value?.gst;
  return {
    values: {
      token:
        formData.rxPackages *
        state.mdm.settingMeta.find((f) => f.name === "rxTokenRatio")?.value
          ?.ratio,
      amount: amountWithTax * 100,
    },
    endpoint: apiMeta.endpoint.replace(":id", state?.auth?.uid),
    reduxData: apiMeta.reduxData,
  };
}

export function SanCreateAppointment(formData, apiMeta, state, others) {
  console.log("formData", formData);
  return {
    values: {
      ...formData,
      clinicId:
        Number(formData?.clinicId?.Clinic?.id) === 0
          ? null
          : Number(formData?.clinicId?.Clinic?.id),
      patientId: state?.prescription?.navData?.Person?.id,
      doctorId: state?.profile?.basic?.id,
    },
    endpoint: apiMeta.endpoint,
    reduxData: apiMeta.reduxData,
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
    values: {
      date: formData.date,
      startTime: formData.startTime,
      endTime: formData.endTime,
      clinicId:
        Number(formData?.clinicId?.Clinic?.id) === 0
          ? null
          : Number(formData?.clinicId?.Clinic?.id),
      patientId: formData["Patient.id"],
      doctorId: state?.profile?.basic?.id,
    },
    endpoint: endpoint,
    reduxData: apiMeta.reduxData,
  };
}

export function SanStringValueAdd(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    values: {
      ...formData,
      table: state?.language?.languageTable?.id,
      key: state?.language?.languageTableData?.key,
    },
    endpoint: apiMeta.endpoint,
  };
}

export function SanStringValueEdit(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    values: {
      ...formData,
      table: state?.language?.languageTable?.id,
      key: state?.language?.languageTableData?.key,
    },
    endpoint: apiMeta.endpoint.replace(":id", others?.editing),
  };
}

export function SanChemDeptReadMap(data) {
  // console.log("SANITING", apiMeta, others);
  let temp = data?.rows?.map((m) => {
    return {
      id: m?.id,
      name: m?.name,
      priority:
        m?.ChemicalDepartments && m?.ChemicalDepartments?.length > 0
          ? m?.ChemicalDepartments[0]?.priority
          : 1,
      hasEntry:
        m?.ChemicalDepartments && m?.ChemicalDepartments?.length > 0
          ? true
          : false,
      groupHead: m.parentId === null ? true : false,
      parentId: m?.parentId,
    };
  });

  return { chemDeptMap: nLevelGroup(temp, null) };
}

export function SanChemDeptMap(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    values: nLevelFlat(formData, {
      chemDeptMap: nLevelFlat(formData.chemDeptMap, []),
    }),
    endpoint: apiMeta.endpoint.replace(":id", state?.mdm?.baseChemical?.id),
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
  for (var i = 0; i < data.length; i++) {
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
      id: m?.id,
      name: m?.label,
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
      hasEntry:
        m?.RolePermissions &&
        m?.RolePermissions?.length > 0 &&
        m.RolePermissions.find(
          (rp) => rp.roleId === roleId && rp._status === __EntityStatus.ACTIVE
        )
          ? true
          : false,
      groupHead: m.parentId === null ? true : false,
      parentId: m?.parentId,
    };
  });

  return { rolePermissionMap: nLevelGroup(temp, null) };
}

export function SanRolePermission(formData, apiMeta, state, others) {
  // console.log("SANITING", apiMeta.endpoint, others);
  return {
    values: nLevelFlat(formData, {
      rolePermissionMap: nLevelFlat(formData.rolePermissionMap, []),
    }),
    endpoint: apiMeta.endpoint.replace(
      ":id",
      state?.mdm?.rolePermissionRole?.id
    ),
  };
}

export function SanCreateCommunicationTemplate(
  formData,
  apiMeta,
  state,
  others
) {
  return {
    values: {
      ...formData,
      _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
    },
    endpoint: apiMeta.endpoint,
  };
}

export function SanEditCommunicationTemplate(formData, apiMeta, state, others) {
  return {
    values: {
      ...formData,
      _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
    },
    endpoint: apiMeta?.endpoint.replace(":id", apiMeta?.values?.id),
  };
}

export function SanTestCommunicationTemplate(formData, apiMeta, state, others) {
  const obj = {
    values: {
      ...formData,
    },
    endpoint: apiMeta?.endpoint.replace(":name", formData.name),
  };
  return obj;
}
