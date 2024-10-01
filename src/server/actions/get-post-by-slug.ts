"use server";

export async function getSinglePost(postId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts/${postId}`
  );
  const post = await response.json();
  return post;
}
