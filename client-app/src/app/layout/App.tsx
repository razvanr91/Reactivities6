import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, ListGroup, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";

function App() {
	const [activities, setActivities] = useState<Activity[]>([]);

	useEffect(() => {
		axios.get<Activity[]>("https://localhost:5001/api/activities").then((response) => {
			console.log(response);
			setActivities(response.data);
		});
	}, []);

	return (
		<div>
			<NavBar />
			<ListGroup as="ul" className="mt-5">
				<Col xl="1">
					{activities.map((activity) => {
						return (
							<ListGroup.Item as="li" key={activity.id}>
								{activity.title}
							</ListGroup.Item>
						);
					})}
				</Col>
			</ListGroup>
			<ul></ul>
		</div>
	);
}

export default App;
