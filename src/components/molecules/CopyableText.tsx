/** @format */

import { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import CopiedToClipboardPopover from "./CopiedToClipboardPopover";

type CopyableTextProps = {
  textContent: string;
  as: keyof JSX.IntrinsicElements;
};

export default function CopyableText({ textContent, as }: CopyableTextProps) {
  const [isCopied, copyToClipboard] = useCopyToClipboard();
  const [showPopover, setShowPopover] = useState(false);

  const handleClick = () => {
    copyToClipboard(textContent);
    setShowPopover(true);
    setTimeout(() => setShowPopover(false), 2000); // hide after 2 seconds
  };

  const HTMLTag = as;

  return (
    <div onClick={handleClick} className="relative">
      <HTMLTag className="block cursor-pointer text-3.25/[1.4615em] text-color-ash transition-all hover:font-medium md:text-3.5/[1.4286em]">
        {textContent}
      </HTMLTag>
      <CopiedToClipboardPopover isOpen={showPopover} />
    </div>
  );
}
