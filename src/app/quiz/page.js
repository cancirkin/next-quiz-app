"use client";
import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import data from "@/data/data.json";
import QuizCompletedText from "./components/QuizCompletedText";
import ProgressBar from "./components/ProgressBar";
import QuestionText from "./components/QuestionText";
import QuestionOption from "./components/QuestionOption";
import SubmitButton from "./components/SubmitButton";
import Error from "./components/Error";
import QuizResults from "./components/QuizResults";

export default function Quiz() {
  //Find Quiz from search params
  const searchParams = useSearchParams();
  const quizName = searchParams.get("name");
  const { quizzes = [] } = data;
  const quiz = quizzes.find((quiz) => quiz.title.toLowerCase() === quizName);
  //States
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  //Functions
  const selectAnswer = (option) => {
    setSelectedAnswer(option);
  };
  const handleSubmit = () => {
    if (!selectedAnswer) {
      setShowError(true);
      return;
    }
    if (isSubmitted) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
      return;
    }
    if (quiz.questions[currentQuestionIndex].answer === selectedAnswer) {
      setScore(score + 1);
    }
    setShowError(false);
    setIsSubmitted(true);
    if (currentQuestionIndex + 1 === quiz.questions.length) {
      setCompleted(true);
    }
  };
  return (
    <div>
      {quiz && (
        <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-8 px-6 md:px-0">
          <div className="w-full md:w-[465px]">
            <div className="h-auto md:min-h-[272px]">
              {!completed ? (
                <QuestionText
                  currentQuestionIndex={currentQuestionIndex}
                  totalQuestionCount={quiz.questions.length}
                  question={quiz.questions[currentQuestionIndex].question}
                ></QuestionText>
              ) : (
                <QuizCompletedText />
              )}
            </div>
            {!completed && (
              <ProgressBar
                currentQuestionIndex={currentQuestionIndex}
                totalQuestionCount={quiz.questions.length}
              />
            )}
          </div>
          {!completed ? (
            <div className="flex flex-col gap-6">
              {quiz.questions[currentQuestionIndex].options.map(
                (option, index) => (
                  <QuestionOption
                    onClick={() => {
                      selectAnswer(option, index);
                    }}
                    disabled={isSubmitted}
                    key={index}
                    index={index}
                    option={option}
                    selectedAnswer={selectedAnswer}
                    quiz={quiz}
                    currentQuestionIndex={currentQuestionIndex}
                    isSubmitted={isSubmitted}
                  />
                )
              )}
              <SubmitButton
                currentQuestionIndex={currentQuestionIndex}
                totalQuestionCount={quiz.questions.length}
                onClick={handleSubmit}
                isSubmitted={isSubmitted}
              />
              {showError && <Error />}
            </div>
          ) : (
            <div>
              <QuizResults
                score={score}
                title={quiz.title}
                icon={quiz.icon}
                totalQuestionCount={quiz.questions.length}
                color={quiz.color}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
