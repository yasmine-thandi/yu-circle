import React from "react";

const SettingComp: React.FC = () => {
  return (

    <main className="flex flex-col items-center bg-grey-50 border b-black rounded-lg w-full">
 
      <div className="bg-grey rounded-t-lg border-b b-black text-center font-fancy py-1 text-xl w-full">
        User Settings
      </div>

      {/* Main Section */}
      <div className="flex flex-col p-6 w-full">

        <p>Name</p>
        <div className="flex flex-row items-center justify-between gap-2 w-full pb-7 mt-1"> 
          <input 
            type="text" 
            placeholder="Samantha Joe" 
            className="border-b border-black w-[85%] rounded focus:outline-none focus:ring-1 focus:ring-mint"
          />
          <button className="cursor-pointer px-3 bg-mint border border-black text-black rounded-full hover:bg-minter transition-colors duration-300">Save</button>
        </div>
        
        <p>Email</p>
        <div className="flex flex-row items-center justify-between gap-2 w-full mt-1"> 
          <input 
            type="text" 
            placeholder="Samantha.Joe@gmail.com" 
            className="border-b border-black w-[85%] rounded focus:outline-none focus:ring-1 focus:ring-mint"
          />
          <button className="cursor-pointer px-3 bg-mint border border-black text-black rounded-full hover:bg-minter transition-colors duration-300">Save</button>
        </div>
        

        <button className="self-center mt-15 cursor-pointer w-[40%] px-3 py-2 bg-light-red border border-black text-black rounded-lg hover:bg-red/50 transition-colors duration-300">Reset Password</button>
        
      </div>


    </main>
  );
};

export default SettingComp;