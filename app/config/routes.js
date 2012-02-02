module.exports = {
  root: [
    ['get', '/', 'Home'],
    ['get', '/tasks', 'Tasks'],
    ['get', '/boards/:id', 'Boards']
  ]
}
