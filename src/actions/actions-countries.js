export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';

// LISTOWANIE WSZYSTKICH DOSTĘPNYCH PAŃSTW: 

export function getCountries() {
	return {
		type: GET_COUNTRIES
	}
}

// USUWANIE PAŃSTWA

export function deleteCountry(id) {
	return {
		type: DELETE_COUNTRY,
		id
	}
}

export function searchCountries(searchText) {
	return {
		type: SEARCH_COUNTRIES,
		searchText
	}
}

export function setContinent(name) {
	return {
		type: SET_CONTINENT,
		name
	}
}