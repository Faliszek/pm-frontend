import React from "react";
import Rc from "rc-dialog";

export function Modal(props) {
  return (
    <Rc.Dialog visible={true} onClose={props.onClose}>
      {props.children}
    </Rc.Dialog>
  );
}
