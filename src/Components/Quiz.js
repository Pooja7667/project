import React, { useState } from "react";
import "./Quiz.css";
import questions from "./Qustion";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [shake, setShake] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (index) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentQuestion] === null) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleDirectNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border rounded">
      <div className="flex justify-center bg-orange-400 mt-0 ">
        <h1 className="p-5 text-2xl">QUIZ APP</h1>
      </div>
      <div className={`question-section ${shake ? "shake" : ""}`}>
        <div className="text-lg mb-4">
          {questions[currentQuestion].question}
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`w-full lg:w-5/12 p-2 border rounded ${
                answers[currentQuestion] === index
                  ? "bg-orange-300"
                  : "bg-green-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col lg:flex-row justify-between">
        <button
          onClick={handleNext}
          className="px-4 py-2 border rounded-2xl bg-orange-600"
          disabled={currentQuestion === questions.length - 1}
        >
          Next
        </button>

        {currentQuestion === questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 border rounded-2xl bg-green-600"
            disabled={answers[currentQuestion] === null}
          >
            Submit
          </button>
        ) : (
          <div className="flex justify-between lg:justify-end gap-2">
            <button
              onClick={handlePrev}
              className="px-4 py-2 border bg-gray-200 rounded-2xl"
              disabled={currentQuestion === 0}
            >
              &lt;
            </button>
            <button
              onClick={handleDirectNext}
              className="px-4 py-2 border bg-gray-200 rounded-2xl"
              disabled={currentQuestion === questions.length - 1}
            >
              &gt;
            </button>
          </div>
        )}
      </div>

      {loading && (
        <div className="loading flex justify-center items-center h-[100vh] w-[100vw] bg-red-100 fixed top-0 left-0 z-50">
          <div className="spinner"></div>
        </div>
      )}

      {submitted && (
        <div className="success flex flex-col justify-center items-center h-[100vh] w-[100vw] bg-lime-600 fixed top-0 left-0 z-50">
          <div className="checkmark">&#10004;</div>
          <br />
          <span>Successfully Submitted!</span>
        </div>
      )}
    </div>
  );
};

export default Quiz;
