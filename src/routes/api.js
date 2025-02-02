
const router = require("express").Router()
const userController = require("../controllers/user.controller");
const todoController = require("../controllers/todo.controller");
const {authTokenMiddleware} = require("../middlewares/auth.middleware")

router.post("/createUser",userController.userCreate)
router.get("/loginUser",userController.loginUser)
router.get("/findUser",authTokenMiddleware,userController.findUser)
router.put("/updateUser/:id",authTokenMiddleware,userController.updateUser)
router.delete("/deleteUser/:id",authTokenMiddleware,userController.deleteUser)


router.post("/todo/create",authTokenMiddleware,todoController.createTodo)
router.get("/todo/show",authTokenMiddleware,todoController.showTodo)
router.put("/todo/update/:id",authTokenMiddleware,todoController.updateTodo);
router.put("/todo/changeTodoStatus/:id",authTokenMiddleware,todoController.updateTodoStatus);
router.delete("/todo/delete/:id",authTokenMiddleware,todoController.deleteTodo)


module.exports =router