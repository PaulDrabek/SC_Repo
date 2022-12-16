import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../apis/AuthFinder";
import { unauthenticateUser } from "../redux/slices/authSlice";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { BauteilContext } from "../context/BauteilContext";
import "../styles/App.css";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { render } from "react-dom";

//Header Komponent für jeder Seite
const Header = () => {
  //isAuth als State importiert sodass wir wissen können, ob der Benutzer authentiziert ist oder nicht
  const { isAuth } = useSelector((state) => state.auth);

  //ForTest
  const { userData, setUserData } = useContext(BauteilContext);

  //Import of Dispatch für die Anwendung in Logout Funktion
  const dispatch = useDispatch();

  //Logout Funktion für das Event Clicken auf Abmeldung
  const logout = async () => {
    try {
      await onLogout();

      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
      setUserData({ benutzername: "", benutzertyp: "" });
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <>
      {/* Default-Breakpoint Medium 'md' bei Seiten die kleiner als 768 px dargestellt werden
       */}
      <Navbar collapseOnSelect expand="md" className="navMod" variant="dark">
        <Container fluid className="navContainer">
          <Navbar.Brand className="navBrand">
            <img
              src="/images/logoNeuWhite.png"
              alt="Wooden Valley Logo"
              height="55"
              className="navImg"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navToogle"
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="navCollContainer">
              <Nav className="navElements">
                <NavLink to="/" className="navLinkBody">
                  HOME
                </NavLink>
                {isAuth ? (
                  <NavLink
                    to="/"
                    onClick={() => logout()}
                    className="navLinkBody"
                  >
                    ABMELDUNG
                  </NavLink>
                ) : (
                  <NavLink to="/login" className="navLinkBody">
                    ANMELDUNG
                  </NavLink>
                )}
                {userData.benutzertyp === "Admin" ? (
                  <NavLink to="/admin" className="navLinkBody">
                    ADMIN
                  </NavLink>
                ) : (
                  <></>
                )}
                <NavLink to="/" className="navLinkBody">
                  USER KONTO
                </NavLink>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
