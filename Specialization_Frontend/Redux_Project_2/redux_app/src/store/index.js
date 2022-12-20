import { createStore, combineReducers } from 'redux'
import { userCardsReducer } from './reducers/userCardsReducer';

const rootReducer = combineReducers({

    users: userCardsReducer

});

export const store = createStore(rootReducer);