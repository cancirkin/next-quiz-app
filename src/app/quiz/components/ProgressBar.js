export default function ProgressBar({
  currentQuestionIndex,
  totalQuestionCount,
}) {
  return (
    <div className="bg-white w-full h-4 rounded-full mt-6 md:mt-40 relative px-1 flex items-center">
      <div
        className="h-2 rounded-full bg-secondary transition-all duration-200 ease-in-out"
        style={{
          width: `${((currentQuestionIndex + 1) * 100) / totalQuestionCount}%`,
        }}
      ></div>
    </div>
  );
}
