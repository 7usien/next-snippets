'use client'
import * as actions from '@/actions'
import { useFormState } from 'react-dom'

const SnippetPage = () => {


 const [formState, action]=useFormState(actions.createSnippet, {message:""})



  return (
   <form action={action}>
   <h3 className="font-bold m-3 text-3xl text-center">Create a Snippet</h3>
   <div className="flex flex-col gap-8">
     <div className="flex gap-4">
       <label className="w-16" htmlFor="title">
         Title
       </label>
       <input
         name="title"
         className="border rounded p-2 w-full"
         id="title"
       />
     </div>

     <div className="flex gap-4">
       <label className="w-16" htmlFor="code">
         Code
       </label>
       <textarea
         name="code"
         className="border rounded p-2 w-full"
         id="code"
       />
     </div>

     <div className="flex gap-4">
       <label className="w-16" htmlFor="lang">
         language
       </label>
       <textarea
         name="lang"
         className="border rounded p-2 w-full"
         id="lang"
       />
     </div>

     <button type="submit" className="rounded p-4 bg-teal-600 text-white min-w-36 m-auto">
       Create
     </button>
   </div>
 </form>
  )
}

export default SnippetPage