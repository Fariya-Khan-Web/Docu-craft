import React from 'react';

const ContentPage = ({params}) => {
        console.log('contentpage' , {params})
    return (
        <div>
            {params.contentId}
        </div>
    );
};

export default ContentPage;