"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type User = {
  id: string;
  username: string;
  displayName: string;
  image: string;
};

type Participant = {
  user: User;
};

type Conversation = {
  id: string;
  participants: Participant[];
};

export default function ConversationList() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchConversations() {
      try {
        const res = await fetch("/api/conversations");
        const data = await res.json();
        setConversations(data);
      } catch (err) {
        console.error("Failed to load conversations", err);
      } finally {
        setLoading(false);
      }
    }

    fetchConversations();
  }, []);

  if (loading) {
    return <p className="p-4 text-sm text-gray-500">Loading chats...</p>;
  }

  return (
    <div className="flex flex-col divide-y">
      {conversations.map((conversation) => {
        const otherParticipant = conversation.participants[0].user;

        return (
          <button
            key={conversation.id}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 text-left"
            onClick={() => {
              console.log("Open conversation", conversation.id);
            }}
          >
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              {otherParticipant.image && (
                <Image
                  src={otherParticipant.image}
                  alt={otherParticipant.username}
                  width={40}
                  height={40}
                />
              )}
            </div>

            <div>
              <p className="text-sm font-medium">
                {otherParticipant.displayName}
              </p>
              <p className="text-xs text-gray-500">
                @{otherParticipant.username}
              </p>
            </div>
          </button>
        );
      })}

      {conversations.length === 0 && (
        <p className="text-center text-small text-gray-500!">
          No conversations yet
        </p>
      )}
    </div>
  );
}
