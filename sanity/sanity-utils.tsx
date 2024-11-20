import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import type { Project } from "@/sanity.types";

const client = createClient(clientConfig);

export async function getProjects(): Promise<Project[]> {
	const projectQuery = groq`*[_type == "project"]{
	         _id,
	         _createdAt,
	         title,
	         "slug": slug.current,
	         "preview": preview[]{
              asset->
	          },
	         url,
	         content
         }`;

	return await client.fetch(projectQuery);
}