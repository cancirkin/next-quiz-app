"use client";
import Link from "next/link";
import Image from "next/image";
import data from "@/data/data.json";

export default function Home() {
  const { quizzes = [] } = data;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 px-6">
        <div className="flex flex-col gap-0 md:gap-4">
          <h1 className="text-[40px] md:text-heading-l font-light">
            Welcome to the
          </h1>
          <h1 className="text-[40px] mt-[-10px] md:mt-0 md:text-heading-l font-medium">
            Frontend Quiz!
          </h1>
          <small className="md:mt-4 text-[14px] md:text-body-m font-light">
            <i className="text-muted dark:text-light-blue">
              Pick a subject to get started.
            </i>
          </small>
        </div>
        <div className="flex flex-col gap-4 mt-10 md:mt-0">
          {quizzes.map((quiz, index) => (
            <Link
              href={`/quiz?name=${quiz.title.toLowerCase()}`}
              key={index}
              className="flex p-3 md:p-5 items-center gap-4 h-16 md:h-24 rounded-xl md:rounded-3xl bg-white dark:bg-navy shadow-sm"
            >
              <div
                className="p-[5.71px] md:p-2 rounded-lg"
                style={{
                  backgroundColor: quiz.color,
                }}
              >
                <Image
                  src={`icons/${quiz.icon}.svg`}
                  width={40}
                  height={40}
                  alt={`${quiz.title} Icon`}
                  style={{}}
                  className="w-[28.57px] h-[28.57px] md:w-[40px] md:h-[40px]"
                ></Image>
              </div>
              <h2 className="text-[18px] font-medium md:text-heading-s">
                {quiz.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
