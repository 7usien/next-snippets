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
 redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
 await db.snippet.delete({
  where: {
   id,
  },
 });
 redirect("/");
}

export const createSnippet = async (formData: FormData, {message}:string) => {
 //*define a server action

 //*get user data and vcalid them

 const title = formData.get("title") as string;
 const code = formData.get("code") as string;
 const lang = formData.get("lang") as string;

 //* save a record in the database

 const snippet = await db.snippet.create({
  data: {
   title,
   code,
   lang,
  },
 });
 //* redirect to the home page
 redirect("/");
};
