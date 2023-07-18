import CoreClasses from "../../../styles/CoreClasses";
import CoreIcon from "../CoreIcon";
import CoreTypographyCaption from "../paragraph/CoreTypographyCaption";

export default function CoreIconText(props) {
  const { icon, text, type } = props;

  return (
    <CoreTypographyCaption styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_START]}>
      <CoreIcon type={type} style={{ fontSize: 12 }}>{icon}</CoreIcon>
      
      <CoreTypographyCaption styleClasses={[CoreClasses.MARGIN.ML1]}>{text}</CoreTypographyCaption>
    </CoreTypographyCaption>
  );
}