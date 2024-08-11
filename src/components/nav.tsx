
const Nav = () => {

    return (
        <nav className="text-black px-10 py-4 md:px-24 md:py-6 w-full">
            <div className="container mx-auto flex justify-between items-center">

                <div>
                <a href="/" className="text-lg font-semibold text-mainText">mb.</a>
                </div>

                <div>
                <a href="/about" className="md:px-4 px-2 text-mainText font-bold">blog</a>
                <a href="/services" className="md:px-4 px-2 text-mainText font-bold">about</a>
                <a href="/contact" className="md:px-4 px-2 text-mainText font-bold">contact</a>
                </div>

            </div>
    </nav>
    )

}

export default Nav