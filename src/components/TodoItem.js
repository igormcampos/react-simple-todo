import React, {Component} from 'react'
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
            </Item>
        )
    }
}

export default TodoItem