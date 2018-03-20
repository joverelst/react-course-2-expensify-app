import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper, expense;
beforeAll(() => {
  expense = expenses[1];
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage 
      expense={expense} 
      editExpense={editExpense} 
      removeExpense={removeExpense}
      history={history}
    />
  );
});

test('should render EditExpensePage',() => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense',() => {
  expense.note = 'this is a test note';
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expense.id,expense);
});

test('should handle removeExpense',() => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id });
});