import MessagesAsideContainer from "@/components/interface/messages/MessagesAsideContainer";
import SideBar from "@/components/SideBar";

export default async function page() {
  return (
    <div className="relative">
      <div>
        <SideBar />
        <MessagesAsideContainer />
      </div>
      <div></div>
    </div>
  );
}
