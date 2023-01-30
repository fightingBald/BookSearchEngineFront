import React, { useState, useEffect } from "react";
import axios from "axios";
import isEmpty from "lodash/isEmpty";
import "./book.css";
import Spinner from "react-bootstrap/Spinner";

const createMarkup = (markup) => ({ __html: markup });

const Book = ({ match: { params } }) => {
	const [bookInfo, setBookInfo] = useState({});
	const [isFetching, setIsFetching] = useState(false);
	/*   useEffect(() => {
    setIsFetching(true)
    axios.get(`https://www.googleapis.com/books/v1/volumes/${params.ID}`)
    .then(response => {
      setBookInfo(response.data);
    })
    .catch(() => {
      setBookInfo({});
    })
    .finally(() => {
      setIsFetching(false)
    }) */
	useEffect(() => {
		setIsFetching(true);
		let s = "";
		let regexChecker = new RegExp(/^[0-9a-zA-Z]+$/);
		if (regexChecker.test(params.ID) === true) {
			s = "?regex=";
		} else {
			s = "?q=";
		}

		axios
			.get(`http://localhost:8000/api/search/${s}${params.ID}`)
			.then((response) => {
				setBookInfo(response.results);
			})
			.catch(() => {
				setBookInfo({});
			})
			.finally(() => {
				setIsFetching(false);
			});
	}, [params.ID]);

	let jsxStr = "";
	if (isFetching) {
		jsxStr = (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: 50,
				}}
			>
				<Spinner animation="border" />
			</div>
		);
	}

	if (!isEmpty(bookInfo)) {
		let { title, author, bookshelf, text } = bookInfo.results;

		jsxStr = (
			<div className="book-card">
				<h1>{title}</h1>
				<h3>{author}</h3>
				<div className="book-card--body">
					<figure className="book-card--thumbnail">
						{bookshelf ? (
							<img
								src={bookshelf}
								className="img-responsive"
								alt={title}
							/>
						) : null}
					</figure>
					<p
						className="book-card--description"
						dangerouslySetInnerHTML={createMarkup(text)}
					/>
				</div>
			</div>
		);
	}

	return (
		<div
			id="book"
			className="page"
		>
			<div className="container">{jsxStr}</div>
		</div>
	);
};
export default Book;
