import {createStore} from 'redux'
import {loadState, saveState} from '../../local/localeStore'
import rootReducer from '../todoredux/combine'
const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    saveState({
      todoReducer: store.getState().todoReducer
    });
  });

export default store;