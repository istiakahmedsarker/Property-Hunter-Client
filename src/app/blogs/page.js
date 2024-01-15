import BlogCard from '@/Components/BlogCard/BlogCard';
import React from 'react';

const blogs = async() => {
    const res = await fetch('../../../public/blogs.json');
    const blogs = await res.json()
    console.log(res)
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-36">
                <div className="col-span-2">
                    Blog cards
                    <BlogCard blogs={blogs} />
                </div>
                <div className="">
                    Featured Blogs
                </div>
            </div>
        </div>
    );
};

export default blogs;
