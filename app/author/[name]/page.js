import React from 'react';

const AuthorPage = ({params}) => {
    return (
        <div>
            {params.name}
        </div>
    );
};

export default AuthorPage;