import React from "react";
import Capabilities from "./homecomponents/Capabilities";
import Greeting from "./homecomponents/Greeting";
import "../css/Home.css"

export default function Home () {
	const [username, setUsername] = React.useState("Abhinav");

	return (
		<main className="homeMain">
			<Greeting username={username}/>
			<Capabilities />
		</main>
	);
};
	
