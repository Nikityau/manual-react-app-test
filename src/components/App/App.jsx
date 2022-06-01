import React from 'react';
import AppRouter from "../AppRouter/AppRouter";

import {BrowserRouter, Link} from 'react-router-dom'

const App = () => {
    return (
       <div data-testid={'app-js'}>
           <BrowserRouter>
               <Link to={'/'}>Home</Link>
               <Link to={'/about'}>About</Link>
               <AppRouter/>
           </BrowserRouter>
       </div>
    );
};

export default App;