import SingleTour from './SingleTour'
import { fetchData } from '../App'
import { useQuery } from '@tanstack/react-query'

const Tours = () => {
	const {
		isPending,
		isError,
		error,
		data: tours,
	} = useQuery({
		queryKey: ['tours'],
		queryFn: fetchData,
	})

	if (isPending) return <h2>Loading...</h2>
	if (isError) return <h2>Error : {error.message} </h2>

	return (
		<section>
			<div className='title'>
				<h2>our tours</h2>
				<div className='title-underline'></div>
			</div>
			{tours?.map(tour => {
				return <SingleTour key={tour.id} tour={tour} />
			})}
		</section>
	)
}

export default Tours
