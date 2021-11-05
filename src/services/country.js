import { fetchData } from '../utils'

const BASE_URL = 'https://travelbriefing.org'

export const fetchCountries = async (callback) => {
	const params = {
		url: `${BASE_URL}/countries.json`,
		options: { method: 'GET' },
	}

	return await fetchData(params, callback)
}

export const fetchCountry = async (countryName, callback) => {
	const params = {
		url: `${BASE_URL}/${countryName}?format=json`,
		options: { method: 'GET' },
	}

	return await fetchData(params, callback)
}

const Country = {
	fetchCountries,
	fetchCountry,
}

export default Country
