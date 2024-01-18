import BlogDetails from '@/Components/BlogDetails/page';
import React from 'react';

const BlogsDetailsPage = ({ params }) => {
    const blogId = params.id
    return (
        <div>
            <BlogDetails blogId = {blogId} />
        </div>
    );
};

export default BlogsDetailsPage;