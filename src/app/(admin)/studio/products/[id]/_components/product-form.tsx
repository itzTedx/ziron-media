"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { IconEye } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { createService } from "@/server/actions/create-service";
import { productSchema } from "@/types/product-schema";

import ImageDropzone from "../../../services/[id]/_components/image-dropzone";

export default function ProductForm() {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      description: "",
      image: [],
      why: "",
      about: "",
      content: "",

      excerpt: "",
    },
  });

  function onSubmit(values: z.infer<typeof productSchema>) {
    console.log(values);
  }

  const title = form.getValues("title");
  const excerpt = form.getValues("excerpt");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} action={createService}>
        <div className="grid gap-6 md:grid-cols-4">
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

            <ImageDropzone />

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

          <div className="col-span-1 flex flex-col justify-between pl-3 pt-9 md:sticky md:top-[4.75rem] md:h-[calc(100dvh-5rem-2.5rem)] md:border-l">
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
              {/* <FormField
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
              /> */}
              {excerpt && <p>{excerpt}</p>}
              <Dialog>
                <DialogTrigger>
                  <p className="text-sm underline">
                    {excerpt ? "Edit Excerpt" : "Add an Excerpt..."}
                  </p>
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
