import Search from "./search"


const Hero = () => {
    return(
        <div className="flex justify-center mt-32 mb-32">
            <div className="flex flex-col space-y-5 w-1/2 justify-center">
                <h1 className="font-bold font-paragraph text-2xl">If you use software, build software or <br/> 
                    or Just like software...<span className="text-highlight">This website is for you</span>
                </h1>
                <h2 className="font-paragraph text-lg text-justify">
                    I build software myself, and I tell all about it.<br />
                    I’ll tell you how I solve major business problems using 
                    the latest technologies like Python, Javascript etc...<br /> 
                    I go from building full stack SaaS products, to AI Agents.  
                </h2>
                <Search />
            </div>
        </div>
        
    )
}

export default Hero;