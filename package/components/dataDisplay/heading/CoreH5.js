import CoreH from "./CoreH";

export default function CoreH5(props) {
  return (
    <CoreH {...props} __level="h5">
      {props.children}
    </CoreH>
  );
}
