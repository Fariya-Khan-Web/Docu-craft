import ContentDisplay from '@/components/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByCategory } from '@/utils/doc-utils';
import React from 'react';

const CategoryPage = ({ params: { name } }) => {

    const docs = getDocuments()
    const matchedDocs = getDocumentsByCategory(docs, name)


    return (
        <>
         <ContentDisplay id={matchedDocs[0].id}/>   
        </>
    );
};

export default CategoryPage;