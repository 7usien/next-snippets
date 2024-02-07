import { db } from "@/db"
import Link from "next/link"
import { notFound } from "next/navigation"

interface SnippetShowParams {
  params: {
    id: string
  }
}

const ShowSnippetpage = async (props: SnippetShowParams) => {

  await new Promise((r) => setTimeout(r, 400))

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id)
    }
  })

  if (!snippet) {
    return notFound();
  }

  return (
    <div className="w-full m-auto">
     
      <div className="flex justify-between items-center py-4">
        <h2 className="text-2xl font-bold capitalize">✅ {snippet.title} <span className="text-xs bg-gray-700 text-white rounded-sm p-1">{snippet.lang}</span> </h2>
        <div className="flex gap-2">
          <button className="border border-indigo-600 p-2 rounded-md shadow-lg hover:bg-gray-100">

            <Link href={`/snippets/${snippet.id}/edit`}>
            🤹‍♀️
              Edit</Link>

          </button>
          <button className="border border-indigo-600 p-2 rounded-md shadow-lg hover:bg-gray-100">
          🔴
            delete</button>
        </div>

      </div>

      <pre className="bg-gray-800 text-white p-4 rounded-sm shadow-xl border-gray-200 text-xl">{snippet.code}</pre>

    </div>
  )
}

export default ShowSnippetpage