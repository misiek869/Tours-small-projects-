import SingleTour from './SingleTour'

const Tours = () => {
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
