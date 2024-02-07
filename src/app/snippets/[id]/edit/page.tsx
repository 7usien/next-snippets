import SnippetEditFormPage from "@/components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetParams {
  params: {
    id: string
  }
}

const SnippetEditPage = async (props: SnippetParams) => {
  const id = parseInt(props.params.id);

  const snippet = await db.snippet.findFirst({
    where: { id }
  })

  if (!snippet) {

    notFound()
  }




  return (
    <SnippetEditFormPage  snippet={snippet} />
  )
}

export default SnippetEditPage