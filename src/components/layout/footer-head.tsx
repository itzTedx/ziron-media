import { Icons } from "../icons";
import Socials from "./socials";

export default function FooterHead() {
  return (
    <div>
      <h5 className="items-center gap-2 text-balance text-3xl font-medium leading-[3rem] text-violet-300 md:text-4xl">
        A Friendly
        <span className="mx-3 inline-flex text-primary">
          <Icons.heart />
        </span>
        Digital
        <br /> Marketing Company in Dubai
      </h5>
      <Socials />
    </div>
  );
}
