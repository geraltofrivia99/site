import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import {Provider} from 'react-redux'
import App from './App'
// import reducer from './redux/reducers'
// import createHistory from "history/createBrowserHistory";
// import { Route } from "react-router";
// import {
//   ConnectedRouter,
//   routerReducer,
//   routerMiddleware,
//   push
// } from "react-router-redux";
// import {loadState, saveState} from './localStorage'

// const history = createHistory();
// const middleware = routerMiddleware(history);


// const persistedState = loadState()
// const store = createStore(reducer, composeWithDevTools(
//     applyMiddleware(),
//     // other store enhancers if any
//   ));
  // const store = createStore(
  //   reducer,
  //   composeWithDevTools(
  //     applyMiddleware(middleware),
  //     // other store enhancers if any
  //   )
  // );
// store.subscribe(()=>{
//     saveState({
//         todos: store.getState().todos
//     })
// })

ReactDOM.render(
  <BrowserRouter><App/></BrowserRouter>,  
document.getElementById('root'));
registerServiceWorker();


// ReactDOM.render(
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//           <App/>
//         </ConnectedRouter>
//     </Provider>,
//  document.getElementById('root'));
// registerServiceWorker();