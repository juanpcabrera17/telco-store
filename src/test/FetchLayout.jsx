
import FetchNombre from './FetchNombre'

export default function FetchLayout({ persona }) {
	return (
		<>
			{persona.map((nombre) => (
				<FetchNombre nombre={nombre}/>
			))}
		</>


	)
}

