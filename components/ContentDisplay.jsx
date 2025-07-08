import { getDocumentContent, getDocuments } from '@/lib/doc';
import Link from 'next/link';
import React from 'react';

const ContentDisplay = async ({ id }) => {

    const content = await getDocumentContent(id)
    console.log({ content })

    return (
        <article className="prose dark:prose-invert">
            <h1>{content.title}</h1>
            <div>
                <span>Published On: {content.date}</span> by {" "}
                <Link href={`/author/${content.author}`}>
                    {content.author}
                </Link> {" "}
                under the{" "}
                <Link href={`/categories/${content.category}`}>
                    {content.category}
                </Link>{" "}
                category.
                
            </div>

        </article>
    );
};

export default ContentDisplay;