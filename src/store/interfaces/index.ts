// interface.ts

enum ActionType {
  ADD_EXPENSE = 'ADD_EXPENSE',
  SUBTRACT_EXPENSE = 'SUBTRACT_EXPENSE',
}

interface AddExpenseAction {
  type: ActionType.ADD_EXPENSE;
  expense: number;
}

interface SubtractExpenseAction {
  type: ActionType.SUBTRACT_EXPENSE;
  expense: number;
}

type Action = AddExpenseAction | SubtractExpenseAction;

interface RootState {
  expenses: number;
}

export { Action, ActionType, AddExpenseAction, RootState, SubtractExpenseAction };
