import database from "../firebase/firebase";

//Add Expense
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    return database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

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
