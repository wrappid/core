import { SCFormGroup } from "../../styledComponents/form/SCFormGroup";

export default function CoreFormGroup(props) {
  return <SCFormGroup {...props}>{props.children}</SCFormGroup>;
}
