import { LeftFilterDatas } from "../@types/MyTypes"

const LeftFilter: React.FC<LeftFilterDatas> = ({classes}) => {

    return (
        <div className="h-[100vh] fixed mt-[10vh] left-0 w-40 bg-secondary">
            {classes.map((cls) => {
                return (
                    <div className="p-2 text-center font-bold text-base hover:bg-main">
                        <h1>{cls.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default LeftFilter