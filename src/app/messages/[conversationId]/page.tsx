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
    <div className="flex flex-col h-full">
      <MessageList conversationId={conversationId} currentUserId={user.id} />

      <MessageInput conversationId={conversationId} />
    </div>
  );
}
