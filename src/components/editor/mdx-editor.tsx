"use client";

import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  DiffSourceToggleWrapper,
  InsertFrontmatter,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  MDXEditor,
  Separator,
  StrikeThroughSupSubToggles,
  UndoRedo,
  diffSourcePlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

import { ServiceSchema } from "@/types/service-schema";

const allPlugins = (diffMarkdown: string) => [
  toolbarPlugin({ toolbarContents: () => <Toolbar /> }),
  listsPlugin(),
  quotePlugin(),
  headingsPlugin(),
  imagePlugin({
    imageUploadHandler: () => {
      return Promise.resolve("https://picsum.photos/200/300");
    },
    imageAutocompleteSuggestions: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200",
    ],
  }),
  linkPlugin(),
  linkDialogPlugin(),

  tablePlugin(),
  thematicBreakPlugin(),
  frontmatterPlugin(),

  diffSourcePlugin({ viewMode: "rich-text", diffMarkdown }),
  markdownShortcutPlugin(),
];

export default function DemoEditor({
  markdown,
  className,
}: {
  markdown: string;
  className: string;
}) {
  const { setValue } = useFormContext<z.infer<typeof ServiceSchema>>();
  return (
    <MDXEditor
      onChange={(e) => setValue("content", e)}
      markdown={markdown}
      className={className}
      contentEditableClassName="prose max-w-full"
      plugins={allPlugins(markdown)}
    />
  );
}

export function Toolbar() {
  return (
    <div className="flex w-full">
      <DiffSourceToggleWrapper>
        <div className="flex">
          <UndoRedo />
          <Separator />

          <BoldItalicUnderlineToggles />
          <Separator />

          <StrikeThroughSupSubToggles />
          <Separator />

          <BlockTypeSelect />
          <Separator />

          <ListsToggle />
          <Separator />

          <CreateLink />
          <InsertImage />
          <Separator />

          <InsertTable />
          <Separator />

          <InsertThematicBreak />

          <InsertFrontmatter />
        </div>
      </DiffSourceToggleWrapper>
    </div>
  );
}
