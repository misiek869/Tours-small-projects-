import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { z } from 'zod'
import Home from './pages/Home'
import CreateTour from './pages/CreateTour'
import UpdateTour from './pages/UpdateTour'
import { useState, useEffect } from 'react'
import supabase from './config/supabaseClient'

const tourSchema = z.object({
	id: z.number(),
	name: z.string(),
	image: z.string(),
	info: z.string(),
	price: z.string(),
})

type Tour = z.infer<typeof tourSchema>

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
