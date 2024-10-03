import Link from "next/link";
import { notFound } from "next/navigation";

import { getPosts } from "@/server/actions/get-posts";
import { Posts } from "@/types/posts";

export default async function WorksPages() {
  const posts = await getPosts();

  if (!posts) return notFound();
  return (
    <div className="container my-24 min-h-svh">
      <h2 className="mb-9">Works Page</h2>

      <div className="grid grid-cols-3 gap-8">
        {posts.map((post: Posts) => {
          return (
            <Link
              href={`/works/${post.slug}?id=${post.id}`}
              className="post"
              key={post.id}
            >
              <h3>{post.title.rendered}</h3>
              <article
                className="prose"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              ></article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
