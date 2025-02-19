import React from "react";
import Thumbs from "/thumbs.svg";
import Clock from "/clock.svg";

const MarketplaceComp: React.FC = () => {
  return (

    <main className="flex flex-col items-center bg-light-green border b-black rounded-lg w-full">

      <div className="bg-mint rounded-t-lg border-b b-black text-center font-fancy py-1 text-xl w-full">
        Marketplace Activity 
      </div>

      {/* Main Section */}
      <div className="flex flex-row w-full">

        <div className="w-full flex flex-col gap-2 m-2 text-center">


          {/* Marketplace Item*/}
          <div className="bg-white border b-black rounded-lg p-2 px-3 text-left">
            <h1 className="text-3xl">EECS 3000 Lecture Notes</h1>
              <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam sapien, sollicitudin non ipsum non, commodo congue risus.
              </p>

              <div className="flex flex-row gap-2 justify-between mt-3 mx-1 items-end">

                <div className="border b-black px-6 rounded-lg">
                  Free
                </div>

                <div className="flex flex-row gap-2">
                  <div className="border b-black px-6 rounded-lg">
                    5.0 ★
                  </div>
                  <div className="border b-black px-6 rounded-lg">
                    Lecture Notes
                  </div>
                  <div className="border b-black px-6 rounded-lg">
                    Comp Sci
                  </div>

                </div>


              </div>
              <div className="flex flex-row gap-2 justify-center mt-3">
                <button className=" w-[30%] py-0.5 rounded-lg border b-black cursor-pointer text-sm bg-purple hover:bg-bright-purple transition-colors duration-300">
                Edit Post
                </button>

                <button className="w-[30%] py-0.5 rounded-lg border b-black cursor-pointer text-sm bg-light-red hover:bg-red/40 transition-colors duration-300">
                Delete
                </button>
              </div>
          </div>
        </div>

        
      </div>


    </main>
  );
};

export default MarketplaceComp;