"use client";

import { UploadButton } from "@uploadthing/react";
import { useFieldArray, useFormContext } from "react-hook-form";
import * as z from "zod";

import { OurFileRouter } from "@/app/api/uploadthing/core";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ServiceSchema } from "@/types/service-schema";

export default function ImageDropzone() {
  const { control, setError } = useFormContext<z.infer<typeof ServiceSchema>>();

  const { fields, append } = useFieldArray({
    control,
    name: "featuredImage",
  });

  return (
    <div className="">
      <FormField
        control={control}
        name="featuredImage"
        render={({}) => (
          <FormItem>
            <FormControl>
              <UploadButton<OurFileRouter>
                endpoint="featuredImage"
                onClientUploadComplete={() => {
                  console.log("Image Uploaded");
                }}
                config={{ mode: "auto" }}
                onUploadError={(error: Error) => {
                  setError("image", {
                    type: "validate",
                    message: error.message,
                  });
                  return;
                }}
                onBeforeUploadBegin={(files) => {
                  files.map((file) =>
                    append({
                      name: file.name,
                      size: file.size,
                      url: URL.createObjectURL(file),
                    })
                  );
                  return files;
                }}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <div className="overflow-x-hidden rounded-md">
        {fields.length === 0 ? (
          <div className="mt-2 text-center text-sm text-muted">
            Images not uploaded
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}