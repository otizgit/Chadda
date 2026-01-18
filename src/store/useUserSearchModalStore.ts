import { create } from "zustand";

type ModalState = {
  isOpen: boolean;
  toggle: () => void;
};

export const useUserSearchModalStore = create<ModalState>((set) => ({
  isOpen: false,

  toggle: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));
