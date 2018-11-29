import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { fetchPosts } from './util/post_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if ( window.currentUser ) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        userRelationships: window.userRelationships
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    delete window.userRelationships;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchPosts = fetchPosts;
  ReactDOM.render(<Root store={store} />, root);
});
