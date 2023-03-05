import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Exercises from './pages/Exercise';
import NoPage from './pages/NoPage';
import AddExercise from './pages/AddExercise';
import ExercisePage from './pages/ExercisePage';
import Clearit from './pages/Clearit';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout title={"Bro"}/>}>
					<Route index element={<Home />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="contact" element={<Contact />} />
					<Route path="exercises">
						<Route index element={<Exercises/>} />
						<Route path="add" element={<AddExercise />}/>
						<Route path=':exId' element={<ExercisePage/>}/>
					</Route>
					<Route path="*" element={<NoPage />} />
				</Route>
				<Route path="/" element={<Layout title={"Clearit!"}/>}>
					<Route path="clearit" element={<Clearit/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
