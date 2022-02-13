import React from "react";

const ForumContentPagination = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <button className="w-24 py-1 border-blue-500 border-2 rounded-xl text-customBlueForum font-qanelas text-sm mr-3 hover:bg-customBlueForum hover:text-white">
        PREVIOUS
      </button>
      <button className="text-white bg-customBlueForum rounded-lg w-8 py-1 mr-2">
        1
      </button>
      <button className="text-black rounded-lg w-8 py-1 mr-2 hover:bg-customBlueForum hover:text-white">
        2
      </button>
      <button className="text-black rounded-lg w-8 py-1 mr-2 hover:bg-customBlueForum hover:text-white">
        3
      </button>
      <button className="text-black rounded-lg w-8 py-1 mr-2 hover:bg-customBlueForum hover:text-white">
        4
      </button>
      <button className="text-black rounded-lg w-8 py-1 mr-2 hover:bg-customBlueForum hover:text-white">
        5
      </button>
      <p className="mr-2 text-black w-8 py-1">...</p>
      <button className="w-24 py-1 border-blue-500 border-2 rounded-xl text-customBlueForum font-qanelas text-sm hover:bg-customBlueForum hover:text-white">
        NEXT
      </button>
    </div>
  );
};

export default ForumContentPagination;
