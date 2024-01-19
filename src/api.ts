import axios from "axios";
import { DateForms } from "./types";
const URL = 'https://api.nasa.gov/planetary/apod?api_key=kh93AnRphCVlsF1rvTxcPi05JLS3p2N8rNqh83K6'

export const getImg = async(newParams?: DateForms) => {
	const params = generateParams(newParams)
	return (await axios.get(URL, {params})).data
}

const generateParams = (newParams?: DateForms) => {
	const params: any = {}
	if(Array.isArray(newParams)){
		newParams[0] && (params['start_date'] = newParams[0]);
		newParams[1] && (params['end_date'] = newParams[1]);
		return params
	}
	newParams && (params['date'] = newParams)
	return params
}