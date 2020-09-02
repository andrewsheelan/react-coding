import React from "react";
import { Button, Navbar, Container, Tabs } from "react-bootstrap";
import { connect } from "react-redux";
import { loginTab, todoTab, tweetsTab } from "../helpers";
import { logoutStarted } from "../actions/login";

function Header({ loggedIn, activeTab, logoutStarted }) {
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
        <Tabs activeKey={activeTab} transition={false} id="noanim-tab-example">
          {loginTab(loggedIn, activeTab)}
          {todoTab(loggedIn, activeTab)}
          {tweetsTab(loggedIn, activeTab)}
        </Tabs>
      </Container>
    </div>
  );
}

const mapStateToProps = ({ application }) => {
  const { loggedIn, activeTab } = application;
  return { loggedIn, activeTab };
};

const mapDispatchToProps = {
  logoutStarted,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
