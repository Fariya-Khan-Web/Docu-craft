import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), 'docs')

export function getDocuments() {

    const fileNames = fs.readdirSync(postsDirectory)

    const allDocuments = fileNames.map(filename => {
        const id = filename.replace('.md', '')

        const fullpath = path.join(postsDirectory, filename)

        const fileContents = fs.readFileSync(fullpath, "utf8");

        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data,
        }
    })

    return allDocuments.sort((a, b) => {
        if (a.order > b.order) {
            return 1
        }
        if (b.order > a.order) {
            return -1
        } else {
            return 0
        }
    })

}

export async function getDocumentContent(id) {
    const fullpath = path.join(postsDirectory, `${id}.md`)

    const fileContents = fs.readFileSync(fullpath, "utf8")

    const matterResult = matter(fileContents)

    const processedContent = await remark().use(html).process(matterResult.content)

    const contentHtml = processedContent.toString();
    // console.log(contentHtml)

    return {
        id,
        contentHtml,
        ...matterResult.data,
    }
}