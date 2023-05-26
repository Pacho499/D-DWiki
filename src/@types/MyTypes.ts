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

export interface LeftFilterDatas{
    topics: Array<topicType>
}

