import Link from 'next/link';
import React from 'react';

const BlogCard = ({blogs}) => {

    const {title,description,id,img,shortDescription} = blogs;
    return (
        <div>
            {
                <div key={id} className="card bg-base-100 shadow-xl w-['70%'] my-5 mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{shortDescription}</p>
                            <div className="card-actions justify-end">
                                <Link href={`/blogs/${id}`}>
                                    <button className="btn btn-primary">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default BlogCard;