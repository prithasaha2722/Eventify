import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const Question = (props) => {
  return (
    <div className="flex my-[20px] p-4 h-[24vh] justify-between w-full items-start ">
      <label
        for="Q2"
        className="text-4xl font-medium text-left w-full flex items-start"
      >
        <span className="mr-4">Q{props.num}</span>
        <span className="mr-3">{props.Question}</span>
      </label>
      <select
        className="border-4 rounded-lg shadow-xl border-[#265a8f] p-4 text-3xl"
      >
        <option value="text">Text</option>
        <option value="textArea">Text Area</option>
      </select>
      <select
        className="border-4 rounded-lg mx-3 shadow-xl border-[#265a8f] p-4 text-3xl"
      >
        <option value="required" defaultChecked>
          Required
        </option>
        <option value="notRequired">Not Required</option>
      </select>
    </div>
  );
};

const RegistrationFrom = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden bg-[#F1F1F1] relative">
      <button className="text-3xl bg-[#265a8f] text-white p-4 rounded-xl fixed right-5 top-5">
        Set the Registration Form
      </button>
      <div className="flex flex-col items-center justify-center bg-[#F1F1F1] w-2/3 h-auto mt-16 pb-6 overflow-hidden">
        <div className="flex my-[20px] p-4 h-[24vh] justify-between w-full items-start ">
          <label
            for="Q1"
            className="text-4xl font-medium text-left w-full flex items-start"
          >
            <span className="mr-4">Q1</span>
            <span className="mr-3">
              {" "}
              QuestionQuestionQuestionQuestion QuestionQuestion Question
              QuestionQuestionQuestion Question Question
              QuestionQuestionQuestion QuestionQuestion QuestionQuestion v
            </span>
          </label>
          <select
            value="text"
            className="border-4 rounded-lg shadow-xl border-[#265a8f] p-4 text-3xl"
          >
            <option value="text">Text</option>
            <option value="textArea">Text Area</option>
          </select>
          <select
            value="required"
            className="border-4 rounded-lg mx-3 shadow-xl border-[#265a8f] p-4 text-3xl"
          >
            <option value="required" defaultChecked>
              Required
            </option>
            <option value="notRequired">Not Required</option>
          </select>
        </div>
        <div className="flex my-[20px] p-4 h-[24vh] justify-between w-full items-start ">
          <label
            for="Q2"
            className="text-4xl font-medium text-left w-full flex items-start"
          >
            <span className="mr-4">Q2</span>
            <span className="mr-3">Question</span>
          </label>
          <select
            value="text"
            className="border-4 rounded-lg shadow-xl border-[#265a8f] p-4 text-3xl"
          >
            <option value="text">Text</option>
            <option value="textArea">Text Area</option>
          </select>
          <select
            value="required"
            className="border-4 rounded-lg mx-3 shadow-xl border-[#265a8f] p-4 text-3xl"
          >
            <option value="required" defaultChecked>
              Required
            </option>
            <option value="notRequired">Not Required</option>
          </select>
        </div>
        <div className="flex my-[20px] p-4 h-[24vh] justify-between w-full items-start ">
          <label
            for="Q3"
            className="text-4xl font-medium text-left w-full flex items-start"
          >
            <span className="mr-4">Q3</span>
            <span className="mr-3">Question</span>
          </label>
          <select
            value="text"
            className="border-4 rounded-lg shadow-xl border-[#265a8f] p-4 text-3xl"
          >
            <option value="text">Text</option>
            <option value="textArea">Text Area</option>
          </select>
          <select
            value="required"
            className="border-4 rounded-lg mx-3 shadow-xl border-[#265a8f] p-4 text-3xl"
          >
            <option value="required" defaultChecked>
              Required
            </option>
            <option value="notRequired">Not Required</option>
          </select>
        </div>
        <div className="flex my-[20px] p-4 h-[24vh] justify-between w-full items-start ">
          <label
            for="Q4"
            className="text-4xl font-medium text-left w-full flex items-start"
          >
            <span className="mr-4">Q4</span>
            <span className="mr-3">Question</span>
          </label>
          <select
            value="text"
            className="border-4 rounded-lg shadow-xl border-[#265a8f] p-4 text-3xl"
          >
            <option value="text">Text</option>
            <option value="textArea">Text Area</option>
          </select>
          <select
            value="required"
            className="border-4 rounded-lg mx-3 shadow-xl border-[#265a8f] p-4 text-3xl"
          >
            <option value="required" defaultChecked>
              Required
            </option>
            <option value="notRequired">Not Required</option>
          </select>
        </div>
        <div className="flex my-[20px] p-4 h-[24vh] justify-between w-full items-start ">
          <label
            for="Q5"
            className="text-4xl font-medium text-left w-full flex items-start"
          >
            <span className="mr-4">Q5</span>
            <span className="mr-3">Question</span>
          </label>
          <select
            value="text"
            className="border-4 rounded-lg shadow-xl border-[#265a8f] p-4 text-3xl"
          >
            <option value="text">Text</option>
            <option value="textArea">Text Area</option>
          </select>
          <select
            value="required"
            className="border-4 rounded-lg mx-3 shadow-xl border-[#265a8f] p-4 text-3xl"
          >
            <option value="required" defaultChecked>
              Required
            </option>
            <option value="notRequired">Not Required</option>
          </select>
        </div>
        {
          
        }
        <button className="text-3xl bg-[#265a8f] text-white p-6 rounded-xl w-full">
          Add Question
        </button>
      </div>
    </div>
  );
};

export default RegistrationFrom;
