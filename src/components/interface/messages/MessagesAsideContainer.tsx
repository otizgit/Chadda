import { Icon } from "@iconify/react";

export default function MessagesAsideContainer() {
  return (
    <div className="fixed top-0 bottom-0 left-17 p-2 font-sans w-75">
      <div className="custom-flex gap-3 mb-3">
        <h1 className="text-[1.2rem] font-semibold tracking-tight">Messages</h1>
        <button className="py-2 rounded-lg px-0.5">
          <Icon
            icon="uil:ellipsis-v"
            className="text-[1.3rem] text-text-color"
          />
        </button>
      </div>

      <div className="relative">
        <label htmlFor="search">
          <Icon
            icon="uil:search"
            className="absolute top-1/2 -translate-y-1/2 left-2 text-[#5b5b5b]"
          />
        </label>
        <input
          id="search"
          type="text"
          className="input-style border-[#d3d3d3] input-shadow w-full pl-7"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
