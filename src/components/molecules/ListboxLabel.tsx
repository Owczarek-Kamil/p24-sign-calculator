/** @format */

import { Listbox } from "@headlessui/react";
import Text from "../atoms/Text";
import Subtext from "../atoms/Subtext";

type ListboxLabelProps = {
  mainText: string;
  subtext: string;
};

export default function ListboxLabel({ mainText, subtext }: ListboxLabelProps) {
  return (
    <Listbox.Label className="space-y-0.75 md:space-y-0.5">
      <Text as="span" textContent={mainText} />
      <Subtext as="span" textContent={subtext} />
    </Listbox.Label>
  );
}
