import React, { Fragment } from "react";
import { Col, Container, ListGroup } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";

interface Props {
	activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
	return (
		<Fragment>
			<Container>
				<Col xl={8}>
					<ActivityList activities={activities} />
				</Col>
			</Container>
		</Fragment>
	);
}
