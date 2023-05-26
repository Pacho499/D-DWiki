import { topicType } from "./apiTypes/classType"

export interface wikiDetailDatas{
    [sectionName:string] : {
        call: Array<string>,
        textData:Array<CardDatas>,
    }
    
}

export interface CardDatas{
    title:string,
    description:string
}

export interface HomeMainDatas{
    title:string,
    firstParagraph:string, 
    secondParagraph:string,
    welcome:string,
    secondTitle:string
}

export interface TopicsData{
    [topic:string] : Array<topicType>
}

export interface LeftFilterDatas{
    topics: TopicsData
}

