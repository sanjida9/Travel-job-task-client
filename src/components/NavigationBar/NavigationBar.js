import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/images/imagesss.png";

const NavigationBar = () => {
  const { allContext } = useAuth();
  const { user, logOut } = allContext;
  const { displayName } = user;
  console.log(user);

  const activeStyle = {
    fontWeight: "bold",
    color: "orange",
  };

  return (
    <div className="sticky-top">
      <Navbar className="bg-blue p-2" expand="lg">
        <Container>
          <Navbar.Brand
            sticky="top"
            as={NavLink}
            className="text-white"
            to="/home"
          >
            <h2>
              <img width="18%" className="img-fluid" src={logo} alt="" />
              TraVio
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-md-flex align-items-center">
              <NavLink
                className="mx-1 d-block"
                to="/home"
                activeStyle={activeStyle}
              >
                Home
              </NavLink>
              <NavLink
                className="mx-1 d-block"
                to="/moreProducts"
                activeStyle={activeStyle}
              >
                Blogs
              </NavLink>
              <NavLink
                className="mx-1 d-block"
                to="/review"
                activeStyle={activeStyle}
              >
                Review
              </NavLink>

              {!displayName ? (
                <div>
                  <NavLink
                    className="mx-3"
                    to="/register"
                    activeStyle={activeStyle}
                  >
                    Register
                  </NavLink>
                  <NavLink
                    className="mx-3"
                    to="/login"
                    activeStyle={activeStyle}
                  >
                    Login
                  </NavLink>
                </div>
              ) : (
                <div className="d-md-flex align-items-center">
                  <NavLink
                    className="mx-3 d-block"
                    to="/dashboard"
                    activeStyle={activeStyle}
                  >
                    Dashboard
                  </NavLink>
                  <h6 className="text-light fw-bold me-2 mt-2">
                    {displayName}
                  </h6>

                  <button onClick={logOut} className="btn btn-light">
                    Sign Out
                  </button>

                  {/* <NavDropdown
                    title={
                      <img
                        style={{ width: "45px", borderRadius: "50%" }}
                        src={photoURL || ""}
                        alt=""
                      />
                    }
                    id="basic-nav-dropdown"
                  >
                    <div className="text-center" id="profileDrop">
                      <h6>{displayName}</h6>
                      <p className="">{email}</p>
                      <button onClick={logOut} className="btn btn-success">
                        Sign Out
                      </button>
                    </div>
                  </NavDropdown> */}
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
