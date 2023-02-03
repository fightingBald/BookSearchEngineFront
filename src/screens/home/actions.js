import axios from "axios";
import { REQUEST_BOOKS, RECEIVE_BOOKS } from "./actionTypes";

export const requestBooks = (query) => ({
	type: REQUEST_BOOKS,
	query,
});

export const receiveBooks = ({ status, payload }) => ({
	type: RECEIVE_BOOKS,
	status,
	payload,
});

export const getBooks = (query) => {
	return function (dispatch) {
		dispatch(requestBooks(query));
		let s = "";

		let isValid = true;
		try {
			new RegExp(query);
		} catch(e) {
			isValid = false;
		}
		if (isValid) {
			s = "?regex=";
		} else {
			s = "?q=";
		}	
		axios
			.get(`http://localhost:8000/api/search/${s}${query}`)
			.then((response) => {
				dispatch(
					receiveBooks({
						status: "success",
						payload: response.data,
					})
				);
			})
		
			.catch((error) => {
				console.log(error)
				dispatch(
					receiveBooks({
						status: "error",
						payload: error,
					})
				);
			});
		
	};
};

export const getRmds = (query) => {
	return function (dispatch) {
		dispatch(requestBooks(query));
		const url = `/api/recommendations/?book_name=${query}`;

		return axios
			.get(url)
			.then((response) => {
				dispatch(
					receiveBooks({
						status: "success",
						payload: response.data,
					})
				);
			})
			.catch((error) => {
				dispatch(
					receiveBooks({
						status: "error",
						payload: error,
					})
				);
			});
		};
};
