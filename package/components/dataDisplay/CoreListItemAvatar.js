
import { NativeListItemAvatar } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreListItemAvatar(props) {
  props = sanitizeComponentProps(CoreListItemAvatar, props);
  return <NativeListItemAvatar {...props} />;
}
