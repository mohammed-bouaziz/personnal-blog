const ArticleCard = () => {
    return (
        <div className="mt-5 md:mt-0 flex flex-col space-y-6 mb-10 md:items-center">
            <h1 className="text-2xl font-headline font-bold text-start md:text-center">This is a Big Title for an Article I Wrote</h1>
            <h2 className="text-sm font-paragraph font-light w-3/4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Mollitia, vel quam perferendis odit magni sequi quia. 
                Assumenda fugit esse maiores nam? Vel inventore rem molestias culpa facere obcaecati nihil voluptas?</h2>
            <div className="flex w-3/4 justify-between">
                <p className="text-xs font-light font-paragraph">By Mohammed Bouaziz</p>
                <p className="text-xs font-light font-paragraph">Dec 23, 2024</p>
            </div>
        </div> 
    )
}

export default ArticleCard;