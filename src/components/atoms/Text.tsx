/** @format */

type TextProps = { textContent: string; as: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" };

export default function Text({ textContent, as }: TextProps) {
  const HTMLTag = as;

  return (
    <HTMLTag className="block text-3.25/[1.4615em] font-bold -tracking-[0.181px] text-color-graphite md:text-3.5/[1.4286em] md:-tracking-[0.194px]">
      {textContent}
    </HTMLTag>
  );
}
