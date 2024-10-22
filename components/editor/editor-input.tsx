"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

function useAutosizeTextArea(
  textAreaRef: React.RefObject<HTMLTextAreaElement>,
  value: string
) {
  useEffect(() => {
    if (textAreaRef.current) {
      // Reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.current.style.height = "auto";
      const scrollHeight = textAreaRef.current.scrollHeight;

      // Set the height directly, outside of the render loop
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
}

function EditorInput({
  setShowEditor,
}: {
  setShowEditor: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [value, setValue] = useState("");

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setValue(val);
  };
  return (
    <div className="border-dashed border-border border-2 max-w-lg px-2 py-3 rounded-lg shadow-2xl">
      <div className="">
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
        <textarea
          ref={textAreaRef}
          value={value}
          onChange={handleChange}
          placeholder="Type your markdown here..."
          className="w-full min-h-[50px] resize-none outline-none border-none overflow-hidden px-2 py-1 bg-transparent"
        />
      </div>
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
}

export default EditorInput;
