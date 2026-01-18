"use client";
import { useEffect, useState, useRef } from "react";
import MessageBubble from "./MessageBubble";

type Message = {
  id: string;
  content: string;
  createdAt: string;
  sender: {
    id: string;
    username: string;
    image?: string | null;
  };
};

export default function MessageList({
  conversationId,
  currentUserId,
}: {
  conversationId: string;
  currentUserId: string;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  console.log(messages);

  useEffect(() => {
    async function fetchMessages() {
      const res = await fetch(`/api/messages?conversationId=${conversationId}`);
      const data = await res.json();
      setMessages(data);
    }

    fetchMessages();
  }, [conversationId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.length
        ? messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              message={msg}
              currentUserId={currentUserId}
            />
          ))
        : null}

      <div ref={bottomRef} />
    </div>
  );
}
