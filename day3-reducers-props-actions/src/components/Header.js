import React from "react";
import { Button, Navbar, Container, Tabs } from "react-bootstrap";
import { connect } from "react-redux";
import { loginTab, todoTab, tweetsTab } from "../helpers";
import { logoutStarted } from "../actions/login";
import { changeTab } from "../actions/application";

function Header({ loggedIn, activeKey, logoutStarted, changeTab }) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">NuRedux</Navbar.Brand>
        {loggedIn ? (
          <Button variant="outline-success" onClick={logoutStarted}>
            Logout
          </Button>
        ) : (
          ""
        )}
      </Navbar>
      <br />
      <Container>
        <Tabs
          activeKey={activeKey}
          transition={false}
          id="noanim-tab-example"
          onSelect={changeTab}
        >
          {loginTab(loggedIn)}
          {todoTab(loggedIn)}
          {tweetsTab(loggedIn)}
        </Tabs>
      </Container>
    </div>
  );
}

const mapStateToProps = ({ application }) => {
  const { loggedIn, activeKey } = application;
  return { loggedIn, activeKey };
};

const mapDispatchToProps = {
  logoutStarted,
  changeTab,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
