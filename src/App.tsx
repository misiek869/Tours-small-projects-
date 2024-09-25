import { useState, useEffect } from 'react'
import supabase from './config/supabaseClient'
import Tours from './components/Tours'
import Loading from './components/Loading'

export type Tour = {
	id: number
	name: string
	image: string
	info: string
	price: string
}

function App() {
	const [tours, setTours] = useState<Tour[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	const removeTour = id => {
		const newTours = tours.filter(tour => tour.id !== id)
		setTours(newTours)
	}

	const fetchData = async (): Promise<Tour[]> => {
		const { data, error } = await supabase.from('tours').select()

		if (error) {
			console.error('Error fetching data:', error)
			return []
		}
		setLoading(false)
		setTours(data)
		return data
	}

	useEffect(() => {
		fetchData()
	}, [])

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		)
	}

	if (tours.length === 0) {
		return (
			<main>
				<div className='title'>
					<h2>no tours left</h2>
					<button className='btn' onClick={() => fetchData()}>
						refresh
					</button>
				</div>
			</main>
		)
	}

	return (
		<main>
			<Tours tours={tours} />
		</main>
	)
}

export default App
