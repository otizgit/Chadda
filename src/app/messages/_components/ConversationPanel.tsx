import { Icon } from "@iconify/react";
import UserSearch from "./UserSearch";
import ConversationList from "./ConversationList";

export default function ConversationPanel() {
  return (
    <div className="pb-4 font-sans">
      <div className="bg-background z-3 pt-4 px-4 pr-3 pb-5">
        <div className="custom-flex gap-3 mb-3">
          <h1 className="text-[1.2rem] font-semibold tracking-tight">
            Messages
          </h1>
          {/* <button className="py-2 rounded-lg px-0.5 group hover:bg-primary/15 focus-within:bg-primary/15">
            <Icon
              icon="uil:ellipsis-v"
              className="text-[1.3rem] text-text-color group-hover:text-primary group-focus-within:text-primary"
            />
          </button> */}
        </div>
        <UserSearch />
      </div>

      {/* <div className="px-4">
        <MessagesLinkWrapper title="Pinned messages" icon="hugeicons:pin" />

        <div className="mb-4 input-shadow h-[0.08em] bg-[#e1e1e1] flex-1"></div>

        <MessagesLinkWrapper
          title="All messages"
          icon="qlementine-icons:inbox-16"
        />
      </div> */}
    </div>
  );
}
