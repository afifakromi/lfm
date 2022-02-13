import React, { useState } from "react";
import CreateTopicModal from "./create/CreateTopicModal";

const ForumRightBar = () => {
  const [togglecreatetopic, settogglecreatetopic] = useState(false);
  return (
    <div className="flex items-center flex-col h-full w-80 min-w-80 px-8">
      <button
        className="bg-customBlueForum w-full px-7 py-4 text-xl rounded shadow-md flex items-center mb-5"
        onClick={e => {
          e.preventDefault();
          settogglecreatetopic(true);
        }}
      >
        <img src="/img/plus.png" alt="" className="mb-1 mr-1" />
        <p className="text-white">Start a New Topic</p>
      </button>
      <CreateTopicModal
        togglecreatetopic={togglecreatetopic}
        settogglecreatetopic={settogglecreatetopic}
      />

      {/* <div className="flex flex-col bg-white shadow-md py-6 px-5 w-full font-gilroy">
        <p className="pl-3 mb-2">Top Users</p>
        <div className="flex mt-5 items-center">
          <img src="/img/pp.png" alt="" className="mr-2" />
          <p className="text-customBlueForum mr-auto">Fadli</p>
          <p className="mr-1">10</p>
          <img src="/img/uparrowblue.png" alt="" />
        </div>
        <div className="flex mt-5 items-center">
          <img src="/img/pp.png" alt="" className="mr-2" />
          <p className="text-customBlueForum mr-auto">Nadhim</p>
          <p className="mr-1">7</p>
          <img src="/img/uparrowblue.png" alt="" />
        </div>
        <div className="flex mt-5 items-center border-t-2 border-gray-200 pt-3">
          <img src="/img/pp.png" alt="" className="mr-2" />
          <p className="text-customBlueForum mr-auto">You</p>
          <p className="mr-1">7</p>
          <img src="/img/uparrowblue.png" alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default ForumRightBar;
