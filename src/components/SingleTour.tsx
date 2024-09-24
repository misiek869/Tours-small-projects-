import React, { useState } from 'react'
import { type Tour } from '../App'

interface SingleTourProps {
	tour: Tour
}

const SingleTour = ({ tour }: SingleTourProps) => {
	const [readMore, setReadMore] = useState<boolean>(false)

	const { name, image, info, price, id } = tour

	return (
		<article className='single-tour'>
			<img src={image} alt={name} className='img' />
			<span className='tour-price'>${price}</span>
			<div className='tour-info'>
				<h4>{name}</h4>

				<p>
					{readMore ? info : `${info.substring(0, 200)}...`}

					<button onClick={() => setReadMore(!readMore)} className='info-btn'>
						{readMore ? 'show less' : 'read more'}
					</button>
				</p>
				<p>{price}</p>
				<button
					onClick={() => removeTour(id)}
					className='delete-btn btn-block btn'
					type='button'>
					Remove Tour
				</button>
			</div>
		</article>
	)
}

export default SingleTour
