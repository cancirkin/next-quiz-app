import Image from "next/image";
export default function QuestionOption({
  index,
  option,
  selectedAnswer,
  quiz,
  currentQuestionIndex,
  isSubmitted,
  ...buttonProps
}) {
  const optionLetters = ["A", "B", "C", "D"];

  const isSelectedAnswerCorrect = () => {
    return (
      isSubmitted &&
      selectedAnswer == option &&
      selectedAnswer === quiz.questions[currentQuestionIndex].answer
    );
  };

  const isSelectedAnswerWrong = () => {
    return (
      isSubmitted &&
      selectedAnswer == option &&
      selectedAnswer !== quiz.questions[currentQuestionIndex].answer
    );
  };
  const isAnswerSelected = () => {
    return selectedAnswer === option;
  };

  return (
    <button
      {...buttonProps}
      className={
        "p-3 md:p-5 min-h-16 md:min-h-24 rounded-xl md:rounded-3xl bg-white dark:bg-navy shadow-sm group " +
        (isAnswerSelected()
          ? "border-4 border-secondary"
          : "border-4 border-transparent") +
        (isSelectedAnswerCorrect() ? " border-4 border-success " : "") +
        (isSelectedAnswerWrong() ? "border-4 border-danger" : "")
      }
    >
      <div className="flex items-center gap-4 md:gap-8 w-full">
        <div
          className={
            "px-[14px] pt-[7px] md:pt-4 pb-[7px] md:pb-3 bg-background font-medium rounded-lg " +
            (!isSubmitted && !isAnswerSelected()
              ? "group-hover:bg-secondary-foreground group-hover:text-secondary"
              : "") +
            (isAnswerSelected() ? " text-white bg-secondary  " : "") +
            (isSelectedAnswerCorrect() ? " text-white bg-success" : "") +
            (isSelectedAnswerWrong() ? " bg-red-500 text-white" : "")
          }
        >
          <span
            className={
              "text-[18px] md:text-heading-s dark:text-primary " +
              (isAnswerSelected() ? "dark:text-white " : "") +
              (!isAnswerSelected() ? "dark:group-hover:text-secondary" : "")
            }
          >
            {optionLetters[index]}
          </span>
        </div>
        <div className="text-[18px] md:text-heading-s text-start flex justify-between items-center w-full">
          <span>{option}</span>
          {isSubmitted &&
            quiz.questions[currentQuestionIndex].answer == option && (
              <Image
                alt="Check Icon"
                src={"icons/icon-correct.svg"}
                width={30}
                height={30}
              ></Image>
            )}
          {isSubmitted &&
            selectedAnswer == option &&
            selectedAnswer != quiz.questions[currentQuestionIndex].answer && (
              <Image
                alt="Check Icon"
                src={"icons/icon-incorrect.svg"}
                width={30}
                height={30}
              ></Image>
            )}
        </div>
      </div>
    </button>
  );
}
