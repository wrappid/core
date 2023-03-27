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
import CoreLink from "../../components/navigation/CoreLink";
import CoreClasses from "../../styles/CoreClasses";

export default function StyleUtilities() {
  return getUtilitySamples();
}

const getUtilitySamples = () => {
  return (
    <>
      {getHeading("Style Utilities")}
      <CoreTypographyBody1>
        These are style utilities built using bootstrap flavour.
      </CoreTypographyBody1>
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
    <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
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
