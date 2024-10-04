"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import * as z from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ServiceSchema } from "@/types/service-schema";
import { UploadDropzone } from "@/utils/uploadthing";

export default function ImageUpload() {
  const { control, setError } = useFormContext<z.infer<typeof ServiceSchema>>();

  const { fields, append } = useFieldArray({
    control,

    name: "image",
  });

  return (
    <div className="">
      <FormField
        control={control}
        name="image"
        render={({}) => (
          <FormItem>
            <FormControl>
              <UploadDropzone
                className="ut-allowed-content:text-secondary-foreground/70 ut-label:text-primary ut-upload-icon:text-primary/70 ut-button:bg-primary/75 cursor-pointer border border-input transition-all duration-500 ease-in-out hover:bg-primary/5"
                endpoint="serviceImage"
                onUploadError={(error) => {
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
                onClientUploadComplete={() => {
                  console.log("Image Uploaded");
                }}
                config={{ mode: "auto" }}
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
