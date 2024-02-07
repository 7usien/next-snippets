'use client'
import { Editor } from "@monaco-editor/react"
import type { Snippet } from "@prisma/client"

interface snippetType {
 snippet:Snippet
}

const SnippetEditFormPage = ({snippet}:snippetType) => {
 return (
   <div >
  
    <div className="flex  gap-2 items-center mb-4"><h2 className="text-3xl capitalize">📜 {snippet.title}</h2>
     <span className="bg-amber-600 text-white rounded p-2 ">🛠{snippet.lang}</span>
     
    </div>


     <Editor height='35vh' defaultValue={snippet.code} language={snippet.lang} theme="vs-dark" options={{minimap:{enabled:false}}} />



    </div>
  )
}

export default SnippetEditFormPage