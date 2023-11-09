import React from "react";

import CoreMenu from "./CoreMenu";

export function getPageTOC(props) {
  const {
    contentRef,
    headerElements = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6"
    ],
    disableHeaders = []
  } = props || {};
  const [tocMenu, setTocMenu] = React.useState([]);

  const getHeaderElem = (contentDOM, headerElementTag) => {
    return Array.from(contentDOM.querySelectorAll(headerElementTag))
      .map((elem, index) => ({
        id   : `${(elem?.innerText || "")?.trim().toLowerCase()}-${index}`,
        label: (elem?.innerText || "")?.trim(),
        name : (elem?.innerText || "")?.trim(),
        type : "menuitem"
      }));
  };

  React.useEffect(() => {
    /**
     * @todo find toc from a component
    */
    let menuElem = [];
    let content = contentRef?.current || document;

    let elements = Array.from((contentRef?.current || document).querySelectorAll(headerElements))
      .map((elem) => ({ elem: elem, text: elem.innerText }));

    console.log("#####################################");
    console.log(elements);

    let headerElementsSorted = headerElements.sort();
    
    elements.forEach(elem => {
      if (headerElementsSorted.indexOf(elem?.elem?.tagName?.toLowerCase()) === 0) {
        menuElem.push({
          Children: [],
          id      : elem?.text?.trim()?.replaceAll(" ", "-"),
          label   : elem?.text?.trim(),
          name    : elem?.text?.trim(),
          type    : "menuitem"
        });
      }
    });

    setTocMenu(menuElem);

    return () => {
      // remove listener
    };
  }, []);

  return tocMenu;
}

export default function CoreTOC(props) {

  // eslint-disable-next-line no-console
  const { tocMenu, OnMenuClick = () => { console.log("menu clicked"); } } = props;

  return <CoreMenu
    multiLevel={true}
    menu={tocMenu}
    OnMenuClick={OnMenuClick} />;
}
