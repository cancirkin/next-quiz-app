import Image from "next/image";
import Link from "next/link";

export default function QuizResults({
  title,
  score,
  icon,
  color,
  totalQuestionCount,
}) {
  return (
    <div>
      <div className="bg-white dark:bg-navy flex flex-col justify-between items-center h-[242px] md:h-[388px] p-8 md:p-12 rounded-xl">
        <div className="flex items-center gap-4 md:gap-6">
          <div
            className="p-[5.71px] md:p-2 rounded-lg"
            style={{
              backgroundColor: color,
            }}
          >
            <Image
              src={`icons/${icon}.svg`}
              width={40}
              height={40}
              alt={`${title} Icon`}
              style={{}}
              className="w-[28.57px] h-[28.57px] md:w-[40px] md:h-[40px]"
            ></Image>
          </div>
          <span className="text-[18px] md:text-heading-s">{title}</span>
        </div>
        <h1 className="mt-0 md:mt-10 text-[88px] md:text-display leading-3 md:leading-none">
          {score}
        </h1>
        <div className="mt-0 text-body-m text-muted dark:text-light-blue">
          out of {totalQuestionCount}
        </div>
      </div>
      <Link href={"/"}>
        <button className="mt-8 w-full transition-all duration-200 ease-in-out h-16 md:h-24 rounded-xl md:rounded-3xl bg-secondary text-white shadow-sm text-[18px] md:text-heading-s md:hover:bg-secondary/50">
          Play Again
        </button>
      </Link>
    </div>
  );
}
