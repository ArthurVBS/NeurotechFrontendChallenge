const { Router } = require('express');

const todoController = require('./controllers/todoController.js');

const router = Router();

router.route('/todos')
  .get(todoController.list)
  .post(todoController.create);
router.route('/todos/:id')
  .get(todoController.detail)
  .patch(todoController.update)
  .delete(todoController.delete);

module.exports = router;
