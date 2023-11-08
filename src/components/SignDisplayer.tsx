/** @format */

import { Dialog, Transition } from "@headlessui/react";
import { DisplayersProps } from "@/types/displayers";
import { useCopyToClipboard } from "usehooks-ts";
import { useState, useEffect, Fragment } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import CryptoJS from "crypto-js";

export default function SignDisplayer({ hashAlgo, signParams }: DisplayersProps) {
  const [value, copy] = useCopyToClipboard();
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const sign =
    hashAlgo === "SHA384"
      ? CryptoJS.SHA384(JSON.stringify(signParams)).toString()
      : CryptoJS.MD5(Object.values(signParams).join("|")).toString();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => closeModal(), 1500);
    }
  }, [isOpen]);

  return (
    <>
      <div className="space-y-0.75 transition-all md:space-y-0.5">
        <p className="text-3.25/[1.4615em] font-bold -tracking-[0.181px] text-color-graphite transition-all md:text-3.5/[1.4286em] md:-tracking-[0.194px]">
          Sign
        </p>
        <p
          onClick={() => {
            copy(sign);
            openModal();
          }}
          className="cursor-pointer break-words text-3.25/[1.4615em] text-color-ash transition-all hover:font-medium md:text-3.5/[1.4286em]"
        >
          {sign}
        </p>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 grid items-end justify-items-center overflow-y-auto">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-50"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-50"
            >
              <Dialog.Panel className="mb-6 flex items-center gap-4 rounded-lg bg-color-white p-6 shadow-lg">
                <div className="text-6 text-color-purple">
                  <FaRegCircleCheck />
                </div>
                <p className="block text-3.25/[1.4615em] font-bold -tracking-[0.181px] text-color-graphite transition-all md:text-3.5/[1.4286em] md:-tracking-[0.194px]">
                  Copied to clipboard!
                </p>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
