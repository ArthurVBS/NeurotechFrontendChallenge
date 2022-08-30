const {
  getTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require('../repositories/todoRepositories');

module.exports = {
  list: async (req, res) => {
    try {
      const todos = await getTodos();

      res.send(todos);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  create: async (req, res) => {
    try {
      const newTodo = await createTodo(req.body);

      res.status(201).send(newTodo);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  detail: async (req, res) => {
    try {
      const todo = await getTodoById(req.params.id);
  
      if (!todo) return res.status(404).send({ message: 'todo not found' });
  
      res.send(todo);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
  
      const todo = await getTodoById(id);
  
      if (!todo) return res.status(404).send({ message: 'todo not found' });
  
      const updatedTodo = await updateTodo(id, req.body);
  
      res.send(updatedTodo);
    } catch (error) {
      res.status(400).send(error);
    }

  },
  delete: async (req, res) => {
    try {
      const todo = await getTodoById(req.params.id);
  
      if (!todo) return res.status(404).send({ message: 'todo not found' });
  
      await deleteTodo(req.params.id);
  
      res.send({ message: 'Deleted successfully' });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
