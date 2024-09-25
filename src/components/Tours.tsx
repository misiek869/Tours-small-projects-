import SingleTour from './SingleTour'
import { type Tour } from '../App'

type ToursProps = {
	tours: Tour[]
	removeTour: (id: number) => void
}

const Tours = ({ tours, removeTour }: ToursProps) => {
	return (
		<section>
			<div className='title'>
				<h2>tours</h2>
				<div className='title-underline'></div>
			</div>
			<div className='tours'>
				{tours?.map(tour => {
					return (
						<SingleTour key={tour.id} tour={tour} removeTour={removeTour} />
					)
				})}
			</div>
		</section>
	)
}

export default Tours
