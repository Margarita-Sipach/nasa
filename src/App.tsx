import { useEffect, useState } from "react"
import { Filter } from "./modules/Filter"
import { getImg } from "./api"
import { DateForms } from "./types"

function App() {
	const [img, setImg] = useState('')
	const [isLoad, setIsLoad] = useState(false)

	const onChangeDate = (newDate?: DateForms) => {
		setIsLoad(true)
		getImg(newDate)
		.then(i => setImg(i))
		.then(_ => setIsLoad(false))
	}

	useEffect(() => {
		onChangeDate()
	}, [])

	return <>
	{isLoad && <span className="loader"></span>}
	<Filter onChangeDate={onChangeDate}></Filter>
	<div className="gallery">
{Array.isArray(img) ? img.map(i => <img src={i} key={i} />) : <img src={img} />}
	</div>
	</>
}

export default App
