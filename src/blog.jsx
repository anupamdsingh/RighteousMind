import React from "react";

export default function Blog() {
    return (
        <div>
            <div>
                <div className="h-1/2 flex items-center">
                    <div className="w-full flex justify-between" >
                        <div className="w-1/2 flex justify-center items-center flex-col">
                            <div className="flex pt-8">
                                <div className="justify-start pl-8">
                                    <div className="text-blue-500 font-semibold font-plus-jakarta-sans text-xl tracking-wider">
                                        Our Blog
                                    </div>
                                    <div className="text-gray-700 pt-3 font-bold font-plus-jakarta-sans text-5xl leading-normal tracking-wide">
                                        Keep yourself digitally <br />informed
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 flex justify-center items-start flex-col">
                            <div className="flex  pt-8">
                                <div className="justify-start">
                                    <div className="text-gray-600 font-light font-plus-jakarta-sans text-xl leading-relaxed">
                                        Sharing information and articles to keep you updated about the <br />digital landscape along with the possibilities to reach your <br />potential customers.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <div className="w-4/5 h-screen flex justify-evenly items-center">
                    <div>
                        <div className="px-3">
                            <div className=" flex">
                                <img src="/blog1.png" alt="why" className="rounded-3xl" />
                            </div>
                            <div className="text-gray-800 font-medium font-plus-jakarta-sans text-3xl pt-7 leading-normal">
                                Driving sale through organic search
                            </div>
                            <div className="text-gray-400 font-normal font-plus-jakarta-sans text-lg leading-[1.5rem] tracking-normal pt-3">
                                E commerce SEO is a way you can drive organic search to your brand.
                            </div>
                            <div className="text-blue-600 font-semibold font-plus-jakarta-sans text-base leading-[1.5rem] tracking-tighter pt-8">
                                Read More
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="px-3">
                            <div className=" flex ">
                                <img src="/blog2.png" alt="why" className="rounded-3xl" />
                            </div>
                            <div className="text-gray-800 font-medium font-plus-jakarta-sans text-3xl pt-7 leading-normal">
                                Step by step CRO checklist for your website
                            </div>
                            <div className="text-gray-400 font-normal font-plus-jakarta-sans text-lg leading-[1.5rem] tracking-normal pt-3">
                                Have you ever tried CRO or do you want to include CRO on your website.
                            </div>
                            <div className="text-blue-600 font-semibold font-plus-jakarta-sans text-base leading-[1.5rem] tracking-tighter pt-8">
                                Read More
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="px-3">
                            <div className="flex ">
                                <img src="/blog3.png" alt="why" className="rounded-3xl" />
                            </div>
                            <div className="text-gray-800 font-medium font-plus-jakarta-sans text-3xl pt-7 leading-normal">
                                3 steps to get more traffic to your website
                            </div>
                            <div className="text-gray-400 font-normal font-plus-jakarta-sans text-lg leading-[1.5rem] tracking-normal pt-3">
                                The proven 3 step process that will drive traffic to your website.
                            </div>
                            <div className="text-blue-600 font-semibold font-plus-jakarta-sans text-base leading-[1.5rem] tracking-tighter pt-8">
                                Read More
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}