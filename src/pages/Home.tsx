import Tours from '../components/Tours'
import { type Tour } from '../App'

interface HomeProps {
	tours: Tour[]
}

const Home = ({ tours }: HomeProps) => {
	return <Tours tours={tours} />
}

export default Home
