import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
	return (
		<Navbar id="navbarComponent" fixed="top">
			<Container>
				<Navbar.Brand className="text-white">
					<FontAwesomeIcon icon={faUsers} className="me-2" /> Reactivities
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						<Nav.Link href="#" className="mt-2 text-white">
							Home
						</Nav.Link>
						<Nav.Link href="#">
							<Button variant="success">Create Activity</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
