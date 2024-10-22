import React from "react";

const EditorButton = ({
  setShowEditor,
}: {
  setShowEditor: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setShowEditor(true)}
      className="w-96 border bg-card shadow-md px-3 py-2 rounded-xl text-sm cursor-pointer font-light text-card-foreground/40">
      Create new card
    </div>
  );
};

export default EditorButton;
