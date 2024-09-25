import { useState, useEffect } from 'react'
import supabase from './config/supabaseClient'
import Tours from './components/Tours'

export type Tour = {
	id: number
	name: string
	image: string
	info: string
	price: string
}

function App() {
	const [tours, setTours] = useState<Tour[]>([])

	const fetchData = async (): Promise<Tour[]> => {
		const { data, error } = await supabase.from('tours').select()

		if (error) {
			console.error('Error fetching data:', error)
			return []
		}
		// return data as Tour
		setTours(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<main>
			<Tours tours={tours} />
		</main>
	)
}

export default App
