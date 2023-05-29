import { ActionType, Action, RootState } from "../interfaces";

const initialState: RootState = {
  expenses: 0,
};

const expenseReducer = (state = initialState, action: Action): RootState => {
  switch (action.type) {
    case ActionType.ADD_EXPENSE:
      return { ...state, expenses: state.expenses + action.expense };
    case ActionType.SUBTRACT_EXPENSE:
      return { ...state, expenses: state.expenses - action.expense };
    default:
      return state;
  }
};

export default expenseReducer;
