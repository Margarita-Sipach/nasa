import { useEffect, useState } from "react"
import { Filter } from "./modules/Filter"
import { getImg } from "./lib/api"
import { ImgInfo, Params } from "./types"
import { Gallery } from "./modules/Gallery"
import { Spin } from "antd"

function App() {
	const [imgInfo, setImgInfo] = useState<ImgInfo>({} as ImgInfo)
	const [isLoading, setIsLoading] = useState(false)

	const onChangeDate = (newDate: Params = '') => {
		setIsLoading(true)
		getImg(newDate)
		.then(i => setImgInfo(i))
		.then(() => setIsLoading(false))
	}

	useEffect(() => {
		onChangeDate()
	}, [])

	return <>
		{isLoading && <Spin size="large"/>}
		<Filter onChangeDate={onChangeDate}/>
		<Gallery imgInfo={imgInfo}/>
	</>
}

export default App
