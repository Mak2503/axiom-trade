import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-1 flex-row min-h-0 overflow-hidden relative my-10">
      <div className="flex flex-1 min-h-0 overflow-auto">
        <div className="flex flex-col w-full h-full gap-4 py-6 px-4 lg:px-6 justify-start items-center overflow-hidden">
          {/* Header */}
          <Header />
        </div>
      </div>
    </div>
  );
}
