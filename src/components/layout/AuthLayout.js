import React from "react";
import LogoSvg from "../../svg/LogoSvg";

const AuthLayout = ({ children }) => {
    return (
        <section className="bg-gray-50 min-h-screen dark:bg-gray-900 font-appFont">
            <div className=" px-8 md:px-32 lg:px-96">
                <div className="flex justify-between items-center py-3">
                    <LogoSvg />
                    <div className="font-bold text-black text-xl md:text-2xl lg:text-3xl">
                        Brainstake Eschools
                    </div>
                </div>
                <div className="text-center font-bold text-black text-xl md:text-2xl lg:text-3xl py-6 md:py-12">
                    Welcome to your Eschools platform
                </div>
                <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
                    {children}
                </div>
                <div className="py-6 mt-6 px-40">
                    <hr className="w-full border-t-2 border-gray-300 mb-1 " />
                    <div className="text-gray-800 text-sm md:text-base">
                        Brainstake Eschools © 2024
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthLayout;
