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
	return <main></main>
}

export default App
