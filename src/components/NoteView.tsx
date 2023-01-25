/* eslint-disable react/no-danger */

import React, { memo, useEffect, useRef, useState } from "react";

import TextareaAutosize from "react-textarea-autosize";

import { md } from "lib/markdown";

interface NoteViewProps {
  initialTitle: string;
  initialText: string;
  editMode: boolean;
  mutateTitle: (newTitle: string) => void;
  mutateText: (newText: string) => void;
}

export const NoteView: React.FC<NoteViewProps> = memo(
  ({ initialTitle, initialText, editMode, mutateTitle, mutateText }) => {
    const [title, setTitle] = useState(initialTitle);
    const [text, setText] = useState(initialText);

    const debounceTitleTimeout = useRef<NodeJS.Timeout>();
    const debounceTextTimeout = useRef<NodeJS.Timeout>();

    const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTitle(e.target.value);

      clearTimeout(debounceTitleTimeout.current);

      debounceTitleTimeout.current = setTimeout(() => {
        mutateTitle(e.target.value);
      }, 1000);
    };

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);

      clearTimeout(debounceTextTimeout.current);

      debounceTextTimeout.current = setTimeout(() => {
        mutateText(e.target.value);
      }, 1000);
    };

    useEffect(() => setTitle(initialTitle), [initialTitle]);
    useEffect(() => setText(initialText), [initialText]);

    console.log("update NoteView");

    return (
      <div className="mx-auto max-w-2xl p-4">
        <TextareaAutosize
          className="mb-4 block resize-none bg-transparent text-4xl font-bold outline-none"
          cacheMeasurements
          value={title}
          onChange={handleChangeTitle}
          minRows={1.2}
        />
        {editMode ? (
          <TextareaAutosize
            className="block resize-none bg-transparent outline-none"
            cacheMeasurements
            value={text}
            onChange={handleChangeText}
          />
        ) : (
          <div
            className="prose"
            dangerouslySetInnerHTML={{
              __html: md.render(text),
            }}
          />
        )}
      </div>
    );
  }
);
