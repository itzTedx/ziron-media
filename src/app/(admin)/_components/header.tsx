import Link from "next/link";

import { IconArrowLeft, IconPlus } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

export default function Header({
  title,
  description,
  btnLink,
  btnType = "new",
}: {
  title: string;
  btnLink?: string;
  description?: string;
  btnType?: "back" | "new";
}) {
  return (
    <header className="mb-4 flex justify-between">
      <div className="">
        <h1 className="font-monaSans text-3xl">{title}</h1>
        {description && <p className="text-gray-700">{description}</p>}
      </div>
      {btnLink && btnType === "new" ? (
        <Button asChild className="h-12 rounded-full py-2">
          <Link
            href={btnLink}
            className="inline-flex items-center justify-center gap-2"
          >
            Add New <IconPlus />
          </Link>
        </Button>
      ) : (
        <Button asChild className="h-12 rounded-full py-2">
          <Link
            href={btnLink!}
            className="inline-flex items-center justify-center gap-2"
          >
            <IconArrowLeft /> Back to services
          </Link>
        </Button>
      )}
    </header>
  );
}
