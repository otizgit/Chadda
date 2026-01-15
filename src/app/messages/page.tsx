export default async function page() {
  return (
    <div className="font-sans flex-1 flex flex-col">
      <div className="h-14.5 flex items-center">{/* <Header /> */}</div>
      <div className="grid place-items-center flex-1 bg-light-grey border-[#e1e1e1] border-[0.1em] rounded-tl-2xl overflow-y-auto">
        <p className="text-small">Select a conversation or search for a user</p>
      </div>
    </div>
  );
}
