import { useEffect, useState } from "react"
import { Filter } from "./modules/Filter"
import { getImg } from "./api"
import { DateForms } from "./types"

function App() {
	const [img, setImg] = useState('')

	const onChangeDate = (newDate?: DateForms) => {
		getImg(newDate).then(i => setImg(i))
	}

	useEffect(() => {
		onChangeDate()
	}, [])

	return <>
	<div>
	<Filter onChangeDate={onChangeDate}></Filter>
	<div>
{Array.isArray(img) ? img.map(i => <img src={i} key={i} />) : <img src={img} />}
	</div>
	</div>
	
	</>
}

export default App
