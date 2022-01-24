import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";

interface Props {
	activity: Activity;
	cancelSelectActivity: () => void;
	openForm: (id: string) => void;
}

export default function ActivityDetails({ activity, cancelSelectActivity, openForm }: Props) {
	return (
		<Card className="my-3">
			<Card.Img className="p-0 m-0" variant="top" src={`assets/categoryImages/${activity.category}.jpg`} />
			<Card.Body>
				<Card.Title className="fw-bolder">{activity.title}</Card.Title>
				<Card.Subtitle className="text-muted fs-6">{activity.date}</Card.Subtitle>
				<Card.Text className="mt-3">{activity.description}</Card.Text>
				<Button onClick={() => openForm(activity.id)} className="col-3 float-end" variant="primary">
					Edit
				</Button>
				<Button onClick={cancelSelectActivity} className="col-3" variant="secondary">
					Cancel
				</Button>
			</Card.Body>
			<Badge pill className="col-2 mb-2 ms-2" bg="primary">
				{activity.category}
			</Badge>

			<Card.Footer className="text-muted">
				<FontAwesomeIcon icon={faMapMarker} color="red" /> {activity.city}, {activity.venue}
			</Card.Footer>
		</Card>
	);
}
