import React, { Fragment } from "react";
import { Col, Container } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityList from "./ActivityList";

interface Props {
	activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
	return (
		<Fragment>
			<Container className="d-flex">
				<Col xl={8} className="me-3">
					<ActivityList activities={activities} />
				</Col>
				<Col xl={4}>{activities[0] && <ActivityDetails activity={activities[0]} />}</Col>
			</Container>
		</Fragment>
	);
}
