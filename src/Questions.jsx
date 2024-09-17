import React from "react";
import QuestionCard from "./QuestionCard";

function Questions({ handleQuery }) {
  return (
    <div className="z-20 flex gap-4 justify-between text-xl">
      <QuestionCard
        question="What is AI and how is it transforming the world?"
        handleClick={handleQuery}
      />
      <QuestionCard
        question="Write the code of the bubble sort algorithm"
        handleClick={handleQuery}
      />
      <QuestionCard
        question="How a beginner should learn AWS?"
        handleClick={handleQuery}
      />
      <QuestionCard question="Tell me a funny joke" handleClick={handleQuery} />
    </div>
  );
}

export default Questions;
