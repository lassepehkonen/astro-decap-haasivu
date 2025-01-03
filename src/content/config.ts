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
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    isPublish: z.boolean().default(true),
    isDraft: z.boolean().default(false),
    pagebody: z
      .array(
        z.object({
          type: z.enum(["text", "image", "columns"]),
          content: z.string().optional(),
          src: z.string().optional(),
          alt: z.string().optional(),
          columns: z
            .array(
              z.object({
                content: z.string(),
              })
            )
            .optional(),
        })
      )
      .optional(),
  }),
});


export const collections = { posts: postsCollection, pages: pagesCollection };
