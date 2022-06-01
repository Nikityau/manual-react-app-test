import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";

import Atom from "../UI/Back/Atom";

import AppRouter from "../AppRouter/AppRouter";

import classes from './App.module.css'
import another from './Another.module.scss'

const App = () => {
    return (
        <div className={[classes.container, another.another].join(' ')}>
           <BrowserRouter>
               <Link to={'/'} children={'home'}/>
               <br/>
               <Link to={'/smt'} children={':3'}/>
                <br/>
               <Atom/>
               <AppRouter/>
           </BrowserRouter>
        </div>
    );
};

export default App;