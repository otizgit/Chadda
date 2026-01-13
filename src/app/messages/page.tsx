import MessageContainer from "@/components/interface/messages/MessageContainer";
import MessagesAsideContainer from "@/components/interface/messages/MessagesAsideContainer";
import SideBar from "@/components/SideBar";

export default async function page() {
  return (
    <div className="relative min-h-screen max-width">
      <div>
        <SideBar />
        <MessagesAsideContainer />
      </div>
      <MessageContainer />
    </div>
  );
}
