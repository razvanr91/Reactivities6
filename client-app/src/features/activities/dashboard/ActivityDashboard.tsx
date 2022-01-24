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
	editMode: boolean;
	openForm: (id: string) => void;
	closeForm: () => void;
	createOrEdit: (activity: Activity) => void;
	deleteActivity: (id: string) => void;
	submitting: boolean;
}

export default function ActivityDashboard({
	activities,
	selectedActivity,
	selectActivity,
	cancelSelectActivity,
	editMode,
	openForm,
	closeForm,
	createOrEdit,
	deleteActivity,
	submitting,
}: Props) {
	return (
		<Fragment>
			<Container className="d-flex">
				<Col xl={8} className="me-3">
					<ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} />
				</Col>
				<Col xl={4}>
					{selectedActivity && !editMode && (
						<ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} openForm={openForm} />
					)}
					{editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} submitting={submitting} />}
				</Col>
			</Container>
		</Fragment>
	);
}
