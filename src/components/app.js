import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class App extends Component {
	render(){

		return (
			<div>
				Hello World
			</div>

		);
	}
}

function mapStateToProps({posts}){
	return {
		posts
	}
}

export default connect(mapStateToProps, actions)(App);