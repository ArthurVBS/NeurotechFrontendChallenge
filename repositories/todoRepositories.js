const Todo = require('../models/Todo');

module.exports = {
  getTodos: async () => {
    const todos = await Todo.find();

    return todos;
  },
  getTodoById: async (id) => {
    const todo = await Todo.findById(id);

    return todo;
  },
  createTodo: async (todoInfo) => {
    const newTodo = await Todo.create(todoInfo);

    return newTodo;
  },
  updateTodo: async (id, body) => {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      body,
      { new: true },
    );

    return updatedTodo;
  },
  deleteTodo: async (id) => {
    return await Todo.findByIdAndDelete(id);
  },
};
