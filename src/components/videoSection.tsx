const VideoSection = () => {
    return (
        <div className="pt-8 flex flex-col space-y-52 h-screen items-center justify-center bg-sectionBg">
            <div className="flex justify-between px-24">
                <h1 className="text-mainText text-4xl">Build your own AI Agent... <br/>
                     <h2 className="text-white pt-3">For Free</h2></h1>
                <div className="w-1/2 flex flex-col space-y-10">
                    <p className="text-white text-justify">
                                    An AI agent, might save your company so much money and so much time. <br/>
                                    If built right and integrated well, it will perform complex tasks intuitively, 
                                    analyse data for you and guide you in your decisions with hidden insight.<br/>
                                    I’ll show you how to build one, tailored for your company, 
                                    and that works with what you have without breaking anything.
                    </p>
                    <button type="submit" 
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-lightBtn px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm">
                        Watch Free Course
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default VideoSection;