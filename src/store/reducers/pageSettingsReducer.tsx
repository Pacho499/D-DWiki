import { pageSettingsState as State } from "../reducersTypes"
import { AnyAction } from "@reduxjs/toolkit"
import * as ActionTypes from '../actionTypes/pageSettings'

const initialState : State = {
    language:'en'
}

const reducer = (state: State = initialState, action: AnyAction)=> {
    switch (action.type) {
        case ActionTypes.SET_LANGUAGE:
            return{
                ...state,
                language: action.payload
            }
        default:
            return state
    }
}

export default reducer