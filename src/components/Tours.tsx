import SingleTour from './SingleTour'
import { type Tour } from '../App'

type TourProps = {
	tours: Tour[]
	removeTour: (id: number) => void
}

const Tours = ({ tours, removeTour }: TourProps) => {
	return (
		<section>
			<div className='title'>
				<h2>our tours</h2>
				<div className='title-underline'></div>
			</div>
			{tours?.map(tour => {
				return <SingleTour key={tour.id} tour={tour} removeTour={removeTour} />
			})}
		</section>
	)
}

export default Tours
