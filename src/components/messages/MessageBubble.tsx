"use client";
import clsx from "clsx";

type MessageBubbleProps = {
  message: {
    id: string;
    content: string;
    createdAt: string;
    sender: {
      id: string;
      username: string;
      image?: string | null;
    };
  };
  currentUserId: string;
};

export default function MessageBubble({
  message,
  currentUserId,
}: MessageBubbleProps) {
  const isMine = message.sender.id === currentUserId;

  return (
    <div
      className={clsx(
        "flex w-full mb-2",
        isMine ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={clsx(
          "max-w-[70%] rounded-[11px] px-3 py-2",
          isMine
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-200 text-black rounded-bl-none",
        )}
      >
        <p>{message.content}</p>

        <span className="block text-[10px] mt-1 opacity-70 text-right">
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
