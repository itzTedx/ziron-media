"use server";

export async function getPosts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`
  );
  const posts = await response.json();
  return posts;
}