import React from 'react';
import { Switch, Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {Navbar, StockDetails, Stocks, Homepage, News} from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
          <Navbar />
      </div>

      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>

              <Route exact path = "/">
                <Homepage/>
              </Route>

              <Route exact path = "/stocks">
                <Stocks/>
              </Route>    

              <Route exact path = "/stockDetails/:id">
                <StockDetails/>
              </Route>

              <Route exact path = "/news">
                <News/>
              </Route>
            </Switch>
          </div>
        </Layout>
      
        <div className='footer'>
            <Typography.Title  level={5} style={{color:'white', textAlign: 'center'}}>
              Stock App <br/>
              All rights reserverd
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/Stocks">Stocks</Link>
              <Link to="/News">News</Link>
            </Space>
        </div>

      </div>
    </div>
  )
}

export default App