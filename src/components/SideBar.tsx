"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import sideBarData from "@/assets/data/sideBarData";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathName = usePathname();

  return (
    <section className="font-sans fixed top-0 left-0 bottom-0 p-2">
      <div className="bg-[#E4E0DD] px-2 py-3 rounded-xl custom-flex flex-col h-full">
        <div>
          <button className="plain-flex gap-2 mb-6 w-fit mx-auto">
            {/* <Icon
              icon="fluent:chat-multiple-28-filled"
              className="text-[#4A5FDC] text-[1.9rem]"
            /> */}
            <p className="font-semibold text-[0.9rem] text-primary!">Logo</p>
          </button>

          <div>
            {sideBarData.slice(0, 4).map((iconData) => {
              return (
                <div key={iconData.helper} className="relative group">
                  <Link
                    href={iconData.link}
                    className={`icon-style ${
                      pathName.startsWith(iconData.link)
                        ? "bg-primary/15 input-shadow"
                        : ""
                    }`}
                  >
                    <Icon
                      icon={
                        pathName.startsWith(iconData.link)
                          ? iconData.iconActive
                          : iconData.icon
                      }
                      className={`text-[1.1rem] group-hover:text-primary group-focus-within:text-primary ${
                        pathName.startsWith(iconData.link)
                          ? "text-primary"
                          : "text-text-color"
                      }`}
                    />
                  </Link>

                  <p className="absolute text-text-color left-[calc(100%+0.7rem)] rounded-lg py-1 px-2 text-smallest bg-white shadow-sm top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {iconData.helper}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          {sideBarData.slice(4).map((iconData) => {
            return (
              <div key={iconData.helper} className="relative group">
                <Link
                  href={iconData.link}
                  className={`icon-style ${
                    pathName.startsWith(iconData.link)
                      ? "bg-primary/15 input-shadow"
                      : ""
                  }`}
                >
                  <Icon
                    icon={
                      pathName.startsWith(iconData.link)
                        ? iconData.iconActive
                        : iconData.icon
                    }
                    className={`text-[1.1rem] group-hover:text-primary group-focus-within:text-primary ${
                      pathName.startsWith(iconData.link)
                        ? "text-primary"
                        : "text-text-color"
                    }`}
                  />
                </Link>

                <p className="absolute text-text-color left-[calc(100%+0.7rem)] rounded-lg py-1 px-2 text-smallest bg-white shadow-sm top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {iconData.helper}
                </p>
              </div>
            );
          })}

          <Link href="/" className="icon-style mb-0 bg-primary">
            <Icon icon="solar:user-bold" className="text-white text-[1.1rem]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
