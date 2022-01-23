import React, { Fragment } from "react";
import { Col, Container, ListGroup } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";

interface Props {
	activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
	return (
		<Fragment>
			<Container>
				<Col xl={8}>
					<ListGroup as="ul">
						{activities.map((activity) => {
							return (
								<ListGroup.Item className="border-0 bg-transparent" as="li" key={activity.id}>
									{activity.title}
								</ListGroup.Item>
							);
						})}
					</ListGroup>
				</Col>
			</Container>
		</Fragment>
	);
}
