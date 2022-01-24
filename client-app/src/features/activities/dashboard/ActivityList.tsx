import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";

interface Props {
	activities: Activity[];
	selectActivity: (id: string) => void;
}

export default function ActivityList({ activities, selectActivity }: Props) {
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
						<Button onClick={() => selectActivity(activity.id)} variant="primary" className="col-1 mb-2 me-2 align-self-end" size="sm">
							View
						</Button>
						<Card.Footer className="text-muted">
							<FontAwesomeIcon icon={faMapMarker} color="red" /> {activity.city}, {activity.venue}
						</Card.Footer>
					</Card>
				);
			})}
		</Fragment>
	);
}
