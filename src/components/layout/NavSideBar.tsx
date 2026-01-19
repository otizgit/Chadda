"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import sideBarData from "@/assets/data/sideBarData";
import { usePathname } from "next/navigation";

export default function NavSideBar() {
  const pathName = usePathname();

  return (
    <section className="font-sans absolute top-0 left-0 bottom-0 border-r-[0.1em] border-[#e1e1e1] z-4">
      <div className="bg-[#EDEDED] input-shadow px-2 py-5 custom-flex flex-col h-full">
        <div>
          <button className="plain-flex gap-2 mb-6 w-fit mx-auto">
            {/* <Icon
              icon="fluent:chat-multiple-28-filled"
              className="text-[#4A5FDC] text-[1.9rem]"
            /> */}
            <p className="font-semibold text-[0.9rem] text-primary! italic">
              Logo
            </p>
          </button>

          <div>
            {sideBarData.slice(0, 4).map((iconData) => {
              return (
                <div key={iconData.helper} className="relative group">
                  <Link
                    href={iconData.link}
                    className={`icon-style ${
                      pathName.startsWith(iconData.link)
                        ? "bg-background shadow-sm"
                        : ""
                    }`}
                  >
                    <Icon
                      icon={
                        pathName.startsWith(iconData.link)
                          ? iconData.iconActive
                          : iconData.icon
                      }
                      className={`text-[1.3rem] group-hover:text-primary group-focus-within:text-primary ${
                        pathName.startsWith(iconData.link)
                          ? "text-primary"
                          : "text-text-color"
                      }`}
                    />
                  </Link>

                  <p className="z-3 absolute text-text-color left-[calc(100%+0.7rem)] rounded-lg py-1 px-2 text-smallest bg-background border-[0.15em] border-gray-300 shadow-sm top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
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
                      ? "bg-background shadow-sm"
                      : ""
                  }`}
                >
                  <Icon
                    icon={
                      pathName.startsWith(iconData.link)
                        ? iconData.iconActive
                        : iconData.icon
                    }
                    className={`text-[1.3rem] group-hover:text-primary group-focus-within:text-primary ${
                      pathName.startsWith(iconData.link)
                        ? "text-primary"
                        : "text-text-color"
                    }`}
                  />
                </Link>

                <p className="z-3 absolute text-text-color left-[calc(100%+0.7rem)] rounded-lg py-1 px-2 text-smallest bg-background border-[0.15em] border-gray-300 shadow-sm top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {iconData.helper}
                </p>
              </div>
            );
          })}

          <Link href="/" className="icon-style rounded-full mb-0 bg-primary btn-style button-shadow">
            <Icon
              icon="solar:user-bold"
              className="text-background text-[1.2rem]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
