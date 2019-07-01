import React from 'react'
import styled from 'styled-components'

import TodoItem from './components/TodoItem'

const TodoList = styled.div`
    background-color: white;
    margin: 20px auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #efefef;
    padding: 30px;
`;

const todoData = [
    {
        id: 1,
        text: "Code this todo list",
        completed: true
    },
    {
        id: 2,
        text: "Learn how to deploy react",
        completed: false
    },
    {
        id: 3,
        text: "Sleep",
        completed: false
    },
    {
        id: 4,
        text: "Push code to Github",
        completed: true
    },
    {
        id: 5,
        text: "Create an actually useful app",
        completed: false
    },
];

function App() {
    const todoItems = todoData.map(item => <TodoItem key={item.id} item={item}/>);

    return (
        <TodoList>
            {todoItems}
        </TodoList>
    )
}

export default App