import React, { Component } from 'react';


// define new class called SearchBar and give it all the functionality of a React Component
// State is a plain JS object used to record and react to user events
// each class component has a State object
class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
		<div className="search-bar">
			<input
				value = {this.state.term}  
				onChange={ event => this.onInputChange(event.target.value) }/>

		</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}




export default SearchBar;

