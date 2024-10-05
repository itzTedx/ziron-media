"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { IconEye } from "@tabler/icons-react";
import { UploadButton } from "@uploadthing/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { OurFileRouter } from "@/app/api/uploadthing/core";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ServiceSchema } from "@/types/service-schema";

import ImageUpload from "./image-dropzone";

export default function ServiceForm() {
  const form = useForm<z.infer<typeof ServiceSchema>>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      why: "",
      about: "",
      content: "",
      featuredImage: "",
      excerpt: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof ServiceSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const title = form.getValues("title");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3 mt-9 space-y-6 pb-9">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Title"
                      {...field}
                      className="h-12 border-0 shadow-none placeholder:text-2xl"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={6}
                      placeholder="Description"
                      {...field}
                      className="border-0 shadow-none placeholder:text-2xl"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <ImageUpload />
            <FormField
              control={form.control}
              name="why"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={6}
                      placeholder={`Why ${title}?`}
                      {...field}
                      className="border-0 shadow-none placeholder:text-2xl"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={6}
                      placeholder={`About ${title}?`}
                      {...field}
                      className="border-0 shadow-none placeholder:text-2xl"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={6}
                      placeholder={`Content`}
                      {...field}
                      className="border-0 shadow-none placeholder:text-2xl"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="sticky top-[4.75rem] col-span-1 flex h-[calc(100dvh-5rem-2.5rem)] flex-col justify-between border-l pl-3 pt-9">
            <div className="space-y-6">
              <div className="flex justify-between">
                <h5 className="text-sm font-bold">
                  {title ? title : "No Title"}
                </h5>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <IconEye className="size-5" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Preview Live</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <FormField
                control={form.control}
                name="featuredImage"
                render={({ field }) => (
                  <UploadButton<OurFileRouter>
                    className="cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary/5 ut-button:bg-primary/75 ut-allowed-content:text-secondary-foreground/70 ut-label:text-primary ut-upload-icon:text-primary/70"
                    endpoint="featuredImage"
                    onClientUploadComplete={(res: unknown) => {
                      // Do something with the response
                      console.log("Files: ", res);
                      alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                )}
              />
              <Dialog>
                <DialogTrigger>
                  <p className="text-sm underline">Add an Excerpt...</p>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Excerpt</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <FormField
                      control={form.control}
                      name="excerpt"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              rows={6}
                              placeholder={`Content`}
                              {...field}
                              className="text-sm"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit">Save changes</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Button type="submit">Create</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
