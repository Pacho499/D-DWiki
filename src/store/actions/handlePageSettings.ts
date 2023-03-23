import * as actionTypes from '../actionTypes/pageSettings'

export const changeLanguace = (language:string) => {
    return{ 
        type:actionTypes.SET_LANGUAGE,
        payload: language
    }
}