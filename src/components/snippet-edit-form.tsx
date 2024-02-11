"use client";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { startTransition, useState } from "react";
import * as actions from "@/actions";

interface snippetType {
 snippet: Snippet;
}

const SnippetEditFormPage = ({ snippet }: snippetType) => {
 const [code, setCode] = useState(snippet.code);
 const [title, setTitle] = useState(snippet.title);

 const EditorChangeHandler = (value: string) => {
  setCode(value);
 };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code,title);
  


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

     <form action={editSnippetAction}>
       <div className="flex my-3">
       <label className="p-2" htmlFor="title">title</label>
         <input onChange={(e) => {
           setTitle(e.target.value);
       }} type="text" value={title} contentEditable  className="w-full border p-2" name="title" id="title" />
      </div>
    <button type="submit" className="p-2 border rounded mt-4 w-24 bg-teal-700 text-white">
     save
    </button>
   </form>
  </div>
 );
};

export default SnippetEditFormPage;
