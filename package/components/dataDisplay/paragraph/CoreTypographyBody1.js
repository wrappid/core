import React from "react";
import { useState } from "react";
import CoreClasses from "../../../styles/CoreClasses";
import CoreSpan from "../../layouts/CoreSpan";
import CoreLink from "../../navigation/CoreLink";
import CoreTypography from "../CoreTypography";

export default function CoreTypographyBody1(props) {
  const { hideSeeMore = false, limitChars } = props;
  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return props?.limitChars ? (
    <CoreTypography {...props} variant="body1" gutterBottom>
      <CoreSpan>
        {typeof props?.children === "string" && seeMore
          ? limitChars > props?.children?.length
            ? props?.children
            : props?.children.slice(0, limitChars) + "..."
          : props?.children}
      </CoreSpan>
      {!hideSeeMore && limitChars < props?.children?.length && (
        <CoreLink styleClasses={[CoreClasses.MARGIN.ML1]} onClick={toggleSeeMore}>
          {seeMore ? "See more" : "See less"}
        </CoreLink>
      )}
    </CoreTypography>
  ) : (
    <CoreTypography {...props} variant="body1" gutterBottom>
      {props?.children}
    </CoreTypography>
  );
}

/*******
 * Sumanta's Code below
 */
// import { useState } from "react";
// import CoreClasses from "../../../styles/CoreClasses";
// import CoreLink from "../../navigation/CoreLink";
// import CoreTypography from "../CoreTypography";

// function getChracterFromLine(lineLimit) {
//   /**
//    * @todo: this should return vaalue depending on screen size
//    */
//   return lineLimit * 120;
// }
// /**
//  * @todo
//  * show See more button if required
//  * size of the show more and see less will be very small not more than line height of the text
//  * and also see more and see less should be inline
//  *
//  * by default it will be collapsed - done | bodyLimit default state false
//  *
//  * @param {*} props
//  * @returns
//  */
// export default function CoreBody1(props) {
//   const [bodyLimit, setBodyLimit] = useState(false);
//   const ToggleBodyLimit = () => {
//     setBodyLimit(!bodyLimit);
//   };

//   return props.lineLimit ? (
//     <CoreTypography variant="body1" {...props}>
//       <CoreTypography variant="span">
//         {typeof props.children === "string" && bodyLimit
//           ? getChracterFromLine(props.lineLimit) > props.children.length
//             ? props.children
//             : props.children.slice(0, getChracterFromLine(props.lineLimit)) +
//               " ..."
//           : props.children}
//       </CoreTypography>
//       {getChracterFromLine(props.lineLimit) < props.children.length && (
//         <CoreLink
//           sx={{ paddingLeft: bodyLimit ? 0 : 1 }}
//           onClick={ToggleBodyLimit}
//         >
//           {bodyLimit ? " See More" : " See less"}
//         </CoreLink>
//       )}
//     </CoreTypography>
//   ) : (
//     <CoreTypography variant="body1" {...props}>
//       {props.children}
//     </CoreTypography>
//   );
// }
