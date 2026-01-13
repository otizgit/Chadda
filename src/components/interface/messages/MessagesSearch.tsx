import { Icon } from "@iconify/react";
export default function MessagesSearch() {
  return (
    <div className="relative mb-5">
      <label htmlFor="search">
        <Icon
          icon="uil:search"
          className="text-[0.9rem] absolute top-1/2 -translate-y-1/2 left-2.5 text-[#5b5b5b]"
        />
      </label>
      <input
        id="search"
        type="text"
        className="input-style border-[#d3d3d3] input-shadow w-full pl-7"
        placeholder="Search..."
      />
    </div>
  );
}
