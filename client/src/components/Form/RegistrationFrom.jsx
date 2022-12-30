import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { modalActions, questionActions } from "../../Store/index";
import { useRef } from "react";

const Question = () => {
  const nameRef = useRef();
  const typeRef = useRef();
  const requiredRef = useRef();
  const placeholderRef = useRef();
  const dispatch = useDispatch();
  const Add = () => {
    console.log(
      {
        question: nameRef.current.value,
        type: typeRef.current.value,
        required: requiredRef.current.value,
        placeholder: placeholderRef.current.value
      }
    )
    dispatch(questionActions.add({
      question: nameRef.current.value,
      type: typeRef.current.value,
      required: requiredRef.current.value,
      placeholder: placeholderRef.current.value
    }))
  }
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex w-4/5 flex-col">
        <label
          htmlFor="Question"
          className="text-4xl font-medium text-left w-full flex items-start"
        >
          <span className="mr-3">Question</span>
        </label>
        <textarea
          className="w-full border-4 border-black rounded-2xl min-h-[180px] my-5 text-3xl p-3"
          placeholder="Questions you need to ask" ref={nameRef}
        ></textarea>
        <textarea
          className="w-full border-4 border-black rounded-2xl min-h-[180px] my-5 text-3xl p-3"
          placeholder="Type placeholder for this question" ref={placeholderRef}
        ></textarea>
        </div>
        <div className="flex">
          <select ref={typeRef} className="border-4 rounded-lg shadow-xl border-[#265a8f] p-4 text-3xl">
            <option value="text">Text</option>
            <option value="textArea">Text Area</option>
          </select>
          <select ref={requiredRef} className="border-4 rounded-lg mx-3 shadow-xl border-[#265a8f] p-4 text-3xl">
            <option value={'true'}>
              Required
            </option>
            <option value={'false'}>Not Required</option>
          </select>
        </div>
        <button onClick={Add} className="text-3xl bg-[#265a8f] text-white p-6 rounded-xl w-1/3 my-5 m-auto mb-5">
          Add
        </button>
      
    </div>
  );
};

const ConstantQ = (props) => {
  return (
    <div className="flex my-[20px] p-4 h-[24vh] justify-between w-full items-start ">
      <label
        htmlFor={`Q${props.num}`}
        className="text-4xl font-medium text-left w-full flex items-start"
      >
        <span className="mr-4">Q{props.num}</span>
        <span className="mr-3">{props.Question}</span>
        <span className="mr-3 text-xl text-[#ff0000]">
          {props.required === 'true' ? <FontAwesomeIcon icon={faAsterisk} /> : ""}
        </span>
      </label>
      <select
        value={props.type}
        className="border-4 rounded-lg shadow-xl border-[#265a8f] p-4 text-3xl"
      >
        <option value="text">Text</option>
        <option value="textArea">Text Area</option>
      </select>
      {/* <select
        value={props.required}
        className="border-4 rounded-lg mx-3 shadow-xl border-[#265a8f] p-4 text-3xl"
      >
        <option value={true} defaultChecked>
          Required
        </option>
        <option value={false}>Not Required</option>
      </select> */}
    </div>
  );
};
const QModal = (props) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.registerModal);
  const closeModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(modalActions.closeregisterModal());
  };
  return (
    <div
      className="h-screen w-screen bg-[#00000050] flex justify-center items-center z-20 absolute top-0 left-0"
      onClick={closeModal}
    >
      <motion.div
        initial={{ x: open ? "35vw" : "0vw" }}
        onClick={(e) => e.stopPropagation()}
        animate={{ x: open ? "0vw" : "35vw" }}
        transition={{ duration: 0.7 }}
        className="w-[35vw] h-[60vh] relative bg-white pl-5 z-40 overflow-y-auto rounded-xl"
        id="mainModal"
      >
        <div className="absolute top-3 left-3 text-3xl mt-5 mb-3 p-6 text-[#3c4852]">
          <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
        </div>
        {props.children}
      </motion.div>
    </div>
  );
};

const RegistrationFrom = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.registerModal);
  const openModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(modalActions.openregisterModal());
  };
  const QuestionList = useSelector((state) => state.question.questions);
  return (
    <div className="bg-[#F1F1F1] flex flex-col items-center w-screen h-screen overflow-hidden relative">
      <button className="text-3xl bg-[#265a8f] z-10 m-5 text-white p-4 rounded-xl relative right-5 top-1">
        Set the Registration Form
      </button>
      <div className="flex flex-col items-center justify-center relative  bg-[#F1F1F1] w-2/3 h-[91vh] overflow-y-auto">
        {QuestionList.map((i, index) => (
          <ConstantQ
            num={index + 1}
            Question={i.name}
            type={i.type}
            required={i.required}
          />
        ))}
      </div>
      <button
        onClick={openModal}
        className="text-3xl bg-[#265a8f] text-white p-6 rounded-xl w-2/3 m-auto mb-5"
      >
        Add Question
      </button>
      {open && (
        <QModal>
          <Question />
        </QModal>
      )}
    </div>
  );
};

export default RegistrationFrom;
