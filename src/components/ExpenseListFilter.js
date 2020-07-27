import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setFilterText,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";

export class ExpenseListFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarFocused: null,
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = (e) => {
    this.props.setFilterText(e.target.value);
  };

  onSortChange = (e) => {
    console.log("Changes Working", e);
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDateId="start"
          endDateId="end"
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          focusedInput={this.state.calendarFocused}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setFilterText: (text) => dispatch(setFilterText(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

const mapStateToProps = (state) => ({ filters: state.filters });

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);
