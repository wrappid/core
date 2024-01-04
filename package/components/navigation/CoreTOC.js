import React from "react";

import CoreMenu from "./CoreMenu";
import useDynamicRefs from "../../config/referenceMap";
import CoreH1 from "../dataDisplay/CoreH1";
import CoreH2 from "../dataDisplay/CoreH2";
import CoreH3 from "../dataDisplay/CoreH3";
import CoreH4 from "../dataDisplay/CoreH4";
import CoreH5 from "../dataDisplay/CoreH5";
import CoreH6 from "../dataDisplay/CoreH6";

export default function CoreTOC(props) {
  const [tocMenu, setTocMenu] = React.useState([]);

  const { getRef } = useDynamicRefs();

  const {
    // eslint-disable-next-line no-console
    OnMenuClick = (menuItem) => {
      let itemRef = getRef(menuItem?.id);

      itemRef?.current?.scrollIntoView({ behavior: "smooth" });
    },
    contentRef,
    headerComponents = [
      CoreH1,
      CoreH2,
      CoreH3,
      CoreH4,
      CoreH5,
      CoreH6
    ],
    // eslint-disable-next-line no-unused-vars
    disableHeaders = [],
  } = props || {};

  React.useEffect(() => {
    let menuElem = [];
    let content = contentRef?.current || document;

    /**
     * @todo
     * remove disabled header components
     */
    let domHeaderElements = headerComponents.map((component) => {
      if (component?.name) {
        return component?.name?.replaceAll("Core", "");
      } else {
        return component?.displayName?.replaceAll("Core", "");
      }
    });

    let contentElements = Array.from(
      content.querySelectorAll(domHeaderElements)
    ).map((elem) => ({ elem: elem, text: elem.innerText }));

    let headerElementsSorted = domHeaderElements.sort();

    contentElements.forEach((elem) => {
      if (headerElementsSorted.includes(elem?.elem?.tagName)) {
        // if (headerElementsSorted.indexOf(elem?.elem?.tagName) === 0) {
        let elemID = elem?.text?.trim()?.replaceAll(" ", "-");

        menuElem.push({
          Children: [],
          id      : elemID,
          label   : elem?.text?.trim(),
          name    : elem?.text?.trim(),
          type    : "menuitem",
        });
      }
    });

    setTocMenu(menuElem);

    return () => {
      // remove listener
    };
  }, []);

  return (
    <CoreMenu
      multiLevel={true}
      menu={tocMenu}
      OnMenuClick={OnMenuClick}
      open={true}
    />
  );
}
