import fs from "fs";
import matter from "gray-matter";
import path from "path";

import MDXContent from "@/components/editor/mdx-content";

const root = path.join(process.cwd(), "src", "content", "legal");

export default function PrivacyPolicy() {
  const filePath = path.join(root, `privacy-policy.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { content } = matter(fileContent);
  return (
    <section className="wrapper">
      <main className="container prose relative z-10 max-w-7xl md:prose-lg">
        <MDXContent source={content} />
      </main>
    </section>
  );
}
