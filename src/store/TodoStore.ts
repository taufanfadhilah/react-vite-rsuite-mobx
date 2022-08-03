import { makeObservable, observable, action } from "mobx";
import { TodoInterface } from "../types/Todo";

class TodoStore {
  todos: TodoInterface[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
    });
  }

  addTodo(todo: TodoInterface) {
    this.todos.push(todo);
  }
}

export default TodoStore;
