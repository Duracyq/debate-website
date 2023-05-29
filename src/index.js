import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App';
import lorem from './data/statements.json'
import title from './data/titles.json'
import aboutMe_txt from './data/aboutme.json';

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App 
      lorem={lorem.lorem}
      about_me={aboutMe_txt.aboutme}
      title={title.title}
    />
  </React.StrictMode>,
);