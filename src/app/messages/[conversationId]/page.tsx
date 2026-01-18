import { getCurrentUser } from "../../../../lib/auth/getCurrentUser";
import MessageList from "@/components/messages/MessageList";
import MessageInput from "@/components/messages/MessageInput";

export default async function page({
  params,
}: {
  params: Promise<{ conversationId: string }>;
}) {
  const user = await getCurrentUser();
  const { conversationId } = await params;
  if (!user) return null;

  return (
    <div className="flex flex-col w-full h-full">
      <div className="h-14.5 flex items-center">{/* <Header /> */}</div>
      <div className="grid place-items-center flex-1 bg-light-grey border-[#e1e1e1] border-[0.1em] rounded-tl-2xl overflow-y-auto">
        <MessageList conversationId={conversationId} currentUserId={user.id} />

        <MessageInput conversationId={conversationId} />
      </div>
    </div>
  );
}
