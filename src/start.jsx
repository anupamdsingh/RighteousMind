import React from "react";

export default function Start() {
    return (
        <div>
            <div className=" w-screen p-10">
                <div className="bg-cover py-20 bg-center h-full rounded-b-3xl" style={{ backgroundImage: 'url("  /start.png")' }}>
                    <div className="px-32 flex justify-center flex-col items-center">
                        <div className="text-white text-center font-plus-jakarta-sans text-4xl font-bold leading-normal">
                            Ready to increase your brands <br /> digital presence
                        </div>
                        <div className="text-lg pt-8 ">
                            <div className="px-7 w-max text-white border border-blue-500 bg-blue-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 focus:ring-4 rounded-full text-primary-0 text-center font-plus-jakarta-sans text-base font-medium leading-9 py-2">
                                Lets Start
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}