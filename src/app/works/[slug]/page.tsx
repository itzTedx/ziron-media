import { notFound } from "next/navigation";

import { getSinglePost } from "@/server/actions/get-post-by-slug";

export default async function WorksPage({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}) {
  const post = await getSinglePost(searchParams.id);

  if (!post) notFound();

  return (
    <div className="container my-24">
      <h2 className="mb-4">{post.title.rendered}</h2>
      <div className="prose">
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </div>
    </div>
  );
}
