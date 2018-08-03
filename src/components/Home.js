import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component{

	constructor(props){
		super();
		this.state = {
			age: props.user.Init_age,
			status: 0
		};
	}

	onMakeOlder(){
		this.setState({
			age: this.state.age + 3
		});
	}

	render(){
		return(
			<div>	
				<p> In a new Component </p>
				<p> My Name is => {this.props.user.name} </p>
				{this.props.children}
				<p> My age is => {this.state.age} </p>
				<p> State is => {this.state.status} </p>
				<hr/>
				<button onClick={() => this.onMakeOlder()}> Make me old</button>
				<hr/>
				<button onClick={this.props.greet}> Say Hello</button>
				
				{/*This is working 
					<p> My Hobbies is</p>
					<ul className="App">
						{this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
					</ul>*/
				}
			
			</div>
		);
	}
}

Home.propTypes = {
  user: PropTypes.object,
  greet: PropTypes.func
};
