"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import OrderedList from "@tiptap/extension-ordered-list";
import "@/app/editor.css";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const Tiptap = ({
  setShowEditor,
  content,
}: {
  setShowEditor: (showEditor: boolean) => void;
  content?: string;
}) => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      OrderedList,
      BulletList.configure({
        keepMarks: true,
        HTMLAttributes: {
          id: "bullet-list",
        },
      }),
      ListItem,
      Placeholder.configure({
        placeholder: "Start typing...",
      }),
    ],
    content,
    immediatelyRender: false,
  });

  return (
    <div className="border-dashed border-border border-2 max-w-lg px-2 py-1 rounded-lg shadow-2xl">
      <div className="w-full flex items-center justify-between">
        <input
          type="text"
          placeholder="Untitled"
          className="w-full px-2 py-1 font-bold text-lg bg-transparent outline-none"
        />
        <Button
          size={"icon"}
          variant={"outline"}
          className="w-7 h-7 rounded-full">
          <Plus size={14} />
        </Button>
      </div>
      <EditorContent editor={editor} />
      <div className="flex items-center justify-between font-extrabold">
        <Button
          onClick={() => setShowEditor(false)}
          className="h-7 font-extrabold"
          size={"sm"}
          variant={"ghost"}>
          Cancel
        </Button>
        <Button className="h-7 font-extrabold" size={"sm"} variant={"ghost"}>
          Save
        </Button>{" "}
      </div>
    </div>
  );
};

export default Tiptap;
