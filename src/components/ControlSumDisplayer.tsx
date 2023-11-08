/** @format */

import { DisplayersProps } from "@/types/displayers";

export default function ControlSumDisplayer({ hashAlgo, signParams }: DisplayersProps) {
  return (
    <div className="mb-4 space-y-0.75 transition-all md:space-y-0.5">
      <p className="text-3.25/[1.4615em] font-bold -tracking-[0.181px] text-color-graphite transition-all md:text-3.5/[1.4286em] md:-tracking-[0.194px]">
        Control Sum
      </p>
      <p className="break-words text-3.25/[1.4615em] text-color-ash transition-all md:text-3.5/[1.4286em]">
        {hashAlgo === "SHA384" && <>{JSON.stringify(signParams)}</>}
        {hashAlgo === "MD5" && <>{Object.values(signParams).join("|")}</>}
      </p>
    </div>
  );
}
