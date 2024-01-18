import BlogDetails from '@/Components/BlogDetails/page';
import React from 'react';

const BlogsDetailsPage = async({ params }) => {
    const res = await fetch(`http://localhost:5000/blogs/${params.id}`)
    const blogs = await res.json()
    console.log(blogs)
    return (
        <div>
            <BlogDetails blogs = {blogs} />
        </div>
    );
};

export default BlogsDetailsPage;