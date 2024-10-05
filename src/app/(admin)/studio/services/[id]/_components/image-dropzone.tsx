"use client";

import Image from "next/image";

import { useFieldArray, useFormContext } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ServiceSchema } from "@/types/service-schema";
import { UploadDropzone } from "@/utils/uploadthing";

export default function ImageDropzone() {
  const { control, setError, getValues } =
    useFormContext<z.infer<typeof ServiceSchema>>();

  const { fields, update, append } = useFieldArray({
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
                className="cursor-pointer border border-input transition-all duration-500 ease-in-out hover:bg-primary/5 ut-button:bg-primary/75 ut-allowed-content:text-secondary-foreground/70 ut-label:text-primary ut-upload-icon:text-primary/70"
                endpoint="serviceImage"
                onUploadError={(error) => {
                  setError("image", {
                    type: "validate",
                    message: error.message,
                  });
                  return;
                }}
                onBeforeUploadBegin={(files) => {
                  toast.loading("Image Uploading");
                  files.map((file) =>
                    append({
                      name: file.name,
                      size: file.size,
                      url: URL.createObjectURL(file),
                    })
                  );
                  return files;
                }}
                onClientUploadComplete={(res) => {
                  toast.dismiss();
                  toast.success("Image uploaded");

                  const images = getValues("image");
                  images.map((field, imgIdx) => {
                    if (field.url.search("blob:") === 0) {
                      const image = res.find((img) => img.name === field.name);
                      if (image) {
                        update(imgIdx, {
                          url: image.url,
                          name: image.name,
                          size: image.size,
                          key: image.key,
                        });
                      }
                    }
                  });
                }}
                config={{ mode: "auto" }}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      {fields.map((field) => (
        <div key={field.id} className="relative aspect-video h-12">
          <Image src={field.url} alt={field.name} fill />
        </div>
      ))}
    </div>
  );
}
