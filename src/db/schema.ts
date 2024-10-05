import { pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", ["draft", "published", "archived"]);

export const Services = pgTable("Services", {
  id: serial("id").primaryKey().notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("attachment"),
  why: text("why").notNull(),
  about: text("about").notNull(),
  content: text("content").notNull(),
  featuredImage: text("featuredImage"),
  excerpt: text("excerpt").notNull(),
  slug: text("slug").notNull(),
  status: statusEnum("status").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});

export const Tags = pgTable("tags", {
  id: serial("id").primaryKey().notNull(),
  tag: text("tag").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});

export const Faqs = pgTable("faqs", {
  id: serial("id").primaryKey().notNull(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});
