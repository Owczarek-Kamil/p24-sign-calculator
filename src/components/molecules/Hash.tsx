/** @format */

import CryptoJS from "crypto-js";
import Text from "../atoms/Text";
import CopyableText from "./CopyableText";

type HashProps = {
  signParams: Record<string, string | number>;
  hashAlgo: "SHA384" | "MD5";
};

export default function Hash({ hashAlgo, signParams }: HashProps) {
  const sign =
    hashAlgo === "SHA384"
      ? CryptoJS.SHA384(JSON.stringify(signParams)).toString()
      : CryptoJS.MD5(Object.values(signParams).join("|")).toString();

  return (
    <div className="flex flex-col gap-2">
      <Text as="p" textContent="Sign" />
      <CopyableText textContent={sign} as="p" />
    </div>
  );
}
