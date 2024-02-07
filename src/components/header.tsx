import Link from 'next/link'

const Header = () => {
  return (
   <div className="flex justify-between items-center py-6 sticky  mb-6">
   <h1 className="text-3xl font-bold"><Link href="/">🥷 DailySnippets</Link></h1>
   <Link className= "border bg-gray-500 rounded-md p-3 hover:bg-gray-700 px-4 text-white capitalize" href="/snippets/new">📑+ new snippet</Link>
 </div>
  )
}

export default Header