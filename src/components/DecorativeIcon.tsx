/** @format */

import { FaCalculator } from "react-icons/fa6";

export default function DecorativeIcon() {
  return (
    <div className="absolute left-6 top-0 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-tr from-color-blue via-color-purple to-color-red text-4 text-color-white transition-all md:left-10.5 md:h-14 md:w-14 md:text-6">
      <FaCalculator />
    </div>
  );
}
