import { Icons } from "../icons";
import { PartnerLogo } from "./partners-logo";
import Socials from "./socials";

export function FooterHead() {
  return (
    <div className="col-span-2 w-fit">
      <h5 className="items-center gap-2 text-balance text-3xl font-medium leading-[3rem] text-violet-200 md:text-4xl lg:text-5xl">
        A Friendly
        <span className="mx-3 inline-flex animate-bounce text-primary">
          <Icons.heart className="size-6" />
        </span>
        Digital
        <br /> Marketing Company in Dubai
      </h5>
      <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <Socials />
        <PartnerLogo className="dark gap-6" height={30} width={80} />
      </div>
    </div>
  );
}
