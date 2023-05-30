import { ITodo } from '../interfaces/ITodo';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService();
  });

  it('should be created with empty list', () => {
    const expected = [];
    expect(service.all()).toEqual(expected);
  });

  it('should return 1 if add new todo to empty list', () => {
    const todoItem: ITodo = {
      topic: 'New Item',
      description: 'New Item Description'
    };
    const expected = [
      todoItem,
    ];
    service.add(todoItem);
    expect(service.all()).toEqual(expected);
  });
});
