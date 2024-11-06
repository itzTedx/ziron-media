"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { IconCaretUpDownFilled } from "@tabler/icons-react";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { sendEnquiry } from "@/server/actions/send-enquiry";
import { ServiceMetadata } from "@/types";
import { enquirySchema, zEnquirySchema } from "@/types/enquiry-schema";

export default function EnquiryForm({ data }: { data: ServiceMetadata[] }) {
  console.log("Data:", data);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<zEnquirySchema>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
      service: "",
    },
  });

  const { execute } = useAction(sendEnquiry, {
    onExecute: () => {
      setLoading(true);
      toast.loading("Please wait...");
    },
    onSuccess: ({ data }) => {
      if (data?.success) {
        toast.dismiss();
        setLoading(false);
        toast.success(`Thanks for reaching out, ${data.success.name}`, {
          description: `Our experts will contact you soon for more details about ${data.success.service}`,
        });
        form.reset();
        redirect("/");
      }
    },

    onError: (error) => {
      console.log(error);
      toast.dismiss();
      toast.error("Something went wrong");
      setLoading(false);
    },
  });

  async function onSubmit(values: zEnquirySchema) {
    execute(values);

    toast.success(`Thanks ${values.name}!`, {
      description: `will get back to you soon `,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 rounded-xl border border-primary bg-background p-6 shadow-primary-md lg:p-9"
      >
        <div className="">
          <h3 className="text-xl font-semibold">
            Ready to boost your online presence?
          </h3>
          <p className="text-sm">
            Fill out the contact form below to get started. Our team is eager to
            assist you.
          </p>
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+971 98 765 4321" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name@company.com" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Company</FormLabel>

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between border-input bg-transparent text-foreground hover:bg-transparent",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? data.find((cat) => cat.title === field.value)?.title
                        : "Select Category"}
                      <IconCaretUpDownFilled className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="p-0 sm:w-[19.5rem]"
                  data-scroll-locked={open ? true : false}
                >
                  <Command>
                    <CommandInput placeholder="Search Services..." />
                    <CommandEmpty>Currently unavailable</CommandEmpty>
                    <CommandList className="p-1">
                      <CommandGroup heading="We're best at">
                        {data.map((cat) => (
                          <CommandItem
                            value={cat.title}
                            className="cursor-pointer px-4 py-2.5 font-medium"
                            key={cat.id}
                            onSelect={() => {
                              form.setValue("service", cat.title!);
                              setOpen(false);
                            }}
                          >
                            {cat.title}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  maxLength={1260}
                  placeholder="Type your message"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={!form.formState.isValid || loading}
          className="group relative isolation-auto z-10 mx-auto flex h-auto items-center justify-center gap-3 overflow-hidden rounded-full border-2 bg-foreground px-4 py-2 uppercase tracking-wide text-gray-50 backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-secondary before:transition-all before:duration-700 hover:bg-foreground hover:text-gray-50 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 disabled:opacity-30"
        >
          Send Request
          <svg
            viewBox="0 0 16 19"
            className="size-8 rotate-45 justify-end rounded-full border border-gray-700 bg-gray-50 p-2 text-gray-50 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50"
          >
            <path
              className="fill-gray-800 group-hover:fill-gray-800"
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            ></path>
          </svg>
        </Button>
      </form>
    </Form>
  );
}
