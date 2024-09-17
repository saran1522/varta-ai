import React from "react";

function QuestionCard({ question, handleClick }) {
  return (
    <div
      className="z-20 bg-gray-800 text-center cursor-pointer max-w-[150px] px-2 py-3 rounded-xl text-gray-500"
      onClick={() => handleClick(question)}
    >
      {question}
    </div>
  );
}

export default QuestionCard;
