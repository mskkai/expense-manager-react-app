import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    expenseId: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    expenseId: -1,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const expense = {
    id: "4",
    description: "Laptop",
    note: "",
    amount: 2000,
    createdAt: 29500,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit expense", () => {
  const amount = 122300;
  const action = {
    type: "EDIT_EXPENSE",
    expenseId: expenses[1].id,
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("should not edit expense", () => {
  const amount = 122300;
  const action = {
    type: "EDIT_EXPENSE",
    expenseId: -1,
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]],
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
