import React, { Fragment } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";

interface Props {
	activity: Activity | undefined;
	closeForm: () => void;
}

export default function ActivityForm({ activity, closeForm }: Props) {
	return (
		<Fragment>
			<Container className="bg-white">
				<Form>
					<Form.Group>
						<Form.Label className="mt-2">Title</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
					<Form.Group>
						<Form.Label className="mt-2">Description</Form.Label>
						<Form.Control as="textarea" />
					</Form.Group>
					<Form.Group>
						<Form.Label className="mt-2">Category</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
					<Form.Group>
						<Form.Label className="mt-2">Date</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
					<Form.Group>
						<Form.Label className="mt-2">City</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
					<Form.Group>
						<Form.Label className="mt-2">Venue</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
					<Button className="my-3 float-end" variant="primary" type="submit">
						Submit
					</Button>
					<Button onClick={closeForm} className="my-3" variant="secondary" type="button">
						Cancel
					</Button>
				</Form>
			</Container>
		</Fragment>
	);
}
