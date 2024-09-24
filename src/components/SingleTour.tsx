import { type Tour } from '../App'

interface SingleTourProps {
	tour: Tour
}

const SingleTour = ({ tour }: SingleTourProps) => {
	return <div>{tour.name}</div>
}



export default SingleTour
