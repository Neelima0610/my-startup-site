import LessonPreviewButton from "./LessonPreviewButton";

type PlaygroundCode = {
  html: string;
  css: string;
  js: string;
};

export default function LearningLayout({
  children,
  previewCode,
}: {
  children: React.ReactNode;
  previewCode?: PlaygroundCode;
}) {
  return (
    <div className="w-full max-w-none">
      <div className="w-full min-w-0">
        <div
          className="min-h-[calc(100vh-3rem)] bg-white border border-gray-200 rounded-xl shadow p-6 md:p-10"
          style={{ position: "relative" }}
        >
          {previewCode && (
            <div
              className="z-10"
              style={{ position: "absolute", top: 24, right: 24 }}
            >
              <LessonPreviewButton code={previewCode} />
            </div>
          )}
          <div className={previewCode ? "pt-12" : ""}>{children}</div>
        </div>
      </div>

    </div>
  );
}