import { Icon } from "@iconify/react";
import Link from "next/link";

export default function SideBar() {
  return (
    <section className="bg-[#E4E0DD] fixed top-0 bottom-0 w-17 py-5 custom-flex flex-col">
      <div>
        <button className="plain-flex gap-2 mb-6 w-fit mx-auto">
          <Icon
            icon="fluent:chat-multiple-28-filled"
            className="text-primary text-[1.9rem]"
          />
        </button>

        <div>
          <button className="icon-style">
            <Icon
              icon="hugeicons:chat-feedback-01"
              className="text-black text-[1.2rem]"
            />
          </button>
          <button className="icon-style">
            <Icon
              icon="heroicons:user-group"
              className="text-black text-[1.2rem]"
            />
          </button>
          <button className="icon-style">
            <Icon
              icon="fluent:folder-32-regular"
              className="text-black text-[1.2rem]"
            />
          </button>
          <button className="icon-style">
            <Icon
              icon="solar:bookmark-linear"
              className="text-black text-[1.2rem]"
            />
          </button>
        </div>
      </div>

      <div>
        <button className="icon-style">
          <Icon
            icon="fluent:person-feedback-48-regular"
            className="text-black text-[1.4rem]"
          />
        </button>
        <button className="icon-style">
          <Icon
            icon="hugeicons:settings-01"
            className="text-black text-[1.2rem]"
          />
        </button>

        <Link href="/">
          <div className="icon-style bg-primary">
            <Icon icon="solar:user-bold" className="text-white text-[1.2rem]" />
          </div>
        </Link>
      </div>
    </section>
  );
}
