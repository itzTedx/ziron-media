ALTER TABLE "Services" ALTER COLUMN "excerpt" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "Services" ALTER COLUMN "status" SET DEFAULT 'draft';--> statement-breakpoint
ALTER TABLE "Services" ALTER COLUMN "status" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "Services" ADD COLUMN "featuredImage" text;--> statement-breakpoint
ALTER TABLE "Services" DROP COLUMN IF EXISTS "why";--> statement-breakpoint
ALTER TABLE "Services" DROP COLUMN IF EXISTS "about";