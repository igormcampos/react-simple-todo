import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import TodoItem from './components/InputItem'

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

ReactDOM.render(
    <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
    </TodoList>,
    document.getElementById('root')
);
