import { mainWikiCardDatas } from "../datas/WikiCardDatas"
import { Link } from "react-router-dom"
const Wiki = () => {

    return(
        <div className="pt-[10vh] min-h-[100vh]">
            <h1 className="text-center text-xl text-white py-4 font-bold">Welcome to wiki section</h1>
            <div className="grid-cols-4 w-3/4 m-auto grid gap-8 pb-10">
               {mainWikiCardDatas.map(data => {
                return(
                    <div className="bg-main text-center rounded-md">
                        <h1 className="font-bold text-lg my-6">{data.title}</h1>
                        <p className="w-[80%] h-48 m-auto">{data.description}</p>
                        <Link to={`/Wiki/${data.title}`}>
                            <p className="p-1 bg-buttons hover:bg-buttonsHover w-1/2 m-auto rounded-lg mb-4">{`go ${data.title}`}</p>
                        </Link>
                        
                    </div>
                )
            })} 
            </div>
            
        </div>
    )
}
export default Wiki