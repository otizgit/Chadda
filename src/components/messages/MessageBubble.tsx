"use client";
import { Icon } from "@iconify/react";
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
        "flex gap-2 w-full mb-0.5 group",
        isMine ? "justify-end" : "justify-start",
      )}
    >
      <button className="group-hover:grid hidden w-7 place-items-center rounded-lg">
        <Icon icon="uis:ellipsis-h" className="text-gray-500 text-[1.3rem]" />
      </button>

      <div
        className={clsx(
          "max-w-[50%] relative rounded-lg px-3 py-2 pr-17",
          isMine ? "bg-primary text-white" : "bg-gray-200 text-black",
        )}
      >
        <p className="text-white! text-medium font-medium">{message.content}</p>

        <span className="block absolute bottom-1 right-3 text-[0.62rem] text-[#f3f4f6] text-right">
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
