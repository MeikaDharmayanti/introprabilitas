import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import styles from "./style.module.css";

const Header = () => {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");
    const handleSearch = () => {
        keyword.length > 0 ? navigate(`/search/${keyword}`) : console.log('tidak ada ')
    };
    return (
        <Navbar bg="green" variant="gray" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center" }}>
                    Maniac Reading
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        {/* <Nav.Link as={Link} to="/">Dashboard</Nav.Link> */}
                        <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/akun">Akun</Nav.Link>
                        <Nav.Link as={Link} to="/saved">Download Buku</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="me-2"
                            value={keyword}
                            onChange={(e) => {
                                    setKeyword(e.target.value);
                                }
                            }
                        />
                        <Button
                            variant="primary"
                            onClick={handleSearch}>
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;