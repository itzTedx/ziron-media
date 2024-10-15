DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('draft', 'published', 'archived');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Services" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"attachment" text,
	"why" text NOT NULL,
	"about" text NOT NULL,
	"content" text NOT NULL,
	"featuredImage" text,
	"excerpt" text NOT NULL,
	"slug" text NOT NULL,
	"status" "status" NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
