import Header from "@/components/Header";

export default function MessageContainer() {
  return (
    <div className="font-sans pt-4 flex-1 flex flex-col">
      <Header />
      <div className="flex-1 bg-light-grey border-[#e1e1e1] border-[0.1em] rounded-tl-3xl overflow-y-auto"></div>
    </div>
  );
}
