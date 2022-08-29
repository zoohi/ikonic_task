/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import FormComponent from "./Components/FormComponent";
import PreviewComponent from "./Components/PreviewComponent";

const App = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/question")
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [questions, setQuestions] = useState([]);

  return (
    <div className=" flex w-full justify-between px-12   space-x-8 bg-emerald-800 h-full pb-20">
      <div>
        <FormComponent setQuestions={setQuestions} questions={questions} />
      </div>
      <div className="w-full ">
        <PreviewComponent questions={questions} />
      </div>
    </div>
  );
};

export default App;
