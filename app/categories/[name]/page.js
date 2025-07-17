import React from 'react';

const CategoryPage = ({ params: { name } }) => {
    return (
        <div>
            <h1 className='text-3xl'>
                {name}
            </h1>
        </div>
    );
};

export default CategoryPage;