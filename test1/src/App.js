import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todos from './Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
    
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const todosData = response.data;
        setTodos(todosData);
      
    }
    getTodos();
  }, []); 
  return (
    <div className='App'>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
