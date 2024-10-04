import { type FileRouter, createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug

  serviceImage: f({
    image: { maxFileCount: 1, maxFileSize: "4MB" },
  }).onUploadComplete(async ({ metadata }) => {
    console.log(metadata);
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
