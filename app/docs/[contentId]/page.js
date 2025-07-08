import ContentDisplay from '@/components/ContentDisplay';
import React from 'react';

const ContentPage = ({params}) => {
    

    return (
        <ContentDisplay id={params.contentId}/>
    );
};

export default ContentPage;