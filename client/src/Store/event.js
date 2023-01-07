import {createSlice} from '@reduxjs/toolkit'

const initial = {eventid: '' , eventName: '', allEventData : []}

export const eventSlice = createSlice({
    name:'eventSlice',
    initialState: initial,
    reducers:{
        store(state,action){
            state.eventid = action.payload.eventid
            state.eventName = action.payload.eventName
        },
        delete(state){
            state.eventid = ''
            state.eventName = ''
        },
        insertData(state,action){
            state.allEventData = action.payload
        }
        
    }
})