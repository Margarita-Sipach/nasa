import { useEffect, useState } from "react"
import { Filter } from "./modules/Filter"

function App() {

	const [date, setDate] = useState(new Date)


	const onChangeDate = (newDate: any) => {
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
