"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createTest } from "@/server/actions/create-test";
import { ServiceSchema } from "@/types/service-schema";

import ImageDropzone from "../studio/services/[id]/_components/image-dropzone";

const LiveMdxEditor = dynamic(() => import("@/components/mdx-editor"), {
  ssr: false,
});

export default function TestForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof ServiceSchema>>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: {
      title: "",
    },
  });

  const { execute } = useAction(createTest, {
    onExecute: () => {
      setLoading(true);
    },
    onSuccess: ({ data }) => {
      if (data?.success) {
        router.refresh();
        setLoading(false);
        toast.success(data.success);
      }
    },

    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong.");
      setLoading(false);
    },
  });

  function onSubmit(values: z.infer<typeof ServiceSchema>) {
    execute(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
                <LiveMdxEditor markdown="" className="rounded-md border" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
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
        /> */}

        <Button type="submit" disabled={loading}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
