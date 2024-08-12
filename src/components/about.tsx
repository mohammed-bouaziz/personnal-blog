import Image from "next/image";

const About = () => {
    return (
        <div className="p-7 md:p-24 grid grid-cols-1 md:grid-cols-2 bg-darkBg">
            <div>
                <h1 className="mb-10 md:mb-0 text-5xl font-headline font-bold text-white text-center">Who am I ?</h1>
            </div>
            
            <div className="flex flex-col space-y-20">
                <p className="font-paragraph font-light text-white text-sm text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Exercitationem commodi dolores magni similique enim nihil sapiente 
                    quidem perspiciatis eaque neque voluptate, quaerat dolorem possimus distinctio explicabo. Illo itaque quibusdam nisi.
                    Eius dolore facere sunt quas. 
                    Necessitatibus tempora aperiam ad odio vitae cumque corporis repellendus, 
                    sit velit quo distinctio incidunt cum nobis eveniet similique eos. 
                    Ullam doloribus minima quisquam fugit illo?
                    <br /><br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Exercitationem commodi dolores magni similique enim nihil sapiente 
                    quidem perspiciatis eaque neque voluptate, quaerat dolorem possimus distinctio explicabo. Illo itaque quibusdam nisi.
                    Eius dolore facere sunt quas. 
                    Necessitatibus tempora aperiam ad odio vitae cumque corporis repellendus, 
                    sit velit quo distinctio incidunt cum nobis eveniet similique eos. 
                    Ullam doloribus minima quisquam fugit illo?
                </p>
                <div className="grid grid-cols-3 gap-5 h-1/3">
                    <Image src="/lap.png"
                            alt="software engineer"
                            height="300"
                            width="300" />
                    <Image src="/set.png"
                            alt="software engineer"
                            height="300"
                            width="300" />
                    <Image src="/mes.png"
                            alt="software engineer"
                            height="300"
                            width="300" />
                </div>
            </div>
        </div>
    )
}

export default About;