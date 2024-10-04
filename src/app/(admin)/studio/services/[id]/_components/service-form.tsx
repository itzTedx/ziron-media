"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { ServiceSchema } from "@/types/service-schema";

import ImageUpload from "./image-upload";

export default function ServiceForm() {
  const form = useForm<z.infer<typeof ServiceSchema>>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof ServiceSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-9 space-y-8">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3 space-y-6">
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
                      rows={8}
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={8}
                      placeholder="Description"
                      {...field}
                      className="border-0 shadow-none placeholder:text-2xl"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="sticky top-0 col-span-1">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Service Title" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <Button type="submit">Create</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
