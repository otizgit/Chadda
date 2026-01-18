"use client";
import { useUserSearchModalStore } from "@/store/useUserSearchModalStore";

export default function UserSearchModal() {
  const toggle = useUserSearchModalStore((state) => state.toggle);
  const isOpen = useUserSearchModalStore((state) => state.isOpen);

  if (!isOpen) return null;

  return (
    <section className="fixed z-30 inset-0 grid place-items-center">
      <span onClick={toggle} className="absolute inset-0 bg-black/60"></span>

      <div className="relative z-35 w-[90%] sm:w-90 bg-light-grey">
        
      </div>
    </section>
  );
}
