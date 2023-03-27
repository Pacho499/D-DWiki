import { LeftFilterDatas } from "../@types/MyTypes"

const LeftFilter: React.FC<LeftFilterDatas> = ({topics}) => {

    return (
        <div className="left-0 h-[100vh] fixed mt-[10vh] w-40 bg-secondary overflow-scroll">
            {topics.map((topic) => {
                return (
                    <div className="p-2 text-center font-bold text-base hover:bg-main">
                        <h1>{topic.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default LeftFilter