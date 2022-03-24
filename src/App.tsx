import Navbar from './view/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FC } from 'react';

const App: FC = () => {
	return (
		<>
			<div className="davshop">
				<main>
					<BrowserRouter>
						<Navbar />
						<Routes>
							<Route path="/" element={<p>davshop</p>} />
							<Route path="/carro" element={<p>carro</p>} />
							<Route path="/sobre" element={<p>sobre</p>} />
							<Route path="/buscar" element={<p>buscar</p>} />
							<Route path="/perfil" element={<p>perfil</p>} />
						</Routes>
					</BrowserRouter>
				</main>
				<footer>soy un footer sin contenido ayudaaa :c</footer>
			</div>
		</>
	);
};

export default App;
