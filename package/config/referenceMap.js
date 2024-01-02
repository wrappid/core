import React from "react";

const map = new Map();

function setRef(key) {
  if (!key) {
    return console.warn("useDynamicRefs: Cannot set ref without key ");
  }
  const ref = React.useRef();

  map.set(key, ref);
  return ref;
}

function getRef(key) {
  if (!key) {
    return console.warn("useDynamicRefs: Cannot get ref without key");
  }
  return map.get(key);
}

function useDynamicRefs() {
  return { getRef, setRef };
}

export default useDynamicRefs;