import { makeObservable, observable, action } from "mobx";
import { TodoInterface, TodoInputInterface } from "../types/Todo";

class TodoStore {
  todos: TodoInterface[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
    });
  }

  addTodo(todo: TodoInputInterface) {
    const newTodo: TodoInterface = {
      ...todo,
      id: new Date().getTime(),
    };
    this.todos.push(newTodo);
  }
}

export default TodoStore;
