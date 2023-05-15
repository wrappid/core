import { NativeFormControlLabel } from "@wrappid/styled-components";

export default function CoreFormControlLabel(props) {
  return <NativeFormControlLabel {...props}>{props.children}</NativeFormControlLabel>;
}
