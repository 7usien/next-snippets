"use client";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import * as actions from "@/actions";

interface snippetType {
 snippet: Snippet;
}

const SnippetEditFormPage = ({ snippet }: snippetType) => {
 const [code, setCode] = useState(snippet.code);

 const EditorChangeHandler = (value: string) => {
  setCode(value);
 };

 
 return (
  <div>
   <div className="flex  gap-2 items-center mb-4">
    <h2 className="text-3xl capitalize">📜 {snippet.title}</h2>
    <span className="bg-amber-600 text-white rounded p-2 ">
     🛠{snippet.lang}
    </span>
   </div>

   <Editor
    onChange={EditorChangeHandler}
    height="35vh"
    defaultValue={snippet.code}
    language={snippet.lang}
    theme="vs-dark"
    options={{ minimap: { enabled: false }, fontSize: 22 }}
   />
  </div>
 );
};

export default SnippetEditFormPage;
