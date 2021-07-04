import {configureStore} from '@reduxjs/toolkit';
import storyReducer from '../features/storySlice';

export default configureStore({
    reducer:{
        story:storyReducer,
    }
})