import { __EntityStatus } from "./constants";

export const DATA_TABLE_CONST = {
  
  DEFAULT_COLUMNS_IDS: [
    // column ids we will always look for
    { id: "id", order: 1, priority: -2 },
    { id: "_status", order: 1, priority: -1 },

    { id: "photoUrl", order: 1, priority: 0 },
    { id: "Person.photoUrl", order: 2, priority: 0 },
    { id: "RelatedPerson.photoUrl", order: 2, priority: 0 },
    { id: "icon", order: 3, priority: 0 },

    { id: "formID", order: 0, priority: 1 },
    { id: "label", order: 1, priority: 1 },
    { id: "name", order: 2, priority: 1 },
    { id: "firstName", order: 2, priority: 1 },
    { id: "Person.firstName", order: 2, priority: 1 },
    { id: "RelatedPerson.firstName", order: 2, priority: 1 },
    // Patient
    { id: "Patient.firstName", order: 2, priority: 1 },
    { id: "Patient.User.phone", order: 2, priority: 1 },
    { id: "Patient.User.email", order: 4, priority: 1 },
    { id: "phone", order: 3, priority: 1 },
    { id: "RelatedPerson.User.phone", order: 2, priority: 1 },
    { id: "email", order: 4, priority: 1 },
    { id: "RelatedPerson.User.email", order: 4, priority: 1 },
    { id: "role", order: 2, priority: 1 },
    { id: "value", order: 3, priority: 1 },
    { id: "basic", order: 3, priority: 1 },
    { id: "data", order: 4, priority: 1 },
    { id: "date", order: 1, priority: 1 },

    { id: "label", order: 0, priority: 2 },
    { id: "name", order: 1, priority: 2 },
    { id: "phone", order: 2, priority: 2 },
    { id: "RelatedPerson.User.phone", order: 2, priority: 2 },
    { id: "email", order: 3, priority: 2 },
    // Patient
    { id: "Patient.firstName", order: 2, priority: 2 },
    { id: "RelatedPerson.User.email", order: 3, priority: 2 },
    { id: "Patient.User.phone", order: 2, priority: 2 },
    { id: "Patient.User.email", order: 4, priority: 2 },
    { id: "manufacturers", order: 4, priority: 2 },
    { id: "type", order: 5, priority: 2 },
    { id: "url", order: 2, priority: 2 },
    { id: "contact", order: 3, priority: 2 },
    { id: "clinic", order: 3, priority: 2 },

    { id: "email", order: 1, priority: 3 },
    { id: "RelatedPerson.User.email", order: 1, priority: 3 },
    { id: "Patient.User.email", order: 4, priority: 3 },
    { id: "link", order: 2, priority: 3 },
    { id: "contact", order: 3, priority: 3 },
    { id: "clinic", order: 3, priority: 3 },

    { id: "phone", order: 1, priority: 4 },

    { id: "_status", order: 1, priority: 5 },
    { id: "parentId", order: 2, priority: 5 },
    { id: "personId", order: 4, priority: 5 },
  ],
  
  DEFAULT_DATA: { "-1": __EntityStatus.UNKNOWN, 0: "no_image.png" },
  
  // COLUMNS PRIORITY
  DEFAULT_MAX_COLUMNS_COUNT: 5,
  
  LOWEST_PRIORITY: -3,
  
  MAX_ROWS_IN_PAGE: 10,
  
  PAGES_TO_CACHE: 5,
  
  ROWS_PER_PAGE_OPTIONS: [
    10,
    25,
    50,
    100,
    500
  ],
  // CONFIG
  SERVER_SIDE         : true,
  TABLE_CELL_MAX_CHARS: 30,
};
