import CoreLink from "../../components/navigation/CoreLink";
import CoreClasses from "../../styles/CoreClasses";
import CoreAvatar from "../../components/dataDisplay/CoreAvatar";
import CoreDivider from "../../components/dataDisplay/CoreDivider";
import CoreIcon, { __IconTypes } from "../../components/dataDisplay/CoreIcon";
import CoreH1 from "../../components/dataDisplay/heading/CoreH1";
import CoreH2 from "../../components/dataDisplay/heading/CoreH2";
import CoreH3 from "../../components/dataDisplay/heading/CoreH3";
import CoreH4 from "../../components/dataDisplay/heading/CoreH4";
import CoreH5 from "../../components/dataDisplay/heading/CoreH5";
import CoreH6 from "../../components/dataDisplay/heading/CoreH6";
import CoreTypographyBody1 from "../../components/dataDisplay/paragraph/CoreTypographyBody1";
import CoreTypographyBody2 from "../../components/dataDisplay/paragraph/CoreTypographyBody2";
import CoreTypographyButton from "../../components/dataDisplay/paragraph/CoreTypographyButton";
import CoreTypographyCaption from "../../components/dataDisplay/paragraph/CoreTypographyCaption";
import CoreTypographyOverline from "../../components/dataDisplay/paragraph/CoreTypographyOverline";
import CoreTypographySubtitle1 from "../../components/dataDisplay/paragraph/CoreTypographySubtitle1";
import CoreTypographySubtitle2 from "../../components/dataDisplay/paragraph/CoreTypographySubtitle2";
import CoreDataTable from "../../components/dataTable/CoreDataTable";
import CoreBox from "../../components/layouts/CoreBox";
import CoreGrid from "../../components/layouts/CoreGrid";
import CoreSection from "../../components/layouts/CoreSection";
import CoreStack from "../../components/layouts/CoreStack";

export default function Components() {
  return getComponentSamples();
}

const getComponentSamples = () => {
  return (
    <>
      {getHeading("Component Samples")}
      {getInputComponentSamples()}
      {getDataDisplayComponentSamples()}
      {getFeedbackComponentSamples()}
      {getSurfaceComponentSamples()}
      {getNavigationComponentSamples()}
      {getLayoutComponentSamples()}
      {getUtilComponentSamples()}

      {getDataTableComponentSamples()}
    </>
  );
};

const getInputComponentSamples = () => {
  return <>{getSubHeading("Input Components")}</>;
};

const getDataDisplayComponentSamples = () => {
  return (
    <>
      {getSubHeading("Data Display Components")}
      {getAvatarComponentSamples()}
      {getBadgeComponentSamples()}
      {getChipComponentSamples()}
      {getDividerComponentSamples()}
      {getIconComponentSamples()}
      {getImageComponentSamples()}
      {getTypographyComponentSamples()}
    </>
  );
};

const getFeedbackComponentSamples = () => {
  return <>{getSubHeading("Feedback Components")}</>;
};

const getSurfaceComponentSamples = () => {
  return <>{getSubHeading("Surface Components")}</>;
};

const getNavigationComponentSamples = () => {
  return (
    <>
      {getSubHeading("Navigation Components")}
      {getLinkComponentSamples()}
    </>
  );
};

const getLayoutComponentSamples = () => {
  return <>{getSubHeading("Layout Components")}</>;
};

const getUtilComponentSamples = () => {
  return <>{getSubHeading("Util Components")}</>;
};

const getLinkComponentSamples = () => {
  return (
    <>
      {getTopicHeading("CoreLink Component")}
      <CoreGrid>
        <CoreBox gridProps={{ gridSize: 3 }}>Rendered Link Component </CoreBox>
        <CoreBox gridProps={{ gridSize: 9 }}>Code for it</CoreBox>
        <CoreDivider />

        <CoreBox gridProps={{ gridSize: 3 }}>
          <CoreLink href="#">Simple Link</CoreLink>
        </CoreBox>
        <CoreBox gridProps={{ gridSize: 9 }}>
          <pre>{`<CoreLink href="#">Simple Link</CoreLink>`}</pre>
        </CoreBox>
        <CoreDivider />

        <CoreBox gridProps={{ gridSize: 3 }}>
          <CoreLink href="#" title="The tooltip for the link">
            Link with default Tooltip
          </CoreLink>
        </CoreBox>
        <CoreBox gridProps={{ gridSize: 9 }}>
          <pre>{`<CoreLink href="#" title="The tooltip for the link">
  Link with default Tooltip
</CoreLink>`}</pre>
        </CoreBox>
        <CoreDivider />

        <CoreBox gridProps={{ gridSize: 3 }}>
          <CoreLink href="#" title="The tooltip for the link" titlePlacement="right">
            Link with right Tooltip
          </CoreLink>
        </CoreBox>
        <CoreBox gridProps={{ gridSize: 9 }}>
          <pre>{`<CoreLink href="#" title="The tooltip for the link" titlePlacement="right">
  Link with right Tooltip
</CoreLink>`}</pre>
        </CoreBox>
      </CoreGrid>
    </>
  );
};

const getAvatarComponentSamples = () => {
  return (
    <>
      {getTopicHeading("Avatar")}
      <CoreStack direction="row" spacing={2}>
        <CoreAvatar styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}></CoreAvatar>
        <CoreAvatar></CoreAvatar>
        <CoreAvatar styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]}></CoreAvatar>
        <CoreAvatar styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_LARGE]}></CoreAvatar>
        <CoreAvatar styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XLARGE]}></CoreAvatar>
        <CoreAvatar styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XXLARGE]}></CoreAvatar>
      </CoreStack>
    </>
  );
};

const getBadgeComponentSamples = () => {
  return <>{getTopicHeading("Badge")}</>;
};

const getChipComponentSamples = () => {
  return <>{getTopicHeading("Chip")}</>;
};

const getDividerComponentSamples = () => {
  return <>{getTopicHeading("Divider")}</>;
};

const getIconComponentSamples = () => {
  return (
    <>
      {getTopicHeading("Icon")}
      <CoreTypographyBody1>
        The CoreIcon component supports multiple Icon libraries. Presently supported libraries are:
        <pre>
          MATERIAL_ICON: "MATERIAL_ICON", // Default support of MUI
          <br />
          MATERIAL_OUTLINED_ICON: "MATERIAL_OUTLINED_ICON",
          <br />
          FONTAWESOME_V5_SOLID_ICON: "FONTAWESOME_V5_SOLID_ICON",
          <br />
          FONTAWESOME_V5_REGULAR_ICON: "FONTAWESOME_V5_REGULAR_ICON",
          <br />
          RXICON_V1_REGULAR_ICON: "RXICON_V1_REGULAR_ICON"
        </pre>
        <b>Note:</b> In MATERIAL only DEFAULT and OUTLINED are supported. In FONTAWESOME only V5
        SOLID and REGULAR are supported.
        <br /> Our own icon library RXICON_V1_REGULAR . The repo for building our own icons whenever
        necessary. <CoreLink>https://github.com/Rxefy/rxefy-icons</CoreLink>
      </CoreTypographyBody1>
      <CoreGrid>
        <CoreBox
          gridProps={{
            gridSize: 2,
            styleClasses: [CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER],
          }}
        >
          Rendered Icon
        </CoreBox>
        <CoreBox gridProps={{ gridSize: 5 }}>Code for it</CoreBox>
        <CoreBox gridProps={{ gridSize: 5 }}>Description</CoreBox>

        <CoreDivider />
        <CoreIcon
          gridProps={{
            gridSize: 2,
            styleClasses: [CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER],
          }}
        >
          dashboard
        </CoreIcon>
        <code gridProps={{ gridSize: 5 }}>&lt;CoreIcon&gt;dashboard&lt;/CoreIcon&gt;</code>
        <CoreBox gridProps={{ gridSize: 5 }}>Default MATERIAL_ICON is being used here.</CoreBox>

        <CoreDivider />
        <CoreIcon
          gridProps={{
            gridSize: 2,
            styleClasses: [CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER],
          }}
          icon="dashboard"
        />
        <code gridProps={{ gridSize: 5 }}>&lt;CoreIcon icon="dashboard" /&gt;</code>
        <CoreBox gridProps={{ gridSize: 5 }}>
          Default MATERIAL_ICON is being used here. The arguments are passed as properties{" "}
          <code>icon</code>.
        </CoreBox>

        <CoreDivider />
        <CoreIcon
          gridProps={{
            gridSize: 2,
            styleClasses: [CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER],
          }}
          type={__IconTypes.MATERIAL_OUTLINED_ICON}
          icon="dashboard"
        />
        <code gridProps={{ gridSize: 5 }}>
          {`<CoreIcon type={__IconTypes.MATERIAL_OUTLINED_ICON} icon="dashboard" />`}
        </code>
        <CoreBox gridProps={{ gridSize: 5 }}>
          MATERIAL_OUTLINED_ICON is being used here. The arguments are passed as properties{" "}
          <code>type</code> & <code>icon</code>.
        </CoreBox>

        <CoreDivider />
        <CoreIcon
          gridProps={{
            gridSize: 2,
            styleClasses: [CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER],
          }}
          type={__IconTypes.FONTAWESOME_V5_SOLID_ICON}
          icon="fa-plus-circle"
        />
        <code gridProps={{ gridSize: 5 }}>
          {`<CoreIcon type={__IconTypes.FONTAWESOME_V5_SOLID_ICON} icon="fa-plus-circle" />`}
        </code>
        <CoreBox gridProps={{ gridSize: 5 }}>
          FONTAWESOME_V5_SOLID_ICON is being used here. The arguments are passed as properties{" "}
          <code>type</code> & <code>icon</code>.
        </CoreBox>

        <CoreDivider />
        <CoreIcon
          gridProps={{
            gridSize: 2,
            styleClasses: [CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER],
          }}
          type={__IconTypes.FONTAWESOME_V5_REGULAR_ICON}
          icon="fa-user-circle"
        />
        <code gridProps={{ gridSize: 5 }}>
          {`<CoreIcon type={__IconTypes.FONTAWESOME_V5_REGULAR_ICON} icon="fa-user-circle" />`}
        </code>
        <CoreBox gridProps={{ gridSize: 5 }}>
          FONTAWESOME_V5_REGULAR_ICON is being used here. The arguments are passed as properties{" "}
          <code>type</code> & <code>icon</code>.
        </CoreBox>

        <CoreDivider />
        <CoreIcon
          gridProps={{
            gridSize: 2,
            styleClasses: [CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER],
          }}
          type={__IconTypes.RXICON_V1_REGULAR_ICON}
          icon="rxi-alchohol-caution"
        />
        <code gridProps={{ gridSize: 5 }}>
          {`<CoreIcon type={__IconTypes.RXICON_V1_REGULAR_ICON} icon="rxi-alchohol-caution" />`}
        </code>
        <CoreBox gridProps={{ gridSize: 5 }}>
          RXICON_V1_REGULAR_ICON is being used here. The arguments are passed as properties{" "}
          <code>type</code> & <code>icon</code>.
        </CoreBox>

        <CoreDivider />
        <CoreIcon
          gridProps={{
            gridSize: 2,
            styleClasses: [CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER],
          }}
          options={{
            type: __IconTypes.RXICON_V1_REGULAR_ICON,
            icon: "rxi-alchohol-caution",
          }}
        />
        <code gridProps={{ gridSize: 5 }}>
          {`<CoreIcon options={{type: __IconTypes.RXICON_V1_REGULAR_ICON, icon: "rxi-alchohol-consult-doctor"}} />`}
        </code>
        <CoreBox gridProps={{ gridSize: 5 }}>
          RXICON_V1_REGULAR_ICON is being used here. The arguments are passed as a JSON in a
          property called <code>options</code>.
        </CoreBox>
      </CoreGrid>
    </>
  );
};

const getImageComponentSamples = () => {
  return <>{getTopicHeading("Image")}</>;
};

const getTypographyComponentSamples = () => {
  return (
    <>
      {getTopicHeading("CoreTypography")}
      <CoreH1>CoreH1. Heading</CoreH1>
      <CoreDivider />
      <CoreH2>CoreH2. Heading</CoreH2>
      <CoreDivider />
      <CoreH3>CoreH3. Heading</CoreH3>
      <CoreDivider />
      <CoreH4>CoreH4. Heading</CoreH4>
      <CoreDivider />
      <CoreH5>CoreH5. Heading</CoreH5>
      <CoreDivider />
      <CoreH6>CoreH6. Heading</CoreH6>
      <CoreDivider />
      <CoreTypographySubtitle1>
        CoreTypographySubtitle1. Fusce mattis egestas risus, in euismod odio tincidunt in. Maecenas
        ut ultricies quam.
      </CoreTypographySubtitle1>
      <CoreDivider />
      <CoreTypographySubtitle2>
        CoreTypographySubtitle2. Fusce mattis egestas risus, in euismod odio tincidunt in. Maecenas
        ut ultricies quam.
      </CoreTypographySubtitle2>
      <CoreDivider />
      <CoreTypographyBody1>
        CoreTypographyBody1. Fusce mattis egestas risus, in euismod odio tincidunt in. Maecenas ut
        ultricies quam. Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
        convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus nulla, eu
        scelerisque nisi metus at mi. Phasellus luctus in magna id finibus.
      </CoreTypographyBody1>
      <CoreDivider />
      <CoreTypographyBody1 limitChars="100">
        CoreTypographyBody1 with limitChars. Fusce mattis egestas risus, in euismod odio tincidunt
        in. Maecenas ut ultricies quam. Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
        Donec nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
        nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id finibus.
      </CoreTypographyBody1>
      <CoreDivider />
      <CoreTypographyBody2>
        CoreTypographyBody2. Fusce mattis egestas risus, in euismod odio tincidunt in. Maecenas ut
        ultricies quam. Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
        convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus nulla, eu
        scelerisque nisi metus at mi. Phasellus luctus in magna id finibus.
      </CoreTypographyBody2>
      <CoreDivider />
      <CoreTypographyBody2 limitChars="100">
        CoreTypographyBody2 with limitChars. Fusce mattis egestas risus, in euismod odio tincidunt
        in. Maecenas ut ultricies quam. Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
        Donec nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
        nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id finibus.
      </CoreTypographyBody2>
      <CoreDivider />
      <CoreTypographyButton>CoreTypographyButton</CoreTypographyButton>
      <CoreDivider />
      <CoreTypographyCaption>CoreTypographyCaption</CoreTypographyCaption>
      <CoreDivider />
      <CoreTypographyOverline>CoreTypographyOverline</CoreTypographyOverline>
    </>
  );
};

const getDataTableComponentSamples = () => {
  return (
    <>
      <CoreBox
        styleClasses={[CoreClasses.BG.BG_WHITE, CoreClasses.PADDING.P2, CoreClasses.MARGIN.MB5]}
      >
        <CoreH6 styleClasses={[CoreClasses.MARGIN.MB1, CoreClasses.COLOR.TEXT_INFO]}>
          CoreDataTable Component
        </CoreH6>
      </CoreBox>
      <CoreDataTable entity={"Medicines"} />
    </>
  );
};

const getUtilitySamples = () => {
  return (
    <>
      {getHeading("Utility Style Samples")}
      {getBackgroundColorUtilitySamples()}
      {getBorderUtilitySamples()}
      {getColorUtilitySamples()}
      {getTextUtilitySamples()}
    </>
  );
};

const getBackgroundColorUtilitySamples = () => {
  return (
    <>
      {getTopicHeading("Background color")}
      <CoreTypographyBody1>
        Similar to the contextual text color classes, set the background of an element to any
        contextual class. Background utilities do not set color, so in some cases you’ll want to use
        .text-*
      </CoreTypographyBody1>
      <CoreGrid>
        {Object.keys(CoreClasses.BG).map((bgClass) => {
          return (
            <CoreBox
              gridProps={{ gridSize: 4 }}
              styleClasses={[
                CoreClasses.BG[bgClass],
                CoreClasses.PADDING.P2,
                CoreClasses.MARGIN.MB1,
              ]}
            >
              {bgClass}
            </CoreBox>
          );
        })}
      </CoreGrid>
    </>
  );
};

const getBorderUtilitySamples = () => {
  return (
    <>
      {getTopicHeading("Border")}

      <CoreTypographyBody1>
        In the examples the border-width is forcefully given 2px, so that examples are easily
        visible.
      </CoreTypographyBody1>
      <CoreGrid>
        {Object.keys(CoreClasses.BORDER).map((borderClass) => {
          return (
            <CoreBox
              gridProps={{ gridSize: 3 }}
              sx={{ backgroundColor: "#eee" }}
              styleClasses={[
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER[borderClass],
                CoreClasses.PADDING.P2,
                CoreClasses.MARGIN.MB1,
              ]}
            >
              {borderClass}
            </CoreBox>
          );
        })}
      </CoreGrid>
    </>
  );
};

const getColorUtilitySamples = () => {
  return (
    <>
      {getTopicHeading("Color")}
      <CoreTypographyBody1>Colorize text with text color utilities.</CoreTypographyBody1>
      <CoreGrid>
        {Object.keys(CoreClasses.COLOR).map((colorClass) => {
          return (
            <CoreBox
              gridProps={{ gridSize: 3 }}
              styleClasses={[
                CoreClasses.COLOR[colorClass],
                CoreClasses.PADDING.PX2,
                CoreClasses.MARGIN.MB1,
              ]}
            >
              {colorClass}
            </CoreBox>
          );
        })}
      </CoreGrid>
    </>
  );
};
const getTextUtilitySamples = () => {
  return (
    <>
      {getTopicHeading("Text")}
      <CoreTypographyBody1></CoreTypographyBody1>
      <CoreGrid>
        {Object.keys(CoreClasses.TEXT).map((textClass) => {
          return (
            <CoreBox
              gridProps={{ gridSize: 3 }}
              styleClasses={[
                CoreClasses.TEXT[textClass],
                CoreClasses.PADDING.PX2,
                CoreClasses.MARGIN.MB1,
              ]}
            >
              {textClass}
            </CoreBox>
          );
        })}
      </CoreGrid>
    </>
  );
};

const getHeading = (headingText) => {
  return (
    <CoreH4 styleClasses={[CoreClasses.MARGIN.MB3, CoreClasses.COLOR.TEXT_PRIMARY]}>
      {headingText}
    </CoreH4>
  );
};

const getSubHeading = (subHeadingText) => {
  return (
    <CoreH5
      styleClasses={[
        CoreClasses.MARGIN.MY2,
        CoreClasses.COLOR.TEXT_SECONDARY,
        CoreClasses.TEXT.TEXT_UPPERCASE,
      ]}
    >
      {subHeadingText}
    </CoreH5>
  );
};

const getTopicHeading = (topicHeadingText) => {
  return (
    <CoreH6 styleClasses={[CoreClasses.MARGIN.MY1, CoreClasses.COLOR.TEXT_INFO]}>
      {topicHeadingText}
    </CoreH6>
  );
};
