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
		const url = `http://localhost:8000/api/search/?q=${query}`;

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
