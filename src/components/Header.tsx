import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="mb-5 pl-2 pr-6">
      <div className="custom-flex">
        <div className="plain-flex gap-1">
          <button className="w-10 h-10 grid place-items-center rounded-[11px]">
            <Icon
              icon="weui:back-filled"
              className="text-text-color text-[1.3rem]"
            />
          </button>

          <div className="plain-flex gap-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-linear-0 from-red-500 to-blue-500"></div>
              <div className="absolute -right-0.5 bottom-1 w-2.5 h-2.5 border-[0.1em] border-background rounded-full bg-secondary"></div>
            </div>
            <div>
              <h3 className="tracking-tight font-medium">John Doe</h3>
              <p className="text-smallest text-gray-500!">Online</p>
            </div>
          </div>
        </div>

        <div className="plain-flex gap-2">
          <button className="w-10 h-10 grid place-items-center rounded-[11px]">
            <Icon
              icon="hugeicons:pin"
              className="text-text-color text-[1.3rem]"
            />
          </button>
          <button className="w-10 h-10 grid place-items-center rounded-[11px]">
            <Icon
              icon="iconamoon:trash-light"
              className="text-text-color text-[1.3rem]"
            />
          </button>
          <button className="w-10 h-10 grid place-items-center rounded-[11px]">
            <Icon
              icon="iconamoon:trash-light"
              className="text-text-color text-[1.3rem]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
