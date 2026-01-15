export default async function page() {
  return (
    <div className="font-sans flex-1 flex flex-col">
      <div className="h-16 flex items-center">{/* <Header /> */}</div>
      <div className="flex-1 bg-light-grey border-[#e1e1e1] border-[0.1em] rounded-tl-3xl overflow-y-auto">
        Select a conversation or search for a user
      </div>
    </div>
  );
}
