import Search from "./search";
import ArticleCard from "./articleCard";

const SelectedArticles = () => {
    return (
        <div className="flex flex-col px-24 space-y-10 justify-center">
            <h1 className="text-center font-headline text-4xl mt-20 font-bold">Selected Articles</h1>
            <div className="flex justify-center">
                <Search />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
            <button type="submit" 
                    className="mt-3 justify-center rounded-md border border-transparent bg-darkBtn px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm">
                All Articles
            </button>
        </div>
    )
}

export default SelectedArticles;