"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type MessageInputProps = {
  conversationId: string;
};

export default function MessageInput({ conversationId }: MessageInputProps) {
  const router = useRouter();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      setLoading(true);

      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversationId,
          content: text,
        }),
      });

      setText("");
      router.refresh();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={sendMessage}
      className="border-t p-3 flex items-center gap-2"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 rounded-full border px-4 py-2 text-sm focus:outline-none"
      />

      <button
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm"
      >
        Send
      </button>
    </form>
  );
}
