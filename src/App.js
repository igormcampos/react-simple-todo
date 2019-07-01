import React, {Component} from 'react'
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

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
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
            ]
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            });
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
                                                                 handleChange={this.handleChange}/>);

        return (
            <TodoList>
                {todoItems}
            </TodoList>
        )
    }
}

export default App