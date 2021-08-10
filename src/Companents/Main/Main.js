import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home'
import Shop from './../Shop/Shop';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Collections from '../Collections/Collections';

const Main = () => {
    return (
        <div>

        <Header/>
            <Switch>
                <Route exact path='/shop/all' component={Shop} />
                <Route exact path='/' component={Home} />
                <Route exact path='/collections' component={Collections}/>
            </Switch>
        <Footer/>
        </div>
    );
};

export default Main;