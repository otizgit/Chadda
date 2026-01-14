import MessageContainer from "@/components/interface/messages/MessageContainer";
import MessagesAsideContainer from "@/components/interface/messages/MessagesAsideContainer";
import SideBar from "@/components/SideBar";

export default async function page() {
  return (
    <div className="flex min-h-screen max-width overflow-hidden fixed inset-0 bg-background">
      <div className="w-16 shrink-0 overflow-y-auto">
        <SideBar />
      </div>

      <div className="w-80 shrink-0 overflow-y-auto">
        <MessagesAsideContainer />
      </div>

      <div className="flex-1 bg-dark-grey overflow-y-auto ml-1 mt-14 rounded-tl-4xl">
        <MessageContainer />
      </div>
    </div>
  );
}
