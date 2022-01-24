import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, ListGroup, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
	const [activities, setActivities] = useState<Activity[]>([]);
	const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);

	useEffect(() => {
		axios.get<Activity[]>("https://localhost:5001/api/activities").then((response) => {
			console.log(response);
			setActivities(response.data);
		});
	}, []);

	function handleSelectActivity(id: string) {
		setSelectedActivity(activities.find((activity) => activity.id === id));
	}

	function handleCancelSelectActivity() {
		setSelectedActivity(undefined);
	}

	return (
		<Fragment>
			<NavBar />
			<Container style={{ marginTop: "7em" }}>
				<ActivityDashboard
					activities={activities}
					selectedActivity={selectedActivity}
					selectActivity={handleSelectActivity}
					cancelSelectActivity={handleCancelSelectActivity}
				/>
			</Container>
		</Fragment>
	);
}

export default App;
