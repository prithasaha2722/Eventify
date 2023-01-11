import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full 2xl:w-[450px] sm:w-2/5  rounded-b-2xl mx-4 my-8">
      <button className="inline-block" onClick={handleOpen}>{props.children}</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div onClick={handleClose} className="flex items-center justify-center h-full w-full">
        <div className=" w-4/5 lg:w-fit h-fit rounded-md">{props.Content}</div>
        </div>
      </Modal>
    </div>
  );
}

// import React, {useRef} from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { modalActions } from "../../Store/index";

// const Modal = (props) => {
//   const dispatch = useDispatch();
//   const divRef = useRef();
//   const open = useSelector((state)=>state.modal.eventModal)
//   const openModal = (e) => {
//     e.stopPropagation()
//     dispatch(modalActions.openEventModal());
//     console.log(1)
//     document.body.style.overflow = 'hidden'
//   };
//   const closeModal = () => {

//     dispatch(modalActions.closeEventModal());
//     document.body.style.overflowY = 'auto'
//   };
//   return (
//     <>
//       <div onClick={openModal} ref={divRef} >{props.children}</div>
//       {open && <div onClick={closeModal} className={`bg[#00000050] h-max w-screen absolute top-[${divRef.current.pageYoffset}px] left-0 z-50 flex items-center justify-center`}>
//         <div onClick={closeModal}>{props.Content}</div>
//       </div>}
//     </>
//   );
// };

// export default Modal;
