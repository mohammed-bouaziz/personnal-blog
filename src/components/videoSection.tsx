const VideoSection = () => {
    return (
        <div className="pb-8 pt-8 md:p-40 md:pb-20 flex flex-col space-y-52 items-center justify-center bg-sectionBg">
            <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row justify-between px-10 md:px-24">
                <h1 className="text-mainText text-4xl">Build your own AI Agent... <br/>
                     <span className="text-white pt-3">For Free</span></h1>
                <div className="w-full md:w-1/2 flex flex-col space-y-10">
                    <p className="text-white text-justify">
                                    An AI agent, might save your company so much money and so much time. <br/>
                                    If built right and integrated well, it will perform complex tasks intuitively, 
                                    analyse data for you and guide you in your decisions with hidden insight.<br/>
                                    I’ll show you how to build one, tailored for your company, 
                                    and that works with what you have without breaking anything.
                    </p>
                    <button type="submit" 
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-lightBtn px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto sm:text-sm">
                        Watch Free Course
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default VideoSection;