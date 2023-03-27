import { __EntityStatus } from "./constants";

export const DATA_TABLE_CONST = {
  // CONFIG
  SERVER_SIDE: true,
  PAGES_TO_CACHE: 5,
  MAX_ROWS_IN_PAGE: 10,
  ROWS_PER_PAGE_OPTIONS: [10, 25, 50, 100, 500],
  TABLE_CELL_MAX_CHARS: 30,

  // COLUMNS PRIORITY
  DEFAULT_MAX_COLUMNS_COUNT: 5,
  LOWEST_PRIORITY: -3,
  DEFAULT_COLUMNS_IDS: [
    // column ids we will always look for
    { id: "id", priority: -2, order: 1 },
    { id: "_status", priority: -1, order: 1 },

    { id: "photoUrl", priority: 0, order: 1 },
    { id: "Person.photoUrl", priority: 0, order: 2 },
    { id: "RelatedPerson.photoUrl", priority: 0, order: 2 },
    { id: "icon", priority: 0, order: 3 },

    { id: "formID", priority: 1, order: 0 },
    { id: "label", priority: 1, order: 1 },
    { id: "name", priority: 1, order: 2 },
    { id: "firstName", priority: 1, order: 2 },
    { id: "Person.firstName", priority: 1, order: 2 },
    { id: "RelatedPerson.firstName", priority: 1, order: 2 },
    // Patient
    { id: "Patient.firstName", priority: 1, order: 2 },
    { id: "Patient.User.phone", priority: 1, order: 2 },
    { id: "Patient.User.email", priority: 1, order: 4 },
    { id: "phone", priority: 1, order: 3 },
    { id: "RelatedPerson.User.phone", priority: 1, order: 2 },
    { id: "email", priority: 1, order: 4 },
    { id: "RelatedPerson.User.email", priority: 1, order: 4 },
    { id: "role", priority: 1, order: 2 },
    { id: "value", priority: 1, order: 3 },
    { id: "basic", priority: 1, order: 3 },
    { id: "data", priority: 1, order: 4 },
    { id: "date", priority: 1, order: 1 },

    { id: "label", priority: 2, order: 0 },
    { id: "name", priority: 2, order: 1 },
    { id: "phone", priority: 2, order: 2 },
    { id: "RelatedPerson.User.phone", priority: 2, order: 2 },
    { id: "email", priority: 2, order: 3 },
    // Patient
    { id: "Patient.firstName", priority: 2, order: 2 },
    { id: "RelatedPerson.User.email", priority: 2, order: 3 },
    { id: "Patient.User.phone", priority: 2, order: 2 },
    { id: "Patient.User.email", priority: 2, order: 4 },
    { id: "manufacturers", priority: 2, order: 4 },
    { id: "type", priority: 2, order: 5 },
    { id: "url", priority: 2, order: 2 },
    { id: "contact", priority: 2, order: 3 },
    { id: "clinic", priority: 2, order: 3 },

    { id: "email", priority: 3, order: 1 },
    { id: "RelatedPerson.User.email", priority: 3, order: 1 },
    { id: "Patient.User.email", priority: 3, order: 4 },
    { id: "link", priority: 3, order: 2 },
    { id: "contact", priority: 3, order: 3 },
    { id: "clinic", priority: 3, order: 3 },

    { id: "phone", priority: 4, order: 1 },

    { id: "_status", priority: 5, order: 1 },
    { id: "parentId", priority: 5, order: 2 },
    { id: "personId", priority: 5, order: 4 },
  ],
  DEFAULT_DATA: { 0: "no_image.png", "-1": __EntityStatus.UNKNOWN },
};
