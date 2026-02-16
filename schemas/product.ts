import { defineType, defineField } from "sanity";
import product from "./product";
export const schemaTypes = [product];

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
    }),
  ],
});
