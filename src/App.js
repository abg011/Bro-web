import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Exercises from './pages/Exercise';
import NoPage from './pages/NoPage';
import AddExercise from './pages/AddExercise';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="contact" element={<Contact />} />
				<Route path="exercises" element={<Exercises />}/>
				<Route path="exercises/add" element={<AddExercise />}/>
				<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
