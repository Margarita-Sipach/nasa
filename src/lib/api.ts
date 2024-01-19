import axios from "axios";
import { Params } from "../types";
const URL = 'https://api.nasa.gov/planetary/apod?api_key=kh93AnRphCVlsF1rvTxcPi05JLS3p2N8rNqh83K6'

enum ParamsNames {
	startDate = 'start_date',
	endDate = 'end_date',
	date = 'date'
}

export const getImg = async (newParams: Params) => {
	const params = generateParams(newParams)
	return (await axios.get(URL, { params })).data
}

const generateParams = (newParams?: Params) => {
	const params: Partial<{ [key in ParamsNames]: string }> = {}
	if (Array.isArray(newParams)) {
		newParams[0] && (params[ParamsNames.startDate] = newParams[0]);
		newParams[1] && (params[ParamsNames.endDate] = newParams[1]);
	}
	else {
		newParams && (params[ParamsNames.date] = newParams)
	}
	return params
}