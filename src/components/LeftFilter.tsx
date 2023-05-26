import { LeftFilterDatas } from "../@types/MyTypes"

const LeftFilter: React.FC<LeftFilterDatas> = ({topics}) => {
    
    const renderTopic = () => {
        return Object.keys(topics).map((topic) => {
            const primaryTopic = topic
            return topics[topic].map((topic,index) => {
                return (
                <div className="p-2 text-center font-bold text-base hover:bg-main" key={index}>
                    <h1>{primaryTopic}</h1>
                    <h1>{topic.name}</h1>
                </div>
                );
            });
        });
    }

    return (
        <div className="left-0 h-[100vh] fixed mt-[10vh] w-40 bg-secondary overflow-scroll">
            {renderTopic()}
        </div>
    )
}

export default LeftFilter