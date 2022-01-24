import React, { ChangeEvent, Fragment, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";

interface Props {
	activity: Activity | undefined;
	closeForm: () => void;
}

export default function ActivityForm({ activity, closeForm }: Props) {
	const initialState = activity ?? {
		id: "",
		title: "",
		category: "",
		description: "",
		date: "",
		city: "",
		venue: "",
	};

	const [newActivity, setNewActivity] = useState(initialState);

	function handleSubmit() {
		console.log(newActivity);
	}

	function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const { name, value } = e.target;

		setNewActivity({ ...newActivity, [name]: value });
	}

	return (
		<Fragment>
			<Container className="bg-white">
				<Form onSubmit={handleSubmit} autoComplete="off">
					<Form.Group>
						<Form.Label className="mt-2">Title</Form.Label>
						<Form.Control placeholder="What is the activity?" type="text" value={newActivity.title} name="title" onChange={handleInputChange} />
					</Form.Group>
					<Form.Group>
						<Form.Label className="mt-2">Description</Form.Label>
						<Form.Control
							placeholder="Describe the activity"
							as="textarea"
							value={newActivity.description}
							name="description"
							onChange={handleInputChange}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label className="mt-2">Category</Form.Label>
						<Form.Control placeholder="e.g. drinks, culture" type="text" value={newActivity.category} name="category" onChange={handleInputChange} />
					</Form.Group>
					<Form.Group>
						<Form.Label className="mt-2">Date</Form.Label>
						<Form.Control placeholder="When?" type="text" value={newActivity.date} name="date" onChange={handleInputChange} />
					</Form.Group>
					<Form.Group>
						<Form.Label className="mt-2">City</Form.Label>
						<Form.Control
							placeholder="What city is the activity going to take place in?"
							type="text"
							value={newActivity.city}
							name="city"
							onChange={handleInputChange}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label className="mt-2">Venue</Form.Label>
						<Form.Control
							placeholder="What is the location of the event?"
							type="text"
							value={newActivity.venue}
							name="venue"
							onChange={handleInputChange}
						/>
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
