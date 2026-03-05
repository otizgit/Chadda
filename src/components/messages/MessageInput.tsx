"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

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
      className="absolute border-[#e1e1e1] border-l-[0.1em] border-t-[0.1em] bottom-0 left-0 right-0 py-4 bg-background"
    >
      <div className="px-3 flex items-center gap-2">
        <button
          disabled={loading}
          className="px-2.5 btn-style2 button-shadow2 w-fit"
        >
          <Icon
            icon="mage:image-upload"
            className="text-[1.4rem] text-primary"
          />
        </button>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="resize-none input-style bg-light-grey placeholder:text-small flex-1 border-[#d3d3d3] py-3"
        />

        <button
          disabled={loading}
          className="px-2.5 rounded-[11px] bg-primary btn-style button-shadow w-fit"
        >
          <Icon icon="basil:send-solid" className="text-[1.4rem] text-white" />
        </button>
      </div>
    </form>
  );
}
