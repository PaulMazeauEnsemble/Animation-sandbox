import fs from 'fs';
import path from 'path';

function getPagesFromDirectory(directory, isRoot = false) {
    const filenames = fs.readdirSync(directory);
    let pages = [];

    filenames.forEach((filename) => {
        const filePath = path.join(directory, filename);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            pages = pages.concat(getPagesFromDirectory(filePath));
        } else if (!isRoot && !filename.includes('(') && !filename.includes(')') && filename.endsWith('.tsx')) {
            const slug = filename.replace(/\.tsx$/, '');
            pages.push({
                id: slug,
                slug: `/${slug}`,
                title: slug.charAt(0).toUpperCase() + slug.slice(1),
            });
        }
    });

    return pages;
}

export function getAllPages() {
    const pagesDirectory = path.join(process.cwd(), 'app/(site)');
    return getPagesFromDirectory(pagesDirectory, true);
}
