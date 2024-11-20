const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
            {
                name: "title",
                title: "Title",
                description: "Enter the project title",
                type: "string",
            },
            {
                name: "slug",
                title: "Slug",
                type: "slug",
                description: "Click 'Generate' to generate a unique identifier for this project",
                options: { source: "title" }
            },
            {
                name: "preview",
                title: "Preview images",
                type: "array",
                description: "Upload images to preview the project",
                of: [{ type: "image" }]
            },
            {
                name: "url",
                title: "URL",
                type: "url",
                description: "Enter the project URL or leave it empty if unavailable"
            },
            {
                name: "content",
                title: "Content",
                type: "array",
                of: [{ type: "block" }]
            }
        ]
    }
    
    export default project;