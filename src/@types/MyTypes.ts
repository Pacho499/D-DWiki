import { classType } from "./apiTypes/classType"

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
    classes: Array<classType>
}

