const ToDo = require('../models/todo');

module.exports = {
    index,
    new: newTodo,
    create,
    delete: deleteTodo
}

function deleteTodo(req, res) {
    let todos = ToDo;
    let idx = req.params.idx;
    console.log(req.body);
    console.log(idx);
    todos.splice(idx, 1);
    res.redirect('/todos/index');
}

function create(req, res) {
    console.log(req.body);
    let todos = ToDo;
    console.log(todos);
    req.body.done = false;
    todos.push(req.body);
    // console.log('Push Works');
    res.redirect('/todos/index');
}

function newTodo(req, res) {
    res.render('todos/new');
}

function index(req, res) {
    let todos = ToDo;
    res.render('todos/index', {todos});
}