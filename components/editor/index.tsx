"use client";

import React, { useCallback, useMemo, useState } from "react";
import EditorButton from "./editor-button";
import TitTapEditor from "./tiptap-editor";

const Editor = () => {
  const { showEditor, EditorButton, EditorInput } = useEditor({
    content: "<strong>bold</strong>",
  });
  return <div>{showEditor ? <EditorInput /> : <EditorButton />}</div>;
};

const useEditor = ({ content }: { content?: string }) => {
  const [showEditor, setShowEditor] = useState(false);

  const EditorInputCallback = useCallback(() => {
    return <TitTapEditor content={content} setShowEditor={setShowEditor} />;
  }, [content]);
  const EditorButtonCallback = useCallback(() => {
    return <EditorButton setShowEditor={setShowEditor} />;
  }, []);

  return useMemo(
    () => ({
      showEditor,
      setShowEditor,
      EditorInput: EditorInputCallback,
      EditorButton: EditorButtonCallback,
    }),
    [showEditor, setShowEditor, EditorInputCallback, EditorButtonCallback]
  );
};

export default Editor;
