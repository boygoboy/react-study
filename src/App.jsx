import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppFooter from './layout/AppFooter';
import AppHeader from './layout/AppHeader';
function App() {
  return (
    <div className="app">
      <AppHeader/>
      <div className="content">
        {
         useRoutes(routes)
        }
      </div>
        <AppFooter/>
    </div>
  );
}

export default memo(App);  
