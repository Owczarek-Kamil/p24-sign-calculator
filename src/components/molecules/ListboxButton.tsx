/** @format */

import { Listbox } from "@headlessui/react";
import ChevronIcon from "../atoms/ChevronIcon";

type ListboxButtonProps = {
  label: string;
};

export default function ListboxButton({ label }: ListboxButtonProps) {
  return (
    <Listbox.Button className="flex w-full items-center justify-between rounded bg-color-pearl px-4 pb-3.75 pt-3.5 outline-none transition-[outline-color] focus-visible:outline-color-purple md:px-6 md:py-3.25">
      <span className="block text-3.25/[1.4615em] text-color-graphite md:text-3.75/[1.4666em]">{label}</span>
      <ChevronIcon />
    </Listbox.Button>
  );
}
