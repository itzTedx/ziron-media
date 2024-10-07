import { relations } from "drizzle-orm";
import {
  pgEnum,
  pgTable,
  real,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", ["draft", "published", "archived"]);

export const Services = pgTable("Services", {
  id: serial("id").primaryKey().notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("featuredImage"),
  why: text("why").notNull(),
  about: text("about").notNull(),
  content: text("content").notNull(),
  featuredImage: text("featuredImage"),
  excerpt: text("excerpt").notNull(),
  slug: text("slug").notNull(),
  status: statusEnum("status").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});

export const Images = pgTable("images", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  size: real("size").notNull(),
  name: text("title").notNull(),
  order: real("order").notNull(),

  serviceId: serial("productId")
    .notNull()
    .references(() => Services.id, { onDelete: "cascade" }),
});

export const productImagesRelations = relations(Images, ({ one }) => ({
  product: one(Services, {
    fields: [Images.serviceId],
    references: [Services.id],
    relationName: "service-image",
  }),
}));

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
