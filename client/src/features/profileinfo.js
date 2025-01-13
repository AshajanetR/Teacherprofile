import {createSlice} from '@reduxjs/toolkit';

const initialStateValue={};


export const profileinfoslice =createSlice({
    name:"profileinfo",
    initialState:{value:initialStateValue},
    reducers:{
        handleprofileinfo:(state,action)=>{
            state.value=action.payload;
        }
    }
});

export default profileinfoslice.reducer;
export const {handleprofileinfo} =profileinfoslice.actions;