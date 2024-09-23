import { z } from 'zod'
import axios from 'axios'
import supabase from './config/supabaseClient'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_ANON_KEY

export const tourSchema = z.object({
	id: z.number(),
	name: z.string(),
	image: z.string(),
	info: z.string(),
	price: z.string(),
})

export type Tour = z.infer<typeof tourSchema>

export const fetchTours = async (): Promise<Tour[]> => {
	try {
		const response = await axios.get(`${supabaseUrl}/your_table_name`, {
			headers: {
				apikey: supabaseKey,
				Authorization: `Bearer ${supabaseKey}`,
				'Content-Type': 'application/json',
			},
		})
		return response.data
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}
