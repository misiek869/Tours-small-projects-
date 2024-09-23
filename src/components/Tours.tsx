import { type Tour } from '../App'
import Tour from './Tour'

interface HomeProps {
	tours: Tour[]
}

const Tours = ({ tours }: HomeProps) => {
	return (
		<section>
			<div className='title'>
				<h2>our tours</h2>
				<div className='title-underline'></div>
			</div>
			<div className='tours'>
				{tours?.map(tour => {
					return <Tour />
				})}
			</div>
		</section>
	)
}

export default Tours
