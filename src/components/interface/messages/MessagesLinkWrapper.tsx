import { Icon } from "@iconify/react";
import MessageLink from "./MessageLink";

type MessageLinkWrapperProps = {
  title: string;
  icon: string;
};

export default function MessagesLinkWrapper({
  title,
  icon,
}: MessageLinkWrapperProps) {
  return (
    <div>
      <div className="plain-flex gap-2 mb-3">
        <Icon icon={icon} className="text-[1.1rem] text-gray-600" />
        <h2 className="text-small font-medium text-gray-600!">{title}</h2>
      </div>

      <div className="flex flex-col gap-1 mb-5">
        <MessageLink />
        <MessageLink />
        <MessageLink />
        <MessageLink />
        <MessageLink />
      </div>
    </div>
  );
}
