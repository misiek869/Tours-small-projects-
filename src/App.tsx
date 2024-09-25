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

export const fetchData = async (): Promise<Tour[]> => {
	const { data, error } = await supabase.from('tours').select()

	if (error) {
		console.error('Error fetching data:', error)
		return []
	}
	return data as Tour[]
}

function App() {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/create' element={<CreateTour />} />
				<Route path='/:id' element={<UpdateTour />} />
			</Routes>
		</main>
	)
}

export default App
