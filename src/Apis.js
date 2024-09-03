import axios from 'axios';

//const AllDataUrl = 'https://jsonplaceholder.typicode.com/todos';
const AllDataUrl = 'https://jsonplaceholder.typicode.com/todos?userId=1'

export const fetchTodos = () => axios.get(AllDataUrl);
export const addTodo = (todo) => axios.post(AllDataUrl, todo);
export const updateTodo = (id, updatedTodo) => axios.put(`${AllDataUrl}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${AllDataUrl}/${id}`);





