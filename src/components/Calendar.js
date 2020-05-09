import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Calendar extends React.Component {
	state = {
		startDate: new Date(),
	};

	handleChange = (date) => {
		this.setState(
			{
				startDate: date,
			},
			() => {
				this.storeDate();
			}
		);
	};

	componentDidMount() {
		this.storeDate();
	}

	// This function grabs the date picked by the user. Changes that value from an Object to a string, slices it, then passed it back to the parent
	storeDate = (passDate) => {
		const dayOfTrans = this.state.startDate;
		const makeString = dayOfTrans.toString();
		const sliceDate = makeString.slice(0, 15);
		// console.log(sliceDate);
		passDate = sliceDate.replace(/\s/g, '-');
		this.props.getCalenderDate(passDate);
	};

	render() {
		return (
			<div>
				<label>Pick a date:</label>
				<DatePicker
					selected={this.state.startDate}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default Calendar;