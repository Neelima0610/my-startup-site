import LearningSidebar from "./LearningSideBar";

export default function LearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto flex gap-8">

      {/* Sidebar */}
      <LearningSidebar />

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6 md:p-10">
          {children}
        </div>
      </div>

    </div>
  );
}