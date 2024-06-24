import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@/app/constants";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: async (headers) => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("idToken="))
      ?.split("=")[1];
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery,
  tagTypes: [
    "CategoryItem",
    "SubcategoryItem",
    "SubSubcategoryItem",
    "AllCategoryItems",
  ],
  endpoints: (builder) => ({}),
});
