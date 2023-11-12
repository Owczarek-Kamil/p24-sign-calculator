/** @format */

import Text from "../atoms/Text";
import Subtext from "../atoms/Subtext";

type ControlSumLabelProps = {
  signParams: Record<string, string | number>;
  hashAlgo: "SHA384" | "MD5";
};

export default function ControlSumLabel({ signParams, hashAlgo }: ControlSumLabelProps) {
  const controlSumTemplate =
    hashAlgo === "SHA384"
      ? JSON.stringify(signParams)
      : `${Object.keys(signParams).join("|")} : ${Object.values(signParams).join("|")}`;

  return (
    <div className="flex flex-col gap-2 break-words">
      <Text as="p" textContent="Control Sum" />
      <Subtext as="p" textContent={controlSumTemplate} />
    </div>
  );
}
