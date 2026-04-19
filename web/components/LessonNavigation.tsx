"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { htmlLessons } from "@/lib/htmlLessons";

export default function LessonNavigation() {
  const pathname = usePathname();

  const currentIndex = htmlLessons.findIndex(
    (lesson) => lesson.path === pathname
  );

  if (currentIndex === -1) return null;

  const prev = htmlLessons[currentIndex - 1];
  const next = htmlLessons[currentIndex + 1];

  return (
    <div className="mt-8 pt-4 border-t border-gray-200">

      {/* Progress */}
      <div className="text-center text-xs text-gray-500 mb-4">
        Lesson {currentIndex + 1} of {htmlLessons.length}
      </div>

      {/* Centered Navigation */}
      <div className="flex justify-center items-center gap-4 flex-wrap">

        {/* PREVIOUS */}
        {prev && (
          <Link
            href={prev.path}
            className="
              px-4 py-2
              rounded-md
              text-sm font-medium
              border border-gray-200
              text-gray-700
              bg-white
              hover:bg-gray-50 hover:border-gray-300
              transition
            "
          >
            ← {prev.title}
          </Link>
        )}

        {/* NEXT */}
        {next && (
          <Link
            href={next.path}
            className="
              px-4 py-2
              rounded-md
              text-sm font-medium
              text-white
              bg-cyan-600
              hover:bg-cyan-700
              transition
            "
          >
            {next.title} →
          </Link>
        )}

      </div>
    </div>
  );
}