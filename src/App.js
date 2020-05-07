import React, { Component } from 'react';
import Calendar from './components/Calendar';
import Expenses from './components/Expenses';
import './App.scss';
// import axios from 'axios';
import firebase from './components/firebase';

class App extends Component {
	constructor() {
		super();
		this.state = {
			paycheck: 0,
			savings: 0,
			days: 0,
			dailybudget: 0,
			total: 0,
			afterSaving: 0,
			calendarDate: '',
		};
	}

	saveToDb = () => {
		const dbRef = firebase.database().ref();
		const { paycheck, savings, days, total } = this.state;
		const dataToStoreInFb = {
			user: {
				total: total,
				daysToNextCheck: days,
				income: {
					[this.state.calendarDate]: {
						paycheck: paycheck,
						deposited: true,
						amountToSave: savings,
					},
				},
			},
		};
		dbRef.push(dataToStoreInFb);
	};

	// grabs calender date from the calender component
	getCalenderDate = (passedDate) => {
		this.setState({
			calendarDate: passedDate,
		});
	};

	componentDidMount() {
		const dbRef = firebase.database().ref();
	}

	handleUserInput = (event) => {
		console.log(event.target.value);
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	calcTotal = (e) => {
		e.preventDefault();
		const total = this.state.paycheck - this.state.savings;
		this.setState(
			{
				total: total,
			},
			() => {
				this.calcDailyBudget();
			}
		);
	};

	calcDailyBudget = () => {
		const dailybudget = this.state.total / this.state.days;
		this.setState(
			{
				dailybudget: dailybudget,
			},
			() => {
				this.saveToDb();
			}
		);
	};

	

	render() {
		return (
			<div className="App">
				<h1>Budget App</h1>
				{/* You need to install Calendar in iTerm: npm install react-datepicker --save */}
				<Calendar getCalenderDate={this.getCalenderDate} />
				<form onSubmit={this.calcTotal}>
					<label htmlFor="paycheck">How much is your paycheck?</label>
					<input
						type="number"
						id="paycheck"
						name="paycheck"
						onChange={this.handleUserInput}
					></input>
					<label htmlFor="days">Days till next pay period?</label>
					<input
						type="number"
						id="days"
						name="days"
						onChange={this.handleUserInput}
					></input>
					<label htmlFor="savings">How much would you like to save?</label>
					<input
						type="number"
						id="savings"
						name="savings"
						onChange={this.handleUserInput}
					></input>
					<button type="submit">Calculate</button>
				</form>
				<p>You have this much to spend:</p>
				<p>Your daily budget is: {this.state.dailybudget}</p>
				<Expenses />
			</div>
		);
	}
}
export default App;
