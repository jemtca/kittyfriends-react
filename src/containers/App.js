import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import { kitties } from './kitties';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			kitties: [],
			searchField: '',
		};
	}

	componentDidMount() {
		//this.setState({ kitties: kitties });
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ kitties: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}

	render() {
		const filteredKitties = this.state.kitties.filter(kitty => {
			return kitty.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		return (
			<div className='tc'>
				<h1 className='f1'>KittyFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList kitties={filteredKitties} />
				</Scroll>
			</div>
		);
	}
}

export default App;