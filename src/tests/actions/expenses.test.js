import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ expenseId: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    expenseId: "123abc",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    expenseId: "123abc",
    updates: {
      note: "New note value",
    },
  });
});

test("should setup add expense object with provided value", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was the last months rent",
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup add expense object with default value", () => {
  const expenseData = {};

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      amount: 0,
      note: "",
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
