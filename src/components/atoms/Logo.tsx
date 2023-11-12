/** @format */

type LogoProps = {
  FA6Icon: JSX.Element;
  className?: string;
};

export default function Logo({ FA6Icon, className }: LogoProps) {
  return (
    <div
      className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-tr from-color-blue via-color-purple to-color-red text-4 text-color-white md:h-14 md:w-14 md:text-6 ${className}`}
    >
      {FA6Icon}
    </div>
  );
}
