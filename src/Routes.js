import React from "react";

import{Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/index';


export default()=>{

    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/">

            </Route>

            <Route exact path="/">
                Pagina Inicial
            </Route>
        </Switch>
    )

}