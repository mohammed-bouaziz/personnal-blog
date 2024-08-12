import Search from "./search";
import ArticleCard from "./articleCard";

const SelectedArticles = () => {
    return (
        <>
            <div className="flex flex-col px-7 md:px-24 space-y-10 justify-center">
                <h1 className="text-center font-headline text-4xl mt-20 font-bold">Selected Articles</h1>
                <div className="flex justify-center">
                    <Search />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>
            </div>
            <div className="flex justify-center mt-10 mb-10">
                <button type="submit" 
                        className="w-1/2 md:w-1/4 justify-end rounded-md border border-transparent bg-darkBtn px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:text-sm">
                    All Articles
                </button>
            </div>
            
        </>
        
    )
}

export default SelectedArticles;