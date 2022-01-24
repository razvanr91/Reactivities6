import React, { Fragment } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

export default function ActivityForm() {
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
					<Button className="my-3" variant="secondary" type="button">
						Cancel
					</Button>
				</Form>
			</Container>
		</Fragment>
	);
}
