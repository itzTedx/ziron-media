"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { IconEye } from "@tabler/icons-react";
import { useAction } from "next-safe-action/hooks";
import { JSONContent } from "novel";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import NovelEditor from "@/components/editor/novel-editor";
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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { createService } from "@/server/actions/create-service";
import { ServiceSchema } from "@/types/service-schema";
import { UploadButton } from "@/utils/uploadthing";

import ImageDropzone from "./image-dropzone";

// const LiveMdxEditor = dynamic(() => import("@/components/mdx-editor"), {
//   ssr: false,
// });

export default function ServiceForm() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<JSONContent>({});
  const router = useRouter();

  const form = useForm<z.infer<typeof ServiceSchema>>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      featuredImage: "",
      content: "",
      excerpt: "",
    },
  });

  const { execute } = useAction(createService, {
    onExecute: () => {
      setLoading(true);
      console.log("Executing");
    },
    onSuccess: ({ data }) => {
      if (data?.success) {
        console.log("Success");
        router.push("/studio/services");
        toast.success(data.success);
        setLoading(false);
      }
    },

    onError: () => {
      toast.error("Something went wrong.");
      setLoading(false);
    },
  });

  function onSubmit(values: z.infer<typeof ServiceSchema>) {
    console.log("data sending to backend");
    execute(values);
  }

  const title = form.getValues("title");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-6 py-9 md:grid-cols-4">
          <div className="col-span-3 grid h-fit grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Title" {...field} />
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
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea rows={6} placeholder="Description" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <ImageDropzone />
            <FormField
              control={form.control}
              name="content"
              render={({}) => (
                <FormItem className="col-span-2">
                  <FormLabel className="sr-only">Content</FormLabel>
                  <FormControl className="min-h-52 border">
                    {/* <Suspense fallback={null}>
                      <LiveMdxEditor
                        markdown=""
                        className="rounded-md border"
                      />
                    </Suspense> */}
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2">
              <Label>
                <span>Content</span>
                <NovelEditor
                  initialValue={value}
                  onChange={setValue}
                  className="min-h-96 cursor-text rounded-lg border"
                />
              </Label>
            </div>

            {/* <FormField
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
        */}
          </div>
          <div className="col-span-1 flex flex-col justify-between pl-3 pt-9 md:sticky md:top-[4.75rem] md:h-[calc(100dvh-5rem-2.5rem)] md:border-l">
            <div className="space-y-6">
              <div className="flex justify-between">
                <h5 className="text-sm font-bold">{title || "No Title"}</h5>
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
                render={({}) => (
                  <UploadButton
                    className="cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary/5 ut-button:bg-primary/75 ut-allowed-content:text-secondary-foreground/70 ut-label:text-primary ut-upload-icon:text-primary/70"
                    endpoint="featuredImage"
                    onClientUploadComplete={(res) => {
                      form.setValue("featuredImage", res[0].url);
                    }}
                    onUploadError={(error: Error) => {
                      toast.error(JSON.stringify(error));
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

            <Button type="submit" disabled={loading}>
              Create
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
