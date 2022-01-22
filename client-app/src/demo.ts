export interface Duck {
	name: string;
	numLengs: number;
	makeSound: (sound: string) => void;
}

const duck1: Duck = {
	name: "huey",
	numLengs: 2,
	makeSound: (sound: string) => console.log(sound),
};

const duck2: Duck = {
	name: "dewey",
	numLengs: 2,
	makeSound: (sound: string) => console.log(sound),
};

export const ducks = [duck1, duck2];
