/** @format */

import { Transition } from "@headlessui/react";
import CircleCheckIcon from "../atoms/CircleCheckIcon";
import Text from "../atoms/Text";

export default function CopiedToClipboardPopover({ isOpen }: { isOpen: boolean }) {
  return (
    <Transition
      appear
      show={isOpen}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-50"
      className="absolute left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-lg bg-color-white p-6 shadow-lg"
    >
      <CircleCheckIcon />
      <Text as="p" textContent="Copied to clipboard!" />
    </Transition>
  );
}
