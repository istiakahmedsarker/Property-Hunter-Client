import React from "react";

const BlogComments = () => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-bold">Comments:</h3>
      <form className="flex flex-col items-start">
        <textarea
          className="border border-gray-400"
          rows={12}
          cols={60}
          placeholder="Type your comments here...."
        ></textarea>
        <button
          className="px-4 py-2 mt-4 bg-green-500 text-white rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogComments;
