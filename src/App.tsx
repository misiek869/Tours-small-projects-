import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CreateTour from './pages/CreateTour'
import UpdateTour from './pages/UpdateTour'
import { useState, useEffect } from 'react'
import supabase from './config/supabaseClient'

export type Tour = {
	id: number
	name: string
	image: string
	info: string
	price: string
}

function App() {
	const [tours, setTours] = useState<Tour[]>([])

	const fetchData = async () => {
		const { data, error } = await supabase.from('tours').select()

		if (error) {
			console.error('Error fetching data:', error)
		} else {
			setTours(data)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])
	console.log(tours)

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home tours={tours} />} />
				<Route path='/create' element={<CreateTour />} />
				<Route path='/:id' element={<UpdateTour />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
