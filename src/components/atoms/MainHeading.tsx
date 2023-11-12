/** @format */

type MainHeadingProps = {
  textContent: string;
  className?: string;
};

export default function MainHeading({ textContent, className }: MainHeadingProps) {
  return (
    <h1
      className={`text-4.5/[1.4444em] font-bold -tracking-[0.25px] text-color-graphite md:text-6/[1.4583em] md:-tracking-[0.333px] ${className}`}
    >
      {textContent}
    </h1>
  );
}
