"use client";

import { useFormContext } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ServiceSchema } from "@/types/service-schema";
import { UploadDropzone } from "@/utils/uploadthing";

export default function ImageDropzone() {
  const { control, setError, setValue } =
    useFormContext<z.infer<typeof ServiceSchema>>();

  return (
    <div className="m-0">
      <FormField
        control={control}
        name="image"
        render={({}) => (
          <FormItem>
            <FormLabel>Image</FormLabel>
            <FormControl>
              <UploadDropzone
                className="cursor-pointer border border-input transition-all duration-500 ease-in-out hover:bg-primary/5 ut-button:bg-primary/75 ut-allowed-content:text-secondary-foreground/70 ut-label:text-primary ut-upload-icon:text-primary/70"
                endpoint="serviceImage"
                onUploadError={(error) => {
                  setError("image", {
                    type: "validate",
                    message: error.message,
                  });
                  return;
                }}
                onUploadBegin={() => {
                  toast.loading("Uploading image...");
                }}
                onClientUploadComplete={(res) => {
                  toast.dismiss();
                  toast.success("Image uploaded");
                  setValue("image", res[0].url);
                }}
                config={{ mode: "auto" }}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      {/* {fields.map((field) => (
        <div key={field.id} className="relative aspect-video h-12">
          <Image src={field.url} alt={field.name} fill />
        </div>
      ))} */}
    </div>
  );
}
