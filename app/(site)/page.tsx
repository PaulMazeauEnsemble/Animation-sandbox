import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
    const projects = await getProjects();

    return (
        <div className="max-w-5xl mx-auto py-20">
            <h1 className="text-4xl font-extrabold">Mes Projets</h1>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project._id} className="border border-gray-200 rounded-lg p-4">
                        {project.preview && project.preview[0] && (
                            <Image
                                src={urlFor(project.preview[0]).url()}
                                alt={project.title || "Image du projet"}
                                width={300}
                                height={200}
                                className="object-cover rounded-lg"
                            />
                        )}
                        
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">{project.title}</h2>
                            
                            {project.url && (
                                <a 
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline mt-2 inline-block"
                                >
                                    Voir le projet
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
