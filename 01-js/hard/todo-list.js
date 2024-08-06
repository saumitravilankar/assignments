/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  #index = 0;
  constructor() {
    this.todoList = new Map();
  }

  add(todo) {
    this.todoList.set(this.#index, todo);
    this.#index += 1;
    return Array.from(this.todoList.values());
  }

  remove(indexOfTodo) {
    this.todoList.delete(indexOfTodo);
    return Array.from(this.todoList.values());
  }

  update(index, updatedTodo) {
    if (!this.todoList.get(index)) {
      return Array.from(this.todoList.values());
    }
    return this.todoList.set(index, updatedTodo);
  }

  getAll() {
    return Array.from(this.todoList.values());
  }

  get(indexOfTodo) {
    if (!this.todoList.get(indexOfTodo)) return null;
    return this.todoList.get(indexOfTodo);
  }

  clear() {
    return this.todoList.clear();
  }
}

module.exports = Todo;
