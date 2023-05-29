import { ActionType, AddExpenseAction, SubtractExpenseAction } from '../interfaces';

const addExpense = (expense: number): AddExpenseAction => {
  return {
    type: ActionType.ADD_EXPENSE,
    expense,
  };
};

const subtractExpense = (expense: number): SubtractExpenseAction => {
  return {
    type: ActionType.SUBTRACT_EXPENSE,
    expense,
  };
};

export { addExpense, subtractExpense };
