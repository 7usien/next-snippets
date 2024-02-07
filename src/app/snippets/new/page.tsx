import { db } from '@/db'

import { redirect } from 'next/navigation'

const SnippetPage = () => {


 const AddSnippet = async (formData: FormData) => {
  
  //*define a server action
  'use server'
  //*get user data and vcalid them

  
  const title = formData.get('title') as string;
  const code = formData.get('code') as string;
  const lang = formData.get('lang') as string;

  //* save a record in the database

  const snippet = await db.snippet.create({
   data: {
    title, 
    code, lang
   }
  })
  //* redirect to the home page
console.log(snippet)
  redirect('/')

  
  


 }



  return (
   <form action={AddSnippet}>
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

     <button type="submit" className="rounded p-2 bg-blue-200">
       Create
     </button>
   </div>
 </form>
  )
}

export default SnippetPage