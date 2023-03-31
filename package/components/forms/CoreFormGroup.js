import { SCFormGroup } from "@wrappid/styled-components";

export default function CoreFormGroup(props) {
  return <SCFormGroup {...props}>{props.children}</SCFormGroup>;
}
