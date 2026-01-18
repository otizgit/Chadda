"use client";
import type { ReactNode } from "react";
import { useModalStore } from "@/store/useModalStore";

export default function Modal({ children }: { children: ReactNode }) {
  const toggle = useModalStore((state) => state.toggle);
  const isOpen = useModalStore((state) => state.isOpen);

  if (!isOpen) return null;

  return (
    <div className="font-sans py-10 fixed z-30 inset-0 grid place-items-center">
      <span onClick={toggle} className="absolute inset-0 bg-black/70 backdrop-blur-sm"></span>
      {children}
    </div>
  );
}
