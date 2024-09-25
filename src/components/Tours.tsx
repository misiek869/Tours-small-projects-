import SingleTour from './SingleTour'
import { type Tour } from '../App'

type TourProps = {
	tours: Tour[]
}

const Tours = ({ tours }: TourProps) => {
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
