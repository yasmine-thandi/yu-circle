import React from "react";
import Thumbs from "/thumbs.svg";
import Clock from "/clock.svg";

const DiscourseComp: React.FC = () => {
  return (

    <main className="flex flex-col items-center bg-light-green border b-black rounded-lg w-full">

      <div className="bg-mint rounded-t-lg border-b b-black text-center font-fancy py-1 text-xl w-full">
        Discourse Activity 
      </div>

      {/* Main Section */}
      <div className="flex flex-row w-full">

        {/* Post Section */}
        <div className="w-[50%] flex flex-col gap-2 m-2 text-center">

          <h1 className="font-medium text-lg"> Posts </h1>

          {/* Comment Bubble*/}
          <div className="bg-white border b-black rounded-lg p-2 px-3 text-left">
              <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam sapien, sollicitudin non ipsum non, commodo congue risus.
              </p>

              <div className="flex flex-row gap-2 justify-between mt-2 mx-1 font-bold items-end">

                <div className="flex flex-row items-end font-medium">
                  <img src={Clock} className="h-6 pr-2"/>
                  <span> 22 hours ago </span>
                </div>

                <p>
                  0 Comments
                </p>  

                <div className="flex flex-row items-end">
                  <span> 2 </span>
                  <img src={Thumbs} className="h-7 pl-2"/>
                </div>

              </div>
              <div className="flex flex-row gap-2 justify-center mt-3">
                <button className=" w-full py-0.5 rounded-lg border b-black cursor-pointer text-sm bg-purple hover:bg-bright-purple transition-colors duration-300">
                See Post
                </button>

                <button className="w-full py-0.5 rounded-lg border b-black cursor-pointer text-sm bg-light-red hover:bg-red/40 transition-colors duration-300">
                Delete
                </button>
              </div>
          </div>
        </div>

        <div className="border-r-1"></div>

        {/* Comment Section */}
        <div className="w-[50%] flex flex-col gap-2 m-2 text-center">

          <h1 className="font-medium text-lg"> Comments </h1>

          {/* Comment Bubble*/}
          <div className="bg-white border b-black rounded-lg p-2 px-3 text-left">
              <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam sapien, sollicitudin non ipsum non, commodo congue risus.
              </p>

              <div className="flex flex-row gap-2 justify-between mt-2 mx-1 font-bold">

                <p>
                  0 Comments
                </p>  

                <div className="flex flex-row items-end">
                  <span> 2 </span>
                  <img src={Thumbs} className="h-7 pl-2"/>
                </div>

              </div>
              <div className="flex flex-row gap-2 justify-center mt-2">
                <button className=" w-full py-0.5 rounded-lg border b-black cursor-pointer text-sm bg-purple hover:bg-bright-purple transition-colors duration-300">
                See Comment 
                </button>

                <button className="w-full py-0.5 rounded-lg border b-black cursor-pointer text-sm bg-light-red hover:bg-red/40 transition-colors duration-300">
                Delete
                </button>
              </div>
          </div>

          {/* Comment Bubble*/}
          <div className="bg-white border b-black rounded-lg p-2 px-3 text-left">
              <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam sapien, sollicitudin non ipsum non, commodo congue risus.
              </p>

              <div className="flex flex-row gap-2 justify-between mt-2 mx-1 font-bold">

                <p>
                  0 Comments
                </p>  

                <div className="flex flex-row items-end">
                  <span> 2 </span>
                  <img src={Thumbs} className="h-7 pl-2"/>
                </div>

              </div>
              <div className="flex flex-row gap-2 justify-center mt-2">
                <button className=" w-full py-0.5 rounded-lg border b-black cursor-pointer text-sm bg-purple hover:bg-bright-purple transition-colors duration-300">
                See Comment 
                </button>

                <button className="w-full py-0.5 rounded-lg border b-black cursor-pointer text-sm bg-light-red hover:bg-red/40 transition-colors duration-300">
                Delete
                </button>
              </div>
          </div>

          {/* Comment Bubble*/}
          <div className="bg-white border b-black rounded-lg p-2 px-3 text-left">
              <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam sapien, sollicitudin non ipsum non, commodo congue risus.
              </p>

              <div className="flex flex-row gap-2 justify-between mt-2 mx-1 font-bold">

                <p>
                  0 Comments
                </p>  

                <div className="flex flex-row items-end">
                  <span> 2 </span>
                  <img src={Thumbs} className="h-7 pl-2"/>
                </div>

              </div>
              <div className="flex flex-row gap-2 justify-center mt-2">
                <button className=" w-full py-0.5 rounded-lg border b-black cursor-pointer text-sm bg-purple hover:bg-bright-purple transition-colors duration-300">
                See Comment 
                </button>

                <button className="w-full py-0.5 rounded-lg border b-black cursor-pointer text-sm bg-light-red hover:bg-red/40 transition-colors duration-300">
                Delete
                </button>
              </div>
          </div>
          
        </div>
        
      </div>


    </main>
  );
};

export default DiscourseComp;