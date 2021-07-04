import {createSlice} from '@reduxjs/toolkit';

const storySlice=createSlice({
    name:'getStory',
    initialState:{
        searchInput:'',
        loading:false,
        data:[],
        error:''
    },
    reducers:{
        fetchStory:(state)=>{
            state.loading=true;
            state.data=[];
            state.error='';
        },
        setStory:(state, action)=>{
            state.data=action.payload.data;
            state.loading=false;
        },
        setSearch:(state,action)=>{
            state.searchInput=action.payload;
        },
        setFailure:(state,action)=>{
            state.error=action.payload;
            state.laoding=false;
        }
    }
});
//export reducers/ actions
export const {fetchStory,setStory,setSearch,setFailure}=storySlice.actions;

//export states
export const selectSearch=(state)=>state.getStory.searchInput;
export const selectLoading=(state)=>state.getStory.loading;
export const selectData=(state)=>state.getStory.data;
export const selectError=(state)=>state.getStory.error;

export default storySlice.reducer;