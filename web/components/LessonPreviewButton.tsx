"use client";

type PlaygroundCode = {
  html: string;
  css: string;
  js: string;
};

export default function LessonPreviewButton({
  code,
}: {
  code: PlaygroundCode;
}) {
  const openPreview = () => {
    sessionStorage.setItem("playground-code", JSON.stringify(code));
    window.open("/playground", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={openPreview}
      className="rounded-md border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-800 transition hover:bg-cyan-100"
      title="Open this lesson in the live HTML playground"
    >
      Preview ↗
    </button>
  );
}