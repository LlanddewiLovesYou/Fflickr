import {applyMiddleware} from 'redux';
import {thunk} from 'thunk';


const stateShape = {session: {currentUser: null}, errors: {session: []}};


export const store = (preloadedState = stateShape, applyMiddleware) => {
  return createStore(RootReducer, preloadedState, applyMiddleware(thunk));
};
