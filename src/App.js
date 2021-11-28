import './App.css';
import Home from './conponents/Pages/Home/Home';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './conponents/Pages/Navigation/Navigation';
import Login from './conponents/Pages/Login/Login';
import Dashboard from './conponents/Pages/Dashboard/Dashboard';
import Explore from './conponents/Pages/Explore/Explore';
import AuthProvider from './context/AuthProvider';
import BuyNow from './conponents/Pages/BuyNow/BuyNow';
import MyOrder from './conponents/Pages/MyOrder/MyOrder';
import PrivateRoute from './conponents/PrivateRoute/PrivateRoute';
import AboutUs from './conponents/Pages/MyOrder/AboutUs/AboutUs';

function App() {
  const [ navState, setNavState] = React.useState(false); 
  const styleTrue = {
      color: "blue",
      width: "20%",
      transition: "ease-in-out 1.5s"
  }
  const styleTrueBody = {
      marginLeft: "20%",
      width: "80%",
      transition: "ease-in-out 1.5s"
  }
  const styleFlase = {
      color: "red",
      width: "65px",
      transition: "ease-in-out 1.5s"
  }
  const styleFlaseBody = {
      marginLeft: "65px",
      width: "calc(100% - 65px)",
      transition: "ease-in-out 1.5s"
  }
  return (
    <div className="flex flex-col-reverse app">
    <AuthProvider>
    <BrowserRouter>
        <div style={ navState ? styleTrue : styleFlase } className="border-r-2 h-screen fixed inset-y-0 left-0">
            <Navigation navState={navState} setNavState={setNavState} />   
        </div>
        <div style={ navState ? styleTrueBody : styleFlaseBody }>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/explore">
                    <Explore />
                </Route>
                <PrivateRoute path="/my-order">
                    <MyOrder/>
                </PrivateRoute>
                <PrivateRoute path="/my-order">
                    <MyOrder/>
                </PrivateRoute>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/about">
                    <AboutUs/>
                </Route>
                <PrivateRoute path="/buy-now/:_id">
                    <BuyNow/>
                </PrivateRoute>

            </Switch>
        </div>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
