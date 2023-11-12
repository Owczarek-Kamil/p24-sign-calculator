/** @format */

type SubtextProps = { textContent: string; as: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" };

export default function Subtext({ textContent, as }: SubtextProps) {
  const HTMLTag = as;

  return <HTMLTag className="block text-3.25/[1.4615em] text-color-ash md:text-3.5/[1.4286em]">{textContent}</HTMLTag>;
}
