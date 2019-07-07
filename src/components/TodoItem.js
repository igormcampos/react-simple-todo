import React, {Component} from 'react'
import styled from 'styled-components'

const Item = styled.div`
    display: grid;
    padding-top: 20px;
    width: 100%;
    border-bottom: 1px solid #cecece;
    font-family: Roboto, sans-serif;
    color: #333333;
    align-items: center;
    grid-template-columns: auto 1fr auto;
`;

class TodoItem extends Component {
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        };

        return (
            <Item>
                <input
                    type="checkbox"
                    checked={this.props.item.completed}
                    onChange={() => this.props.handleChange(this.props.item.id)}
                />
                <p style={this.props.item.completed ? completedStyle : null}>{this.props.item.text}</p>
                <button onClick={() => {
                    this.props.deleteItem(this.props.item.id)
                }}>X
                </button>
            </Item>
        )
    }
}

export default TodoItem