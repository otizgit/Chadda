import { Icon } from "@iconify/react";

export default async function page() {
  return (
    <div className="font-sans flex-1 flex flex-col">
      <div className="h-14.5 flex items-center">{/* <Header /> */}</div>
      <div className="grid place-items-center flex-1 bg-light-grey border-[#e1e1e1] border-[0.1em] rounded-tl-2xl overflow-y-auto">
        <div>
          <h1 className="text-[1.3rem] font-medium tracking-tight text-center mb-2">
            No messages yet!
          </h1>
          <p className="text-small text-gray-600! text-center mb-4">
            Start a conversation with someone to begin <br /> chatting. Your
            messages will appear here.
          </p>
          <button className="btn-style w-fit mx-auto button-shadow px-3">
            <Icon
              icon="solar:pen-new-square-linear"
              className="text-[1.2rem] text-white"
            />
            <p className="text-small text-white! font-medium">
              Start new conversation
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
