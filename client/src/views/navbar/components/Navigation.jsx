import '../styles/navbar.css';
import logo from "../../../assets/fujji_logo.png";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { actionsUsers } from '../../../redux/actions';

const Navigation = () => {
  const { user } = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  const offLine = () => {
      dispatch(actionsUsers.offLine());
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
        <Link to="/">
          <Image src={logo} className="d-inline-block align-top logo_navbar" alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {
              !user.name ? <Link to="/login" className="nav-link">
                Iniciar sesión
              </Link> :
                <Link onClick={offLine} to="/login" className="nav-link">
                  Cerrar sesión
                </Link>
            }
            <Link to="/register" className="nav-link">
              Registrarse
            </Link>
            <Link to="/products" className="nav-link">
              Productos
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
