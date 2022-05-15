import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './reducers/characterReducer';
import episodeReducer from './reducers/episodeReducer';
import locationReducer from './reducers/locationReducer';
import pageReducer from './reducers/pageReducer';


const store = configureStore({
  reducer: {  
    page: pageReducer,
    character: characterReducer,
    location: locationReducer,
    episodes: episodeReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;