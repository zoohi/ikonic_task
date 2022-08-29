/** @format */

import axios from "axios";
import React, { useState } from "react";
import Options from "./Options";
const classes = "bg-blue-100   border rounded-md px-2 py-0.5 text-gray-700";

const FormComponent = ({ questions, setQuestions }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([{ id: 0, option: "" }]);
  const [answer, setAnswer] = useState(0);

  const onChangeQuestion = (e) => {
    setQuestion(e.target.value);
    console.log(question);
  };
  const onAddOption = () => {
    if (options.length >= 4) {
      return;
    }
    const lastOption = options[options.length - 1];
    setOptions([...options, { id: lastOption.id + 1, option: "" }]);
  };
  const onAddQuestion = () => {
    axios
      .post("http://localhost:8000/api/question", {
        question,
        options,
        answer,
      })
      .then((res) => {
        alert("Question saved successfully.");
        if (questions.length === 0) {
          setQuestions([...questions, { id: 0, question, options, answer }]);
        } else {
          const lastQuestion = questions[questions.length - 1];
          setQuestions([
            ...questions,
            { id: lastQuestion.id + 1, question, options, answer },
          ]);
        }
        setQuestion("");
        setOptions([{ id: 0, option: "", isChecked: true }]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const onChangeOption = (name, value, id) => {
    const optionsTemp = [...options];
    const optionIndex = options.findIndex((option) => option.id === id);
    optionsTemp[optionIndex][name] = value;
    setOptions(optionsTemp);
  };

  const onDeleteOption = (optionId) => {
    const optionsTemp = [...options];
    const optionIndex = options.findIndex((option) => option.id === optionId);
    if (optionsTemp[optionIndex].id === answer) {
      return;
    }
    optionsTemp.splice(optionIndex, 1);
    setOptions(optionsTemp);
  };

  return (
    <>
      <div className="font-serif border border-gray-50 p-4 rounded-lg m-4 mt-16">
        <div className="flex flex-col  w-96  mb-4">
          <h3 className=" font-semibold text-gray-100 text-xl py-6">
            {" "}
            Questions{" "}
          </h3>
          <textarea
            value={question}
            onChange={onChangeQuestion}
            className="border border-gray-500 focus:outline-none rounded-lg p-4"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          {options.map((option) => (
            <Options
              key={option.id}
              onAddOption={onAddOption}
              option={option}
              onChangeOption={onChangeOption}
              answer={answer}
              setAnswer={setAnswer}
              onDeleteOption={onDeleteOption}
              options={options}
            />
          ))}
        </div>
        <button onClick={onAddOption} className={classes}>
          {" "}
          Add New Option{" "}
        </button>
        <div className=" flex justify-end items-center pt-4">
          <button onClick={onAddQuestion} className={classes}>
            {" "}
            Add Question{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default FormComponent;
