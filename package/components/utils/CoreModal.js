import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalState } from "../../store/action/modalAction";
import { SCModal } from "../../styledComponents/utils/SCModal";
import { CoreClasses } from "@wrappid/styles";
import CoreIcon from "../dataDisplay/CoreIcon";
import CoreH6 from "../dataDisplay/heading/CoreH6";
import CoreIconButton from "../inputs/CoreIconButton";
import CoreBox from "../layouts/CoreBox";

export default function CoreModal(props) {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.modalOpen);
  const modalData = useSelector((state) => state.modal.modalData);
  const modalStyle = useSelector((state) => state.modal.modalStyle);
  const modalClose = useSelector((state) => state.modal.modalClose);
  const HandleModalClose = () => {
    dispatch(toggleModalState(null));
  };

  return (
    <SCModal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={open}
      onClose={modalClose}
      // {...props}
    >
      <CoreBox
        sx={{ bgcolor: "background.paper" }}
        styleClasses={
          props.containerStyle
            ? [CoreClasses.MODAL.MODAL_CONTAINER, ...modalStyle.containerStyle]
            : [CoreClasses.MODAL.MODAL_CONTAINER]
        }
      >
        <CoreBox
          styleClasses={
            props.headerStyle
              ? [
                  CoreClasses.MODAL.MODAL_HEADER,
                  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
                  ...modalStyle?.headerStyle,
                ]
              : [
                  CoreClasses.MODAL.MODAL_HEADER,
                  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
                ]
          }
          id="modal-modal-title"
        >
          <CoreBox>
            {<CoreH6>{modalData?.heading ? modalData.heading : ""}</CoreH6>}
          </CoreBox>
          <CoreIconButton onClick={HandleModalClose}>
            <CoreIcon>close</CoreIcon>
          </CoreIconButton>
        </CoreBox>
        <CoreBox
          styleClasses={
            props.bodyStyle
              ? [CoreClasses.MODAL.MODAL_BODY, ...modalStyle?.bodyStyle]
              : [CoreClasses.MODAL.MODAL_BODY]
          }
          id="modal-modal-description"
        >
          {React.isValidElement(modalData?.comp) ? modalData?.comp : null}
        </CoreBox>
      </CoreBox>
    </SCModal>
  );
}
