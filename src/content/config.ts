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
    publishedAt: z.string().transform((str) => new Date(str)),
    isPublish: z.boolean().default(true),
    isDraft: z.boolean().default(false),
    pagebody: z.array(
      z.object({
        type: z.enum(["text", "image", "columns"]),
        content: z.string().optional(), // Tekstisisällölle
        src: z.string().optional(),     // Kuvan URL
        alt: z.string().optional(),     // Kuvan Alt-teksti
        columns: z
          .array(
            z.object({
              content: z.string(),      // Sarakkeiden sisältö
            })
          )
          .optional(),
      })
    ),
  }),
});


export const collections = { posts: postsCollection, pages: pagesCollection };
