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

export const createSnippet = async (
 formState: { message: string },
 formData:FormData,

) => {
 //  // //*get user data and vcalid them

 const title = formData.get('title');
 const code = formData.get("code");
 const lang = formData.get("lang");

 if (typeof title !== 'string' || title.length < 3) {
  return { message: "title should be longer than 3 char" };
 }

 if (typeof code !== 'string' || code.length < 10) {
  return { message: "code should be longer than 10 char" };
 }

 if (typeof lang !== 'string' || lang.length < 2) {
  return { message: "lang should be longer than 2 char" };
 }

 // //* save a record in the database

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
