import React from "react";
import "./app.css"
import Header from './components/layout/Header'
import Body from "./components/layout/Body";
import Content from "./components/layout/Content";
import Sidebar from "./components/layout/Sidebar";
import Container from "./components/layout/Container";
import Brand from "./components/Brand";
import Logo from "./components/Brand/Logo";
import Title from "./components/Brand/Title";
import User from "./components/User";
import Menu from "./components/Menu";
import Dropdown from './components/Dropdown';
import Alert from './components/Alert';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import PaymentListPage from "./pages/Payment";
import {FamilyListPage, FamilyFormPage} from "./pages/Family";
// import PassengerFormPage from "./pages/Passenger/form";
// import PassengerListPage from "./pages/Passenger/list";
import {PassengerListPage, PassengerFormPage} from "./pages/Passenger";

import AlertProvider from "./state/Alerta/Provider";
import LoadingProvider from "./state/Loading/Provider";
import Loader from "./components/Loader";

function App() {

  return (
    <Container>
      <BrowserRouter>
      <Header>
        <Brand>
          <Logo image="robot.gif" circle />
          <Title>Trip Manager</Title>
        </Brand>
        <User>
          <Dropdown label="Marcos Fernando" />
        </User>
      </Header>
        <Body>
            <Content>
              <LoadingProvider> 
                <AlertProvider>
                  <Loader>
                    <Alert/>
                    <Switch>
                      <Route path="/" exact={true}><h1>Home</h1></Route>
                      <Route path="/pagamentos"><PaymentListPage/></Route>
                      <Route path="/passageiros/novo"><PassengerFormPage/></Route>
                      <Route path="/passageiros"><PassengerListPage/></Route>            
                      <Route exact path="/familias/:id"><FamilyFormPage/></Route>
                      <Route path="/familias"><FamilyListPage/></Route>
                    </Switch>
                  </Loader>
                </AlertProvider>
              </LoadingProvider> 
            </Content>
          <Sidebar>
          <Menu />
        </Sidebar>
      </Body>
      </BrowserRouter>
    </Container>
  );
}
export default App;