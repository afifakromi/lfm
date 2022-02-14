import React, { useEffect, useState } from "react";

const ForumContentPagination = ({ page, maxPage, setpage, isNull }) => {
  const [isEndSection, setisEndSection] = useState(false);
  useEffect(() => {
    if (!maxPage) return;
    if (Math.floor((maxPage - 1) / 3) - Math.floor((page - 1) / 3) === 0) {
      setisEndSection(true);
    } else {
      setisEndSection(false);
    }
  }, [page, maxPage]);

  const loadButtonPage = () => {
    var data = [];
    var section = Math.floor((page - 1) / 3);
    if (!maxPage) return;
    for (let i = section * 3; i < (section + 1) * 3; i++) {
      if (i === page - 1)
        data.push(
          <p
            className="text-white text-center bg-customBlueForum rounded-lg w-8 py-1 mr-2"
            key={i}
          >
            {i + 1}
          </p>
        );
      else {
        if (i + 1 <= maxPage) {
          data.push(
            <button
              className="text-black rounded-lg w-8 py-1 mr-2 hover:bg-customBlueForum hover:text-white"
              key={i}
              onClick={e => {
                setpage(i + 1);
              }}
            >
              {i + 1}
            </button>
          );
        }
      }
    }
    return data;
  };
  return (
    <div className="flex items-center justify-center mt-20">
      {page === 1 ? (
        <div className="w-24 text-center py-1 border-blue-500 border-2 rounded-xl text-customBlueForum font-qanelas text-sm mr-3 cursor-default opacity-0 ">
          PREVIOUS
        </div>
      ) : (
        <button
          className="w-24 py-1 border-blue-500 border-2 rounded-xl text-customBlueForum font-qanelas text-sm mr-3 hover:bg-customBlueForum hover:text-white"
          onClick={e => {
            setpage(page - 1);
          }}
        >
          PREVIOUS
        </button>
      )}
      {loadButtonPage()}
      {isEndSection ? "" : <p className="mr-2 text-black w-8 py-1">...</p>}
      {page >= maxPage ? (
        <div className="w-24 py-1 text-center border-blue-500 border-2 rounded-xl text-customBlueForum font-qanelas text-sm opacity-0 cursor-default">
          NEXT
        </div>
      ) : (
        <button
          className="w-24 py-1 border-blue-500 border-2 rounded-xl text-customBlueForum font-qanelas text-sm hover:bg-customBlueForum hover:text-white"
          onClick={e => {
            setpage(page + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default ForumContentPagination;
