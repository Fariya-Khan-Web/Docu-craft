import ContentDisplay from '@/components/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByTags } from '@/utils/doc-utils';
import React from 'react';

const TaggedPage = ({ params: { name } }) => {

    const docs = getDocuments()
    const matchedDocs = getDocumentsByTags(docs, name)
    console.log(matchedDocs)

    return (
        <>
            <ContentDisplay id={matchedDocs[0].id} />
        </>
    );
};

export default TaggedPage;