import type { ReactNode } from "react";
import NavSideBar from "./_components/NavSideBar";
import ConversationPanel from "./_components/ConversationPanel";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen max-width overflow-hidden fixed inset-0 bg-background">
      <div className="w-14 shrink-0 overflow-y-auto">
        <NavSideBar />
      </div>

      <div className="w-80 shrink-0 overflow-y-auto overflow-x-hidden">
        <ConversationPanel />
      </div>

      <div className="flex-1 bg-background ml-1 flex">
        {children}
        {/* <MessageContainer /> */}
      </div>

      {/* <div className="w-80 bg-background">
          </div> */}
    </div>
  );
}
