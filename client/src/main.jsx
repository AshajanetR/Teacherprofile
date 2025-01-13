import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from 'react-redux';
import teacherReducer from './features/teacher'
import  ProfileidReducer from './features/profileid.js';
import profileinfoReducer from './features/profileinfo.js';

const store =configureStore({
  reducer:{
   teacher:teacherReducer,
   profileid:ProfileidReducer,
   profileinfo:profileinfoReducer,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>  
  </StrictMode>,
)
