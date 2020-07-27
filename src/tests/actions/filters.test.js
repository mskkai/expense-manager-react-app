import moment from "moment";
import {
  setStartDate,
  setEndDate,
  setFilterText,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should generate set text filter object with text value", () => {
  const text = "Something in";
  const action = setFilterText(text);
  expect(action).toEqual({
    type: "SET_FILTER_TEXT",
    text,
  });
});

test("should generate set text filter object with default value", () => {
  const action = setFilterText();
  expect(action).toEqual({
    type: "SET_FILTER_TEXT",
    text: undefined,
  });
});

test("should generate set date filter object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("should generate set amount filter object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});
