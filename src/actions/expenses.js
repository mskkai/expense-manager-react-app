import { v4 as uuidv4 } from "uuid";

//Add Expense
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

//Remove Expense
export const removeExpense = ({ expenseId } = {}) => ({
  type: "REMOVE_EXPENSE",
  expenseId,
});

//Edit Expense
export const editExpense = (expenseId, updates) => ({
  type: "EDIT_EXPENSE",
  expenseId,
  updates,
});
