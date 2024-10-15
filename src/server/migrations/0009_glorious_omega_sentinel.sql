ALTER TABLE "test" RENAME COLUMN "status" TO "content";--> statement-breakpoint
ALTER TABLE "test" ALTER COLUMN "featuredImage" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "test" ALTER COLUMN "content" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "test" ALTER COLUMN "content" DROP DEFAULT;