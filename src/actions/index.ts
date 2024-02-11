"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string, title) {
 await db.snippet.update({
  where: {
   id: id,
  },
  data: { title, code },
 });
 redirect(`/snippets/${id}`)
}


export async function deleteSnippet(id: number) {
 await db.snippet.delete({
  where: {
   id
  }
 })
 redirect('/')
}