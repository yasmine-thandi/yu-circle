import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Logo from "/logo.svg";
import Notification from "/notification.svg";
import Chat from "/chat.svg";
import Profile from "/profile.svg";


const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

  return (
    <div>
        <main className="flex flex-row justify-between k w-screen h-[90px] pt-6 px-12">

            <img src={Logo} alt="Logo" className="" />

            {/* Navigation */}
            <div className="flex flex-row py-4 pb-3 gap-8 text-lg font-fancy">
                <button 
                    className={`flex-1 px-18 rounded-lg border b-black cursor-pointer transition duration-300 ${
                        location.pathname === '/discourse' ? 'bg-slate text-white font-medium' : ' hover:bg-slate hover:text-white hover:font-medium'}`}
                    onClick={() => navigate('/discourse')}
                >
                    Discourse
                </button>
                <button 
                    className={`flex-1 px-18 rounded-lg border b-black cursor-pointer transition duration-300 ${
                        location.pathname === '/' ? 'bg-slate text-white font-medium' : ' hover:bg-slate hover:text-white hover:font-medium'}`}
                    onClick={() => navigate('/')}
                >
                    Community
                </button>
                <button 
                    className={`flex-1 px-18 rounded-lg border b-black cursor-pointer transition duration-300 ${
                        location.pathname === '/marketplace' ? 'bg-slate text-white font-medium' : ' hover:bg-slate hover:text-white hover:font-medium'}`}
                    onClick={() => navigate('/marketplace')}
                >
                    Marketplace
                </button>
            </div>

            {/* Profile */}
            <div className="flex flex-row rounded-full border b-black gap-2 px-4 mr-2 mb-2 mt-2 py-1">
                <img src={Notification} className="" />
                <img src={Chat} className="" />
                <img src={Profile} className="" />
            </div>


        </main>
        <div className="border-b-1 b-top b-black ml-26 mr-10"></div>
     </div>
  );
};

export default Header;