/* eslint-disable */

import { useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./App.css";
import Data from './data.js'
import Card from "./Card";
import Detail from "./Detail";

import { Link, Route, Switch } from 'react-router-dom'

function App(e) {

  let [shirt, setShirt] = useState(Data);

  return (

    <div className="App">

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">여성의류 쇼핑몰</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/cart">Cart</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <div className="jumbotron">
            <p className="jp">
              <Button variant="primary">Learn more</Button>
            </p>
          </div>


          <div className="container" >
            <div className="row">
              {
                shirt.map((a, i) => {
                  return <Card shirt={shirt[i]} i={i} key={i} />
                })
              }
            </div>
          </div>
        </Route>

        <Route exact path='/detail/:id'>
          <Detail shirt={shirt} />
        </Route>

        <Route path="/cart">
          <div>장바구니</div>
        </Route>

      </Switch>
    </div >
  );
}

export default App;
