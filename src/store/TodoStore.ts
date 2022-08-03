import { makeObservable, observable, action } from "mobx";
import { TodoInterface, TodoInputInterface } from "../types/Todo";

class TodoStore {
  todos: TodoInterface[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
    });
  }

  addTodo(todo: TodoInputInterface) {
    const newTodo: TodoInterface = {
      ...todo,
      id: new Date().getTime(),
      isDone: false,
    };
    this.todos.push(newTodo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo: TodoInterface) => todo.id !== id);
  }

  markAsDone(id: number) {
    const todoIndex = this.todos.findIndex(
      (todo: TodoInterface) => todo.id === id
    );
    this.todos[todoIndex].isDone = true;
  }
}

export default TodoStore;
