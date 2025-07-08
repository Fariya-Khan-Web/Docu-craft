import React from 'react';

const SubContentPage = ({params}) => {
 console.log('subcontentpage' , {params})
    return (
        <div>
            {params.subContentId}
        </div>
    );
};

export default SubContentPage;