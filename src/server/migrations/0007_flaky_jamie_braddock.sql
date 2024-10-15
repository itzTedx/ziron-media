ALTER TABLE "test" RENAME COLUMN "username" TO "title";--> statement-breakpoint
ALTER TABLE "test" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "test" ADD COLUMN "description" text NOT NULL;--> statement-breakpoint
ALTER TABLE "test" ADD COLUMN "featuredImage" text;--> statement-breakpoint
ALTER TABLE "test" ADD COLUMN "content" text NOT NULL;--> statement-breakpoint
ALTER TABLE "test" ADD COLUMN "slug" text NOT NULL;--> statement-breakpoint
ALTER TABLE "test" ADD COLUMN "status" "status" DEFAULT 'draft';--> statement-breakpoint
ALTER TABLE "test" ADD COLUMN "createdAt" timestamp DEFAULT now();