import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import worldReducer from '../reducers/worldReducer';
import { fetchCountries } from '../actions/worldActions';

const rootReducer = combineReducers({
  world: worldReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchCountries());

export default store;
