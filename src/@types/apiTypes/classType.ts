export interface topicType{
    index: string,
    name: string,
    url: string
}

export interface classApiResponse{
    count: number,
    results : Array<topicType>
}