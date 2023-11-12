/** @format */

import { Dispatch, SetStateAction } from "react";
import { Listbox } from "@headlessui/react";
import ListboxOptions from "../molecules/ListboxOptions";
import ListboxOption from "../molecules/ListboxOption";
import ListboxButton from "../molecules/ListboxButton";
import ListboxLabel from "../molecules/ListboxLabel";
import { Endpoint } from "./FormController";

type EndpointPickerProps = {
  options: Endpoint[];
  selectedOption: Endpoint;
  setSelectedOption: Dispatch<SetStateAction<Endpoint>>;
};

export default function EndpointPicker({ options, selectedOption, setSelectedOption }: EndpointPickerProps) {
  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      <section className="relative space-y-2">
        <ListboxLabel mainText="Endpoint" subtext="Choose and endpoint for which sign will be calculated" />
        <ListboxButton label={selectedOption.name} />
        <ListboxOptions>
          {options.map((option, index) => (
            <ListboxOption key={index} value={option} label={option.name} />
          ))}
        </ListboxOptions>
      </section>
    </Listbox>
  );
}
