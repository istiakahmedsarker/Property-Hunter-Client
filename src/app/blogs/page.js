import BlogCard from '@/Components/BlogCard/BlogCard';
import React from 'react';

const blogs = async () => {
    const res = await fetch('http://localhost:5000/blogs');
    const blogs = await res.json()
    console.log()
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-36">
                <div className="col-span-2">
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
                        {
                            blogs[0]?.map((blog) => <BlogCard key={blog.id} blog={blog} />)
                        }
                    </div>
                </div>
                <div className="">
                    Featured Blogs
                </div>
            </div>
        </div>
    );
};

export default blogs;
