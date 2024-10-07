"use client";

import React, { useCallback, useState } from "react";

import RcTiptapEditor, {
  Attachment,
  BaseKit,
  Blockquote,
  Bold,
  BulletList,
  Clear,
  Code,
  CodeBlock,
  Color,
  ColumnActionButton,
  Emoji,
  Excalidraw,
  ExportPdf,
  ExportWord,
  FontFamily,
  FontSize,
  FormatPainter,
  Heading,
  Highlight,
  History,
  HorizontalRule,
  Iframe,
  Image,
  ImageUpload,
  ImportWord,
  Indent,
  Italic,
  Katex,
  LineHeight,
  Link,
  Mention,
  MoreMark,
  OrderedList,
  SearchAndReplace,
  SlashCommand,
  Strike,
  Table,
  TableOfContents,
  TaskList,
  TextAlign,
  TextDirection,
  Underline,
  Video,
  VideoUpload,
} from "reactjs-tiptap-editor";
import "reactjs-tiptap-editor/style.css";

function convertBase64ToBlob(base64: string) {
  const arr = base64.split(",");
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

const extensions = [
  BaseKit.configure({
    multiColumn: true,
    placeholder: {
      showOnlyCurrent: true,
    },
    characterCount: {
      limit: 50_000,
    },
  }),
  History,
  SearchAndReplace,
  TextDirection,
  TableOfContents,
  FormatPainter.configure({ spacer: true }),
  Clear,
  FontFamily.configure({
    fontFamilyList: [
      "Inter",
      "Comic Sans MS, Comic Sans",
      "serif",
      "cursive",
      "Arial",
      "Arial Black",
      "Georgia",
      "Impact",
      "Tahoma",
      "Times New Roman",
      "Verdana",
      "Courier New",
      "Lucida Console",
      "Monaco",
      "monospace",
    ],
  }),
  Heading.configure({ spacer: true }),
  FontSize,
  Bold,
  Italic,
  Underline,
  Strike,
  MoreMark,
  Katex,
  Emoji,
  Color.configure({ spacer: true }),
  Highlight,
  BulletList,
  OrderedList,
  TextAlign.configure({ types: ["heading", "paragraph"], spacer: true }),
  Indent,
  LineHeight,
  TaskList.configure({
    spacer: true,
    taskItem: {
      nested: true,
    },
  }),
  Link,
  Image,
  ImageUpload.configure({
    upload: (files: File) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(URL.createObjectURL(files));
        }, 500);
      });
    },
  }),
  Video,
  VideoUpload.configure({
    upload: (files: File[]) => {
      const f = files.map((file) => ({
        src: URL.createObjectURL(file),
        alt: file.name,
      }));
      return Promise.resolve(f);
    },
  }),
  Blockquote,
  SlashCommand,
  HorizontalRule,
  Code.configure({
    toolbar: false,
  }),
  CodeBlock.configure({ defaultTheme: "dracula" }),
  ColumnActionButton,
  Table,
  Iframe,
  ExportPdf.configure({ spacer: true }),
  ImportWord.configure({
    upload: (files: File[]) => {
      const f = files.map((file) => ({
        src: URL.createObjectURL(file),
        alt: file.name,
      }));
      return Promise.resolve(f);
    },
  }),
  ExportWord,
  Excalidraw,
  Mention,
  Attachment.configure({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    upload: (file: any) => {
      // fake upload return base 64
      const reader = new FileReader();
      reader.readAsDataURL(file);

      return new Promise((resolve) => {
        setTimeout(() => {
          const blob = convertBase64ToBlob(reader.result as string);
          resolve(URL.createObjectURL(blob));
        }, 300);
      });
    },
  }),
];

const DEFAULT = ``;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function debounce(func: any, wait: number) {
  let timeout: NodeJS.Timeout;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (...args: any[]) {
    clearTimeout(timeout);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function Editor() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [content, setContent] = useState(DEFAULT);
  const refEditor = React.useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onValueChange = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    debounce((value: any) => {
      setContent(value);
    }, 300),
    []
  );

  console.log(content);

  return (
    <>
      <RcTiptapEditor
        ref={refEditor}
        output="html"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        content={DEFAULT as any}
        onChangeContent={onValueChange}
        extensions={extensions}
      />
      {/* <TipTapRender handlers={handlers} node={content} /> */}
      {content && (
        <div className="prose max-w-6xl">
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
      )}
    </>
  );
}

export default Editor;
