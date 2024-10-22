"use client";

import React, { useCallback, useMemo, useState } from "react";
import EditorButton from "./editor-button";
import EditorInput from "./editor-input";

const Editor = () => {
  const { showEditor, EditorButton, EditorInput } = useEditor();
  return <div>{showEditor ? <EditorInput /> : <EditorButton />}</div>;
};

const useEditor = () => {
  const [showEditor, setShowEditor] = useState(false);

  const EditorInputCallback = useCallback(() => {
    return <EditorInput setShowEditor={setShowEditor} />;
  }, []);
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
