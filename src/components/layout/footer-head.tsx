import { Icons } from "../icons";
import Socials from "./socials";

export default function FooterHead() {
  return (
    <div>
      <h5 className="items-center gap-2 text-balance text-3xl font-medium leading-[3rem] text-violet-200">
        A Friendly
        <span className="mx-3 inline-flex text-primary">
          <Icons.heart />
        </span>
        Digital Marketing Company in Dubai
      </h5>
      <Socials />
    </div>
  );
}
