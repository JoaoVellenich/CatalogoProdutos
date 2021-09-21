import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Cadastro from './pages/cadastro';

function route (){
    return(
        <BrowserRouter>
            <Route path='/' exact component={Home}/>
            <Route path='/cadastro' component={Cadastro}/>
        </BrowserRouter>        
    )
}

export default route;