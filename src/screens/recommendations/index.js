import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import Spinner from "react-bootstrap/Spinner";
import BookCard from "../home/components/BookCard";
import axios from "axios";
import "../book/book.css";

const Recommendations = ({ match: { params } }) => {
	const [bookInfos, setBookInfos] = useState({});
	const [isFetching, setIsFetching] = useState(true);
	
	useEffect(() => {
		setIsFetching(true);
		axios
			.get(`http://localhost:8000/api/recommendations/?book_name=${params.title}`)
			.then((response) => {
				setBookInfos(response.data);
			})
			.catch(() => {
				setBookInfos({});
			})
			.finally(() => {
				setIsFetching(false);
			});
	}, [params.title]);

	let jsxStr = "";
	if (isFetching) {
		jsxStr = (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: 200,
				}}
			>
				<Spinner animation="border" />
			</div>
		);
	}

	if (!isEmpty(bookInfos)) {
        let { results: books, counts } = bookInfos;
		jsxStr = 
        (
            <>
    
                <h3>Recommendations based on this book : {params.title}</h3>
                <p>Total results: {counts}</p>
                <div className="books-list">
                    {books.map((book) => (
                        <BookCard
                            book={book}
                        />
                    ))}
                </div>
            </>
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

export default Recommendations;

