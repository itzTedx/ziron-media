"use server";

export async function getCategories() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/categories`
  );
  const categories = await response.json();
  return categories;
}
