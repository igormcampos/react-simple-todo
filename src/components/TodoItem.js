import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 30px 20px 0;
    width: 70%;
    border-bottom: 1px solid #cecece;
    font-family: Roboto, sans-serif;
    color: #333333;
`;

function TodoItem(props) {
    return (
        <Item>
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </Item>
    )
}

export default TodoItem