import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import socialMediaReducers from './reducers/socialMediaReducer';

const rootReducers = combineReducers({
  socialMedia: socialMediaReducers
})

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store