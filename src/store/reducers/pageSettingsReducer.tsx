import { pageSettingsState as State } from "../reducersTypes"
import { AnyAction } from "@reduxjs/toolkit"

const initialState : State = {
    language:'en'
}

const reducer = (state: State = initialState, action: AnyAction)=> {
    switch (action.type) {
        
        default:
            return state
    }
}

export default reducer