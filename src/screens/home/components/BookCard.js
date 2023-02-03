import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
const BookCard = ({ book, action }) => {

	let { title, author, bookshelf, text } = book;
	return (
		<div className="book">
			<Card>
				{bookshelf ? (
					<Card.Img
						variant="top"
						src={bookshelf}
					/>
				) : null}
				<Card.Body
					size="sm"
					style={{ background: "#FFF8EA" }}
				>
					<Card.Title
						size="sm"
						style={{ color: "#65647C" }}
					>
						{title}
					</Card.Title>
					<Card.Subtitle
						size="sm"
						style={{ color: "#69647C" }}
					>
						{author}
					</Card.Subtitle>
					<Card.Text
						size="sm"
						className="book--description"
					>
						{text}
					</Card.Text>
					<Button
						size="sm"
						variant="outline-secondary"
						as={Link}
						to={`/recommendations/${title}`}
					>
						Get Recommendations
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default BookCard;
