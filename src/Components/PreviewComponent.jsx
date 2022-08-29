/** @format */

import React from "react";

const PreviewComponent = ({ questions }) => {
  return (
    <div>
      <h3 className="text-white py-4 text-center font-serif text-lg font-semibold">
        Questions Preview
      </h3>
      <div className=" w-full border  space-y-4 items-center p-4 f rounded-xl  border-gray-100">
        {questions.map((question, index) => (
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-start">
              Question # {index + 1}: {question.question}
            </h3>

            {question.options.map((option) => (
              <div>
                <input
                  className="text-white"
                  type="radio"
                  name={`${question.question}`}
                  checked={option.id === question.answer}
                />
                <label className="text-white"> {option.option}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewComponent;
