import React, { Fragment } from "react";
import { Col, Container } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
	activities: Activity[];
	selectedActivity: Activity | undefined;
	selectActivity: (id: string) => void;
	cancelSelectActivity: () => void;
}

export default function ActivityDashboard({ activities, selectedActivity, selectActivity, cancelSelectActivity }: Props) {
	return (
		<Fragment>
			<Container className="d-flex">
				<Col xl={8} className="me-3">
					<ActivityList activities={activities} selectActivity={selectActivity} />
				</Col>
				<Col xl={4}>
					{selectedActivity && <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} />}
					<ActivityForm />
				</Col>
			</Container>
		</Fragment>
	);
}
