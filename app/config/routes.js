module.exports = {
  root: [
    ['get', '/', 'Home'],
    ['get', '/tasks', 'Tasks'],
	['post', '/tasks', 'Tasks', 'new'],
	['get', '/tasks/:id', 'Tasks', 'view'],
	['get', '/boards', 'Boards'],
    ['get', '/boards/:uri', 'Boards', 'view'],
	['post', '/boards', 'Boards', 'new']
  ]
}
