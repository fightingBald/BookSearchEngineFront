import React from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import Spinner from "react-bootstrap/Spinner";
import BookCard from "../components/BookCard";


const renderBooksList = (data, query) => {
	if (isEmpty(data)) {
		console.log("data is empty");
		return null;
	}
	let { results: books, counts } = data;

	
	return (
		<>

			<h3>Search results for: {query}</h3>
			<p>Total results: {counts}</p>
			<div className="books-list">
				{books.map((book) => (
					<BookCard
						/* 						key={book.id} */
						book={book}
						// action={() => setModalShow(true)}
					/>
				))}
			</div>
		</>
	);
};

const Books = ({ data, isFetching, query, error }) => {
	let jsxStr = "";

	if (isFetching) {
		jsxStr = (
			<div
				style={{
					display: "block",
					marginTop: "2rem",
					marginBottom: "2rem",
					width: "100%",
				}}
			>
				<Spinner
					animation="border"
					style={{
						animation: "0.5ms linear infinite anim-rotate",
						borderBottom: "2px solid transparent",
						borderLeft: "2px solid #d3014c",
						borderRadius: "50%",
						borderRight: "2px solid transparent",
						borderTop: "2px solid #d3014c",
						boxSizing: "border-box",
						height: 100,
						width: 100,
						display: "block",
						marginLeft: "auto",
						marginRight: "auto",
					}}
				/>
			</div>
		);
	} else if (!isEmpty(error)) {
		jsxStr = JSON.stringify(error);
	} else {
		jsxStr = renderBooksList(data, query);
		console.log(jsxStr);
	}
	return <div className="books">{jsxStr}</div>;
};

const mapStateToProps = (state) => {
	let { data, isFetching, query, error } = state.books;
	return {
		data,
		isFetching,
		query,
		error,
	};
};

export default connect(mapStateToProps, null)(Books);
