import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id: 1, name: 'Dima'},
  {id: 2, name: 'Sasha'},
  {id: 3, name: 'Alexei'},
  {id: 4, name: 'Olya'},
  {id: 5, name: 'Ivan'},
  {id: 6, name: 'Gosh'}
]

let messegas = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'Lorem'},
  {id: 3, message: 'Lorem ipsum dolor sit amet'},
  {id: 4, message: 'Lorem ipsum dolor sit amet consectetur'},
  {id: 5, message: 'Lorem, ipsum'},
  {id: 6, message: 'Lorem ipsum dolor sit'}
]

let posts = [
  {id: 1, message: 'Hello', likesCounts: 54},
  {id: 2, message: 'How are you?', likesCounts: 10},
  {id: 3, message: 'It\'s my first post', likesCounts: 12}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messegas={messegas} posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
