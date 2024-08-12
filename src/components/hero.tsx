import Search from "./search"
import Image from "next/image";


const Hero = () => {
    return(
        <div className="flex flex-col mt-10 md:mt-0 md:flex-row justify-center items-center">
            <div className="flex flex-col space-y-5 w-2/3 md:w-1/2">
                <h1 className="font-bold font-paragraph text-2xl">If you use software, build software or <br/> 
                    or Just like software...<span className="text-highlight">This website is for you</span>
                </h1>
                <h2 className="font-paragraph text-lg text-justify">
                    I build software myself, and I tell all about it.<br />
                    I’ll tell you how I solve major business problems <br/> using 
                    the latest technologies <br/> like Python, Javascript etc...<br /> 
                    I go from building full stack SaaS products, to AI Agents.  
                </h2>
                <Search />
            </div>
            <div>
                <Image  src="/dev.png"
                        alt="Senior Software engineer"
                        height="500"
                        width="500" />
            </div>
        </div>
        
    )
}

export default Hero;