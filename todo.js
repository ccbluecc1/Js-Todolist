class Todo {
  constructor(id, description) {
    this.id = id
    this.description = description
  }
  getTodo() {
    return { id: this.id, decription: this.description }
  }
  setDescription(newDescription) {
    return (this.description = newDescription)
  }
}
function TodoManagement() {
  
  let todos = []
  let lastid = 1
  function addTodo(desc) {
    return todos.push(new Todo(lastid++, desc))
  }
  function findTodo(searchId) {
    return todos.find((element) => element.id === searchId)
  }
  function findIndexTodo(searchId) {
    return todos.findIndex((element) => element.id === searchId)
  }
  function removeTodo(removeId) {
    todos = todos.filter((element) => element.id !== removeId)
  }
  function getTodos() {
    return todos
  }
  return { addTodo, findIndexTodo, findTodo, removeTodo, getTodos }
}
module.exports = { TodoManagement, Todo }
