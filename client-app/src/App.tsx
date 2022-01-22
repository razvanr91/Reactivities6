import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
// import "./App.css";

import axios from "axios";
import { Col, Container, ListGroup, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

function App() {
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		axios.get("https://localhost:5001/api/activities").then((response) => {
			console.log(response);
			setActivities(response.data);
		});
	}, []);

	return (
		<div>
			<Navbar>
				<Navbar.Brand className="ms-1">
					<FontAwesomeIcon icon={faUsers} /> Reactivities
				</Navbar.Brand>
			</Navbar>
			<ListGroup as="ul" className="mt-5">
				{activities.map((activity: any) => {
					return (
						<Col xl="1">
							<ListGroup.Item as="li" key={activity.id}>
								{activity.title}
							</ListGroup.Item>
						</Col>
					);
				})}
			</ListGroup>
			<ul></ul>
		</div>
	);
}

export default App;
