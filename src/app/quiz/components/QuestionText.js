export default function QuestionText({
  currentQuestionIndex,
  question,
  totalQuestionCount,
}) {
  return (
    <div>
      <i className="text-muted text-[14px] md:text-body-s">{`Question ${
        currentQuestionIndex + 1
      } of ${totalQuestionCount}`}</i>
      <div className="mt-3 md:mt-[27px] text-[20px] md:text-heading-m">
        {question}
      </div>
    </div>
  );
}
