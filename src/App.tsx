import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import CreateTour from './pages/CreateTour'
import UpdateTour from './pages/UpdateTour'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/create' element={<CreateTour />} />
				<Route path='/:id' element={<UpdateTour />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
