import React from 'react'
import styled from 'styled-components'

const TodoItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 30px 20px 0;
    width: 70%;
    border-bottom: 1px solid #cecece;
    font-family: Roboto, sans-serif;
    color: #333333;
`;

const InputItem = () => (
    <TodoItem>
        <input type="checkbox"/>
        <p>Input Item</p>
    </TodoItem>
);

export default InputItem