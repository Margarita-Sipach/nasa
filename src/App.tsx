import { useState } from "react"
import { Filter } from "./modules/Filter"

function App() {

	const [_, setDate] = useState<string | string[]>()


	const onChangeDate = (newDate: string | string[]) => {
		setDate(newDate)
	}

	return <>
	<div>
	<Filter onChangeDate={onChangeDate}></Filter>
	<div>

	</div>
	</div>
	
	</>
}

export default App
