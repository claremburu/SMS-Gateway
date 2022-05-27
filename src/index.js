// scroll bar
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import 'simplebar/src/simplebar.css';
import rootReducer from './store/reducers/rootReducers';
//
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

// ----------------------------------------------------------------------

const storeName = '@onfon';

// Save to local storage // Use Local Storage Persistance
const saveToLocalStorage = (state) => {
  try {
    const stringState = JSON.stringify(state);
    localStorage.setItem(storeName, stringState);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error saving state to local storage: ', err);
  }
};

// Load from local storage // Use Local Storage Persistance
const loadFromLocalStorage = () => {
  try {
    const stringState = localStorage.getItem(storeName);
    if (stringState === null) return undefined;
    return JSON.parse(stringState);
  } catch (err) {
    return undefined;
  }
};

// Use Local Storage Persistance
const persistedStorage = loadFromLocalStorage();

// const thunk = createThunkMiddleware({
//     extraArgumentsEnhanced: {
//         fetch,
//     },
// });

const middleware = [thunk];

// Initialize Store
const store = createStore(
  rootReducer,
  persistedStorage,
  // applyMiddleware(thunk)
  composeWithDevTools(applyMiddleware(...middleware))
);

// Sync to local storage everytime store changes
store.subscribe(() => saveToLocalStorage(store.getState()));

// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </HelmetProvider>,
  document.getElementById('root')
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
