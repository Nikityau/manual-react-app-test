import React, {Component, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom'

const Lazy = React.lazy(() => import('../Lazy/Lazy'))

class AppRouter extends Component {
    render() {
        return (
           <Suspense fallback={'Loading...'}>
               <Routes>
                   <Route path={'/'}>
                       <Route index element={'Home'}/>
                   </Route>
                   <Route path={'/about'} element={'About'}/>
                   <Route path={'/lazy'} element={<Lazy/>}/>
               </Routes>
           </Suspense>
        );
    }
}

export default AppRouter;