import { JSX } from "react";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

import AboutCard from "@/features/about-card";
import Header from "@/features/header";
import TwoColumn from "@/features/two-column-grid";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

const components = {
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
