import { Icon } from "@iconify/react";
import MessagesSearch from "./MessagesSearch";
import MessagesLinkWrapper from "./MessagesLinkWrapper";

export default function MessagesAsideContainer() {
  return (
    <div className="fixed top-0 bottom-0 left-17 py-4 px-4 font-sans w-80 overflow-x-auto">
      <div className="custom-flex gap-3 mb-3">
        <h1 className="text-[1.2rem] font-semibold tracking-tight">Messages</h1>
        <button className="py-2 rounded-lg px-0.5 group hover:bg-primary/15 focus-within:bg-primary/15">
          <Icon
            icon="uil:ellipsis-v"
            className="text-[1.3rem] text-text-color group-hover:text-primary group-focus-within:text-primary"
          />
        </button>
      </div>
      <MessagesSearch />

      <div>
        <MessagesLinkWrapper title="Pinned messages" icon="hugeicons:pin" />

        <div className="mb-5 input-shadow h-[0.08em] bg-[#e1e1e1] flex-1"></div>

        <MessagesLinkWrapper title="All messages" icon="fluent:chat-multiple-24-regular" />
      </div>
    </div>
  );
}
