"use client";
import ColorMode from "@/components/ui/ColorMode";
import data from "@/data/data.json";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Header() {
  const searchParams = useSearchParams();
  const quizName = searchParams.get("name");
  const { quizzes = [] } = data;
  const quiz = quizzes.find((quiz) => quiz.title.toLowerCase() === quizName);
  return (
    <nav className="flex h-[72px] items-center justify-between px-6 sm:p-16 xl:w-full xl:px-0 xl:py-24">
      <section>
        {quiz && (
          <div className="flex items-center gap-4">
            <div
              className="p-2 rounded-lg"
              style={{
                backgroundColor: quiz.color,
              }}
            >
              <Image
                src={`icons/${quiz.icon}.svg`}
                width={40}
                height={40}
                alt={`${quiz.title} Icon`}
                className="w-[28.57px] h-[28.57px] md:w-[40px] md:h-[40px]"
              ></Image>
            </div>
            <h2 className="text-[18px] md:text-heading-s font-medium">
              {quiz.title}
            </h2>
          </div>
        )}
      </section>
      <section>
        <ColorMode />
      </section>
    </nav>
  );
}
