const app = document.getElementById('app')
const list = document.createElement('ul')

const renderList = (data) => Object.values(data).map(item => {
  const li = document.createElement('li')
  li.innerHTML = item
  list.appendChild(li)
})

const renderError = (error) => {
  const li = document.createElement('p')
  li.innerHTML = `Error: ${error}`
  list.appendChild(li)
}

app.appendChild(list)

function getData(src) {
  return fetch(src)
    .then(x => x.json())
    .catch((error) => renderError(error))
}

getData('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => {
    return data && renderList(data)
  })
  