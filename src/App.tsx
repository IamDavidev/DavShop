// import Navbar from './view/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FC } from 'react';

// views
import Search from './view/Search';
import Home from './view/Home';

const App: FC = () => {
	return (
		<>
			<div className="davshop">
				<main>
					<BrowserRouter>
						{/* <Navbar /> */}
						<h1 align="center"> Navbar</h1>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/carro" element={<p>carro</p>} />
							<Route path="/sobre" element={<p>sobre</p>} />
							<Route path="/buscar" element={<Search />} />
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
