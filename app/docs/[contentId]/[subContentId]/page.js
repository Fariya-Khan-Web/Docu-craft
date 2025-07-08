import ContentDisplay from '@/components/ContentDisplay';
import React from 'react';

const SubContentPage = ({params}) => {

    return (
        <ContentDisplay id={params.subContentId}/>
    );
};

export default SubContentPage;