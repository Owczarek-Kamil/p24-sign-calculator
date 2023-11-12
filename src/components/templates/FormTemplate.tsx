/** @format */

import Logo from "../atoms/Logo";
import MainHeading from "../atoms/MainHeading";
import FormController from "../organisms/FormController";
import { FaCalculator } from "react-icons/fa6";

export default function FormTemplate() {
  return (
    <form className="relative flex w-full max-w-layout flex-col gap-6 rounded-lg bg-color-white px-6 pb-6 pt-10 drop-shadow-xl md:px-10.5 md:py-10">
      <Logo FA6Icon={<FaCalculator />} className="absolute left-6 top-0 -translate-y-1/2 md:left-10.5" />
      <MainHeading textContent="P24 | Sign calculator" />
      <FormController />
    </form>
  );
}
