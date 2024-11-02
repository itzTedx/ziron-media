import { IconPlus } from "@tabler/icons-react";

import EnquiryForm from "./enquiry-form";

export const Hero = () => {
  return (
    <section className="container gap-4 py-6 md:grid md:grid-cols-12">
      <div className="col-span-6 flex flex-col justify-between py-12">
        <div className="space-y-4">
          <h1 className="text-pretty font-monaSans text-5xl tracking-tight">
            <span className="text-primary">Grow and boost</span> your business
            using a{" "}
            <span className="font-valverde text-secondary">
              data driven digital strategy
            </span>
          </h1>
          <p className="text-balance">
            If you&apos;re looking to elevate your business with effective
            digital marketing solutions, you&apos;re in the right place. Our
            team of experts is here to help you grow, engage, and succeed in
            today&apos;s competitive online landscape.
          </p>
        </div>
        <ul className="flex gap-2 pt-4">
          <li className="flex gap-2">
            <div className="flex size-10 items-center justify-center rounded-full border">
              I
            </div>
            <p className="flex h-10 items-center gap-1 rounded-full border px-6 font-medium">
              <IconPlus className="size-4" />
              100 <span className="font-bold">Successful</span> projects
            </p>
          </li>
          <li className="flex gap-2">
            <div className="flex size-10 items-center justify-center rounded-full border">
              I
            </div>
            <p className="flex h-10 items-center gap-1 rounded-full border px-6 font-medium">
              <IconPlus className="size-4" />
              50 <span className="font-bold">Happy</span> clients
            </p>
          </li>
        </ul>
      </div>
      <div className="w-full max-md:pt-4 md:col-span-5 md:col-start-8">
        <EnquiryForm />
      </div>
    </section>
  );
};
