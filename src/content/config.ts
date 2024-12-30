import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
    body: z.array(
      z.union([
        z.object({
          type: z.literal("text"),
          content: z.string(),
        }),
        z.object({
          type: z.literal("image"),
          src: z.string(),
          alt: z.string(),
        }),
        z.object({
          type: z.literal("columns"),
          columns: z.array(
            z.object({
              content: z.string(),
            })
          ),
        }),
      ])
    ),
  }),
});


export const collections = { posts: postsCollection, pages: pagesCollection };
