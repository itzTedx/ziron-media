import { JSX } from "react";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";

import AboutCard from "@/features/about-card";
import Header from "@/features/header";
import TwoColumn from "@/features/two-column-grid";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Code({ children, ...props }: any) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
  code: Code,
  Header,
  AboutCard,
  TwoColumn,
};

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
