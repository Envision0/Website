import * as React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Data } from './components/Data';
import { Layout } from './components/Layout';
import Location from './components/Location';
import InteractiveModelPage from './components/InteractiveModelPage';
import Conditions from './components/Conditions';

export const routes = (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/location' component={Location} />
        <Route exact path='/conditions' component={Conditions} />
        <Route exact path='/interactive_model' component={InteractiveModelPage} />
        <Route exact path='/data' component={Data} />
    </Layout>
)
