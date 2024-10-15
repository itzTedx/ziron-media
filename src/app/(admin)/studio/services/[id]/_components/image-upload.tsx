"use client";

import { useFormContext } from "react-hook-form";
import * as z from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ServiceSchema } from "@/types/service-schema";
import { UploadButton } from "@/utils/uploadthing";

export default function ImageUpload() {
  const { control, setError } = useFormContext<z.infer<typeof ServiceSchema>>();

  return (
    <div className="">
      <FormField
        control={control}
        name="featuredImage"
        render={({}) => (
          <FormItem>
            <FormControl>
              <UploadButton
                endpoint="featuredImage"
                onClientUploadComplete={() => {
                  console.log("Image Uploaded");
                }}
                config={{ mode: "auto" }}
                onUploadError={(error: Error) => {
                  setError("featuredImage", {
                    type: "validate",
                    message: error.message,
                  });
                  return;
                }}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
