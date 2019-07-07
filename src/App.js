import React, {Component} from 'react'
import styled from 'styled-components'

import TodoItem from './components/TodoItem'
import {todoData} from './components/todoData'
import AddItem from "./components/AddItem";

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
            todos: todoData
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

    addItem = (text) => {
        const newItem = {
            id: Math.random(),
            text: text,
            completed: false
        };
        let newList = [...this.state.todos, newItem];
        this.setState({
            todos: newList
        })
    };

    deleteItem = (id) => {
        this.setState({
            todos: this.state.todos.filter(item => {
                return item.id !== id
            })
        })
    };

    render() {
        const list = this.state.todos.map(item => <TodoItem key={item.id} item={item}
                                                            handleChange={this.handleChange}
                                                            deleteItem={this.deleteItem}/>);

        return (
            <TodoList>
                <AddItem addItem={this.addItem}/>
                {list}
            </TodoList>
        )
    }
}

export default App