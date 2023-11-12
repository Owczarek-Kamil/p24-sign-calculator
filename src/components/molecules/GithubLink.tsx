/** @format */

import { FaGithub } from "react-icons/fa6";
export default function GithubLink() {
  return (
    <a
      href="https://github.com/Owczarek-Kamil/p24-sign-calculator"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute right-0 top-0 grid h-10 w-10 place-items-center rounded-lg text-6 outline-none transition-all focus-visible:outline-offset-0 focus-visible:outline-color-purple"
    >
      <FaGithub />
    </a>
  );
}
