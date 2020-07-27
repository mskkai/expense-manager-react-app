import { createStore, combineReducers } from "redux";

//Expense Reducer
const demoState = {
  expenses: [
    {
      id: 12345,
      description: "House Rent",
      note: "This was the final payment",
      amount: 54500,
      createdAt: 0,
    },
  ],

  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

//Subscribing store
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

//Invoking actions
//Add Expense
const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 1000, createdAt: -1000 })
);

// //Remove Expense
// store.dispatch(removeExpense({ expenseId: expenseOne.expense.id }));

// //Edit Expense
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// //Set Filter Text
//store.dispatch(setFilterText("Coffee"));

// //Sort
//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//set dates
//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(-125));
// store.dispatch(setEndDate());
