import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  interface SnippetData {
    id: number;
    title: string;
    code: string;
    lang: string;
  }

  const snippetData = await db.snippet.findMany();

  const renderSnippets = snippetData?.map((item: SnippetData) => {
    return (



      <div
        key={item.id}
        className="flex bg-teal-500 justify-between items-center p-4 border mb-3 hover:bg-teal-400 border-green-400 rounded transition-all ">
        <Link href={`/snippets/${item.id}`}>
          <h3 className="text-2xl capitalize">
            💡
            {item.title}
          </h3>
        </Link>
        <span className=" p-2 rounded  bg-teal-200"><Link href={`/snippets/${item.id}`}>
          👀
          view</Link></span>
      </div>

    );
  });

  return <div className="grid grid-cols-3 gap-3">



    {renderSnippets}</div>;
}
