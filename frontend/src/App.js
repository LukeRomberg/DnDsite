import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import Races from './Components/Races'
import Race from './Components/Race'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'


export default function App() {
  return (
      <div className="Home">
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Calypsis Universum</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Races">Races</Nav.Link>
        {/*Saving this for when I add more functionality to the site and have use for a dropdown menu. 
        <NavDropdown title="More" id="basic-nav-dropdown">
          <NavDropdown.Item href="/users">Users</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    <Router>
      <div className="Center">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Race/:id">
            <Race />
          </Route>
          <Route path="/Races">
            <Races />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
      </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}


