import React,{useState, useEffect} from "react";
import { Modal } from "@material-ui/core";

const ModalEdit = ({option, id}) => {

  const [defineModal, setDefineModal] = useState(false);

  useEffect(() => {
    if (defineModal != option) {
      setDefineModal(option)
    }
  }, {});
 
  console.log(defineModal)
  return (
    <Modal
       open={defineModal}
       onClose={!defineModal}

    >
      <p>Isto é um teste</p>
    </Modal>
  );
};

export default ModalEdit;