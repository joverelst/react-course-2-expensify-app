import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state ',() => {
  const state = expensesReducer(undefined,{ type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ]);
});

test('should add an expense', () => {
  const expense = {
    description: 'Newly added',
    note: 'my note',
    amount: 110,
    createdAt: moment()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit an expense', () => {
  const note = 'new note';
  const action = {
    type: 'UPDATE_EXPENSE',
    id: expenses[1].id,
    updates: {
      note
    }
  };
  const state = expensesReducer(expenses,action);
  expect(state[1].note).toEqual(note);
});

test('should not edit an expense if expense not found', () => {
  const expense = {
    id: -1
  };
  const action = {
    type: 'UPDATE_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual(expenses);
});