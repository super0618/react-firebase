import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./services/firebase.config";

export default function App() {
	const collectionRef = collection(db, "todo");

	useEffect(() => {
		getDocs(collectionRef)
			.then((todo) => {
				console.log(todo.docs.map((r) => ({ ...r.data(), id: r.id })));
			})
			.catch(console.log);
	}, [collectionRef]);

	return (
		<>
			<h2>React-Firebase</h2>
		</>
	);
}
