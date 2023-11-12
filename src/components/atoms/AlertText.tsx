/** @format */

export type AlertTextProps = {
  textContent: string;
};

export default function AlertText({ textContent }: AlertTextProps) {
  return (
    <p role="alert" className="block text-3.25/[1.4615em] text-color-red md:text-3.5/[1.4286em]">
      {textContent}
    </p>
  );
}
