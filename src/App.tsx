import { useEffect, useState } from "react"
import { Filter } from "./modules/Filter"
import { getImg } from "./api"
import { DateForms } from "./types"
import { Img } from "./ui/Img"

function App() {
	const [imgInfo, setImgInfo] = useState<any>('')
	const [isLoad, setIsLoad] = useState(false)

	const onChangeDate = (newDate?: DateForms) => {
		setIsLoad(true)
		getImg(newDate)
		.then(i => setImgInfo(i))
		.then(_ => setIsLoad(false))
	}

	useEffect(() => {
		onChangeDate()
	}, [])

	return <>
	{isLoad && <span className="loader"></span>}
	<Filter onChangeDate={onChangeDate}></Filter>
	<div className="gallery">
{Array.isArray(imgInfo) ? imgInfo.map((i) => <Img {...i} key={i} />) : <Img {...imgInfo} />}
	</div>
	</>
}

export default App
