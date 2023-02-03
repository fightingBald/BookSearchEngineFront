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

export const getBooks = (query, isRegex) => {
	return function (dispatch) {
		dispatch(requestBooks(query));
		let s = "?q=";
		if (isRegex) {
			s = "?regex=";
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

