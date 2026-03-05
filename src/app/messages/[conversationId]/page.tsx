import { getCurrentUser } from "../../../../lib/auth/getCurrentUser";
import MessageList from "@/components/messages/MessageList";
import MessageInput from "@/components/messages/MessageInput";
import { prisma } from "../../../../lib/prisma";
import Header from "@/components/layout/Header";

export default async function page({
  params,
}: {
  params: Promise<{ conversationId: string }>;
}) {
  const user = await getCurrentUser();
  const { conversationId } = await params;
  if (!user) return null;

  const conversation = await prisma.conversation.findUnique({
    where: { id: conversationId },
    include: {
      participants: {
        include: {
          user: true,
        },
      },
    },
  });

  const otherUser = conversation?.participants.find(
    (p) => p.userId !== user.id,
  );

  const { displayName, image } = otherUser?.user || {};

  return (
    <div className="font-sans flex flex-col w-full h-full relative">
      <Header user={{ displayName, image }} />

      <div className="h-[calc(100%-3.625rem)] bg-light-grey border-[#e1e1e1] border-[0.1em] rounded-tl-2xl overflow-y-auto">
        <MessageList conversationId={conversationId} currentUserId={user.id} />

        <MessageInput conversationId={conversationId} />
      </div>
    </div>
  );
}
