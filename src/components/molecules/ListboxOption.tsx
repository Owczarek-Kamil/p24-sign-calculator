/** @format */

import { Listbox } from "@headlessui/react";
import CheckIcon from "../atoms/CheckIcon";

type ListboxOptionProps = {
  value: any;
  label: string;
};

export default function ListboxOption({ value, label }: ListboxOptionProps) {
  return (
    <Listbox.Option
      value={value}
      className="flex cursor-pointer items-center justify-between border-b border-color-grey/20 px-4 py-3 transition-[font-weight,color] last:border-b-0 hover:text-color-purple ui-active:font-medium ui-active:text-color-purple ui-not-active:font-normal ui-not-active:text-color-ash md:px-6 md:py-3.25"
    >
      <span className="text-3.25/[1.4615em] md:text-4/[1.4375em]">{label}</span>
      <CheckIcon />
    </Listbox.Option>
  );
}
