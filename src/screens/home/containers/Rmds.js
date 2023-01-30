import React from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRmds } from "../actions";
import debounce from "lodash/debounce";
import InputGroup from "react-bootstrap/InputGroup";
import Books from "./Books";

const Rmds = ({ getRmds, query }) => {
	const debouncedGetBooks = debounce((query) => {
		getBooks(query);
	}, 700);

	useEffect(() => {
		debouncedGetBooks(params.query);
	}, []);

	return <Books />;
};

const mapStateToProps = (state /*, ownProps*/) => {
	return {
		query: state.books.query,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			getRmds,
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Rmds);
