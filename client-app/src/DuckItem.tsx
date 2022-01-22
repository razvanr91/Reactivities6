import React from "react";
import { Duck } from "./demo";

interface Props {
	duck: Duck;
}

export default function DuckItem({ duck }: Props) {
	return (
		<div>
			<div key={duck.name}>
				<span>{duck.name}</span>
				<button onClick={() => duck.makeSound(`${duck.name} says Quack!`)}>What does {duck.name} say?</button>
			</div>
		</div>
	);
}
