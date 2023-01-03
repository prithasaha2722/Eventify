import {createSlice} from '@reduxjs/toolkit'

const initial = {name: '', walletAddress: '', authenticated: false,email: ''}

export const authSlice = createSlice({
    name:'authSlice',
    initialState: initial,
    reducers:{
        login(state,action){
            state.name = action.payload.name
            state.authenticated = true
            state.email = action.payload.email
        },
        setWalletAddress(state,action){
            if (state.authenticated){
            state.walletAddress = action.payload
            }else{
                state.walletAddress = ''
            }
        },
        logout(state){
            state = initial
        }
    }
})