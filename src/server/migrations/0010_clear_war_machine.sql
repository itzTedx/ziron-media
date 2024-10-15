ALTER TABLE "Services" ALTER COLUMN "featuredImage" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Services" ALTER COLUMN "content" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "Services" DROP COLUMN IF EXISTS "excerpt";--> statement-breakpoint
ALTER TABLE "Services" DROP COLUMN IF EXISTS "status";