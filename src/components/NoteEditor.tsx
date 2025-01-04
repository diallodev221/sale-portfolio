import Editor from "@monaco-editor/react";
import { useCallback } from "react";

interface NoteEditorProps {
  content: string;
  onChange: (value: string) => void;
}

export function NoteEditor({ content, onChange }: NoteEditorProps) {
  const handleEditorChange = useCallback((value: string | undefined) => {
    onChange(value || "");
  }, [onChange]);

  return (
    <div className="editor-container">
      <Editor
        defaultLanguage="markdown"
        theme="vs-light"
        value={content}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: "on",
          lineNumbers: "off",
          folding: false,
          lineDecorationsWidth: 0,
          lineNumbersMinChars: 0,
          padding: { top: 20 }
        }}
      />
    </div>
  );
}