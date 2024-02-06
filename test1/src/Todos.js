import React from 'react';

export default function Todos(props) {
  const TodoItems = ({ todos }) => {
    return (
      <div className='App'>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  };

  return <TodoItems todos={props.todos} />;
}
