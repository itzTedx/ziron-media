import Link from "next/link";

import { IconEdit, IconTrash } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getFaqs } from "@/server/actions/get-faq";

export default async function FaqClient() {
  const faqs = await getFaqs();

  return (
    <div className="max-w-4xl py-6">
      <div className="space-y-4">
        {faqs.map((faq) => (
          <Collapsible
            className="rounded-md border p-3 transition-colors hover:bg-gray-50"
            key={faq.id}
          >
            <div className="flex items-center justify-between">
              <CollapsibleTrigger className="w-full text-left">
                <p className="w-full font-medium">{faq.question}</p>{" "}
              </CollapsibleTrigger>
              <div className="flex overflow-hidden rounded-md border">
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        asChild
                        size={"icon"}
                        variant="ghost"
                        className="rounded-none"
                      >
                        <Link href="/studio/faqs">
                          <IconEdit className="size-5 text-muted-foreground" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        asChild
                        size={"icon"}
                        variant="destructive"
                        className="rounded-none"
                      >
                        <Link href="/studio/faqs">
                          <IconTrash className="size-5" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <CollapsibleContent className="mt-2 border-t pt-3">
              {faq.answer}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
