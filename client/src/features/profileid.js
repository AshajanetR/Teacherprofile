import {createSlice} from '@reduxjs/toolkit';

const initialStateValue="";


export const ProfileidSlice =createSlice({
    name:"profileid",
    initialState:{value:initialStateValue},
    reducers:{
        handleprofileid:(state,action)=>{
            state.value=action.payload;
        }
    }
});

export default ProfileidSlice.reducer;
export const {handleprofileid} =ProfileidSlice.actions;