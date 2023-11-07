import React from "react";

import CoreMenu from "./CoreMenu";

export function getPageTOC() {
  const [tocMenu, setTocMenu] = React.useState([]);

  React.useEffect(() => {
    /**
     * @todo find toc from a component
    */
    let sampleMenuContent = [
      {
        Children: [
          {
            Children: [],
            id: "Menu-1.1",
            label: "Menu 1.1",
            name: "Menu 1.1",
            type: "menuitem"
          },
          {
            Children: [],
            id: "Menu-1.2",
            label: "Menu 1.2",
            name: "Menu 1.2",
            type: "separator"
          },
          {
            Children: [
              {
                Children: [],
                id: "Menu-1.3.1",
                label: "Menu 1.3.1",
                name: "Menu 1.3.1",
                type: "menuitem"
              },
              {
                Children: [],
                id: "Menu-1.3.2",
                label: "Menu 1.3.2",
                name: "Menu 1.3.2",
                type: "separator"
              },
              {
                Children: [],
                id: "Menu-1.3.3",
                label: "Menu 1.3.3",
                name: "Menu 1.3.3",
                type: "parent"

              }
            ],
            id: "Menu-1",
            label: "Menu 1.3",
            name: "Menu 1.3",
            type: "parent"

          }
        ],
        id: "Menu-1",
        label: "Menu 1",
        name: "Menu 1",
        type: "header"
      },
      {
        Children: [
          {
            Children: [],
            id: "Menu-2.1",
            label: "Menu 2.1",
            name: "Menu 2.1",
            type: "menuitem"
          },
          {
            Children: [],
            id: "Menu-2.2",
            label: "Menu 2.2",
            name: "Menu 2.2",
            type: "separator"
          },
          {
            Children: [
              {
                Children: [],
                id: "Menu-2.3.1",
                label: "Menu 2.3.1",
                name: "Menu 2.3.1",
                type: "menuitem"
              },
              {
                Children: [],
                id: "Menu-2.3.2",
                label: "Menu 2.3.2",
                name: "Menu 2.3.2",
                type: "separator"
              },
              {
                Children: [],
                id: "Menu-2.3.3",
                label: "Menu 2.3.3",
                name: "Menu 2.3.3",
                type: "parent"

              }
            ],
            id: "Menu-2",
            label: "Menu 2.3",
            name: "Menu 2.3",
            type: "parent"

          }
        ],
        id: "Menu-2",
        label: "Menu 2",
        name: "Menu 2",
        type: "header"
      }
    ];

    setTocMenu(sampleMenuContent);

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
