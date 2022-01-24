import React, { Fragment } from "react";
import { Container, Spinner } from "react-bootstrap";

interface Props {
	inverted?: boolean;
	content?: string;
}

export default function LoadingComponent({ inverted = true, content = "Loading..." }: Props) {
	return (
		<Container className="center">
			<Spinner animation="border" variant="primary" />
			<span className="d-block ms-2">{content}</span>
		</Container>
	);
}
