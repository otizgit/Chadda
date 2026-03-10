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
      {isMine ? (
        <button className="group-hover:grid hidden w-7 place-items-center rounded-lg">
          <Icon icon="uis:ellipsis-h" className="text-gray-500 text-[1.3rem]" />
        </button>
      ) : null}

      <div
        className={clsx(
          "max-w-[50%] relative rounded-lg px-3 py-2 pr-17",
          isMine ? "bg-primary text-white" : "bg-background text-black",
        )}
      >
        <p
          className={`${isMine ? "text-white!" : "text-text-color"} text-medium`}
        >
          {message.content}
        </p>

        <span
          className={`block absolute bottom-1 right-3 text-[0.62rem] ${isMine ? "text-[#f3f4f6]" : "text-gray-500"} text-right`}
        >
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      {!isMine ? (
        <button className="group-hover:grid hidden w-7 place-items-center rounded-lg">
          <Icon icon="uis:ellipsis-h" className="text-gray-500 text-[1.3rem]" />
        </button>
      ) : null}
    </div>
  );
}
