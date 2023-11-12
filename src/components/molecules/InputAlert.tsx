/** @format */

import AlertIcon from "../atoms/AlertIcon";
import AlertText, { AlertTextProps } from "../atoms/AlertText";

export default function InputAlert({ textContent }: AlertTextProps) {
  return (
    <div className="absolute bottom-3.5 right-4 flex items-center gap-2">
      <AlertIcon />
      <AlertText textContent={textContent} />
    </div>
  );
}
