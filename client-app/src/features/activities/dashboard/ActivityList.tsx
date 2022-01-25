import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, SyntheticEvent, useState } from "react";
import { Badge, Button, Card, Row, Spinner } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";

interface Props {
	activities: Activity[];
	selectActivity: (id: string) => void;
	deleteActivity: (id: string) => void;
	submitting: boolean;
}

export default function ActivityList({ activities, selectActivity, deleteActivity, submitting }: Props) {
	const [target, setTarget] = useState("");

	function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
		setTarget(e.currentTarget.name);
		deleteActivity(id);
	}
	return (
		<Fragment>
			{activities.map((activity) => {
				return (
					<Card key={activity.id} className="my-3">
						<Card.Body>
							<Card.Title className="fw-bolder">{activity.title}</Card.Title>
							<Card.Subtitle className="text-muted fs-6">{activity.date}</Card.Subtitle>
							<Card.Text className="mt-3">{activity.description}</Card.Text>
						</Card.Body>
						<Badge pill className="col-1 mb-2 ms-2" bg="primary">
							{activity.category}
						</Badge>
						<Row className="justify-content-end">
							<Button name={activity.id} onClick={(e) => handleActivityDelete(e, activity.id)} variant="danger" className="col-1 mb-2 me-2" size="sm">
								{submitting && target === activity.id && <Spinner animation={"border"} size="sm" />}
								Delete
							</Button>
							<Button onClick={() => selectActivity(activity.id)} variant="primary" className="col-1 mb-2 me-4" size="sm">
								View
							</Button>
						</Row>
						<Card.Footer className="text-muted">
							<FontAwesomeIcon icon={faMapMarker} color="red" /> {activity.city}, {activity.venue}
						</Card.Footer>
					</Card>
				);
			})}
		</Fragment>
	);
}
