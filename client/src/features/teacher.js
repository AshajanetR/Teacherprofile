import {createSlice} from '@reduxjs/toolkit';

const initialStateValue=[];


export const teacherSlice =createSlice({
    name:"teacher",
    initialState:{value:initialStateValue},
    reducers:{
        handlefetch:(state,action)=>{
            state.value=action.payload;
        }
    }
});

export default teacherSlice.reducer;
export const {handlefetch} =teacherSlice.actions;