export default function SubmitButton({
  currentQuestionIndex,
  totalQuestionCount,
  isSubmitted,
  ...buttonProps
}) {
  const getLabel = () => {
    if (isSubmitted) {
      return "Next Question";
    }

    return "Submit Answer";
  };
  return (
    <button
      {...buttonProps}
      className="transition-all duration-200 ease-in-out h-14 md:h-24 rounded-xl md:rounded-3xl bg-secondary text-white shadow-sm text-[18px] md:text-heading-s md:hover:bg-secondary/50"
    >
      {getLabel()}
    </button>
  );
}
