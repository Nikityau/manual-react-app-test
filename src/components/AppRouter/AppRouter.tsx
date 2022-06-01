import React from 'react';
import { Routes, Route } from 'react-router-dom'

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'}>
                <Route index element={'Hello :) its mt first manual build react app'}/>
                <Route path={'smt'} element={':3'}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;