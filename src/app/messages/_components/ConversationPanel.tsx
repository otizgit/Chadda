import { Icon } from "@iconify/react";
import UserSearch from "./UserSearch";
import ConversationList from "./ConversationList";

export default function ConversationPanel() {
  return (
    <div className="pb-4 font-sans">
      <div className="bg-background pt-4 px-4 pr-3 pb-5">
        <div className="custom-flex gap-3 mb-3">
          <h1 className="text-[1.2rem] font-semibold tracking-tight">
            Messages
          </h1>
          <button className="relative z-10 w-9 h-9 grid place-items-center rounded-[11px] group hover:bg-light-grey focus-within:bg-light-grey hover:shadow-sm focus-within:shadow-sm">
            <Icon
              icon="solar:pen-new-square-linear"
              className="text-[1.2rem] text-text-color group-hover:text-primary group-focus-within:text-primary"
            />

            <p className="z-3 absolute text-text-color right-0 -bottom-full rounded-lg py-1 px-2 text-smallest bg-background border-[0.15em] border-gray-300 shadow-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Start new conversation
            </p>
          </button>
        </div>
        <UserSearch />
      </div>

      <div className="px-4">
        <ConversationList />
      </div>
    </div>
  );
}
