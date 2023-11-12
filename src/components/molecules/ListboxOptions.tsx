/** @format */

import { Listbox, Transition } from "@headlessui/react";

type ListboxOptionsProps = {
  children: React.ReactNode;
};

export default function ListboxOptions({ children }: ListboxOptionsProps) {
  return (
    <Transition
      enterFrom="opacity-0"
      enter="transition ease-in"
      enterTo="opacity-100"
      leaveFrom="opacity-100"
      leave="transition ease-in"
      leaveTo="opacity-0"
      className="absolute inset-x-0 z-10"
    >
      <Listbox.Options className="rounded-lg bg-color-white outline-none drop-shadow-lg">{children}</Listbox.Options>
    </Transition>
  );
}
