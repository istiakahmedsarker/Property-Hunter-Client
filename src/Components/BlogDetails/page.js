import Image from "next/image";
import React from "react";
import BlogComments from "../BlogComments/page";

const BlogDetails = () => {
  return (
    <div className=" max-w-6xl mx-auto mt-10">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image
            className="rounded-md"
            src="/Blog-Banner-Examples.jpg"
            height="350"
            width="600"
            alt="blog details image"
          ></Image>
        </div>
        <div className="bg-slate-100 px-4 py-7 rounded-md">
          <h2 className="text-3xl font-bold">Heading</h2>
          <h3 className="text-2xl text-gray-500 ">Sub Heading..</h3>
          <p className="text-lg mt-4">Blog description</p>
        </div>
      </div>
      <BlogComments />
    </div>
  );
};

export default BlogDetails;
