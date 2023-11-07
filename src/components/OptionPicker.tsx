/** @format */

import { Dispatch, SetStateAction, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown, FaCheck } from "react-icons/fa6";
import { Endpoint } from "./SignForm";

type OptionPickerProps = {
  options: Endpoint[];
  selectedOption: Endpoint;
  setSelectedOption: Dispatch<SetStateAction<Endpoint>>;
};

export default function OptionPicker({ options, selectedOption, setSelectedOption }: OptionPickerProps) {
  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      <div className="mb-6">
        <div className="mb-4 space-y-0.75 transition-all md:space-y-0.5">
          <p className="text-3.25/[1.4615em] font-bold -tracking-[0.181px] text-color-graphite transition-all md:text-3.5/[1.4286em] md:-tracking-[0.194px]">
            Endpoint
          </p>
          <p className="text-3.25/[1.4615em] text-color-ash transition-all md:text-3.5/[1.4286em]">
            Choose an endpoint for which sign will be calculated
          </p>
        </div>
        <Listbox.Button className="flex w-full items-center justify-between rounded bg-color-pearl px-4 pb-3.75 pt-3.5 transition-all md:px-6 md:py-3.25">
          <span className="text-3.25/[1.4615em] text-color-graphite transition-all md:text-3.75/[1.4666em]">
            {selectedOption.name}
          </span>
          <div className="block text-2.5 text-color-blue transition-all ui-open:rotate-180">
            <FaChevronDown />
          </div>
        </Listbox.Button>
        <div className="relative">
          <Transition as={Fragment} leave="transition ease-in" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute inset-x-0 top-4 rounded-lg bg-color-white drop-shadow-lg transition-all">
              {options.map((option, index) => (
                <Listbox.Option
                  key={index}
                  value={option}
                  className="group flex cursor-pointer items-center justify-between border-b border-color-grey/20 px-4 py-3 last:border-color-grey/0 md:px-6 md:py-3.25"
                >
                  <span className="text-3.25/[1.4615em] text-color-ash transition-all group-hover:text-color-purple md:text-4/[1.4375em]">
                    {option.name}
                  </span>
                  <div className="hidden text-3 text-color-purple ui-selected:block">
                    <FaCheck />
                  </div>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </div>
    </Listbox>
  );
}
