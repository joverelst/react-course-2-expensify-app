import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should set up edit expense action object', () => {
  const action = editExpense('123abc',{ note: 'New note value'});
  expect(action).toEqual({
    type: 'UPDATE_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should set up add expense action object', () => {

  const expense = {
    description: 'Rent',
    note: 'last months rent',
    amount: 1100,
    createdAt: 1000,
  }

  expect(addExpense(expense)).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });

});

test('should set up add expense action object with default values', () => {
  const action = addExpense({});
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});