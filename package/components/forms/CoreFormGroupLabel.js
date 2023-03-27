import { SCFormControlLabel } from "../../styledComponents/inputs/SCFormControlLabel";

export default function CoreFormControlLabel(props) {
  return <SCFormControlLabel {...props}>{props.children}</SCFormControlLabel>;
}
