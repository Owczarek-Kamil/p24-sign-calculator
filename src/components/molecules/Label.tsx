/** @format */

import Text from "../atoms/Text";

export type LabelProps = {
  label: string;
  htmlFor: string;
};

export default function Label({ label, htmlFor }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="inline-block space-y-0.75 md:space-y-0.5">
      <Text as="span" textContent={label} />
    </label>
  );
}
