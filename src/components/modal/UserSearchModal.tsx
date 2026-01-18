"use client";
import { Icon } from "@iconify/react";
import UserSearch from "../messages/UserSearch";
import { useModalStore } from "@/store/useModalStore";

export default function UserSearchModal() {
  const toggle = useModalStore((state) => state.toggle);

  return (
    <div className="py-4 pb-6 px-3 relative z-35 w-[90%] sm:w-100 bg-light-grey rounded-[11px]">
      <div className="custom-flex mb-3">
        <h3 className="font-medium tracking-tight">New conversation</h3>
        <button className="w-9 h-9 grid place-items-center rounded-[11px] group" onClick={toggle}>
          <Icon
            icon="material-symbols:close-rounded"
            className="text-[1.8rem] text-[red] group-hover:scale-110 group-focus:scale-110 transition-all duration-200"
          />
        </button>
      </div>

      <UserSearch />
    </div>
  );
}
