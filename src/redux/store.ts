import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './reducers/characterReducer';
import episodeReducer from './reducers/episodeReducer';
import filterReducer from './reducers/filterReducer';
import locationReducer from './reducers/locationReducer';
import pageReducer from './reducers/pageReducer';


const store = configureStore({
  reducer: {  
    page: pageReducer,
    character: characterReducer,
    location: locationReducer,
    episodes: episodeReducer,
    filter: filterReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;