import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as todoAction from '../../actions/todoAction'
import TodoListContainer from './TodoListContainer'
import Todo from '../../presentationals/Todo/Todo'

export class TodoContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tempTextInputAddTodo: ''
        }
    }

    changeInputAddTodo = e => {
        this.setState({
            tempTextInputAddTodo: e.target.value
        })
    }

    saveAddTodo = () => {
        this.props.addTodo(this.state.tempTextInputAddTodo)
        this.setState({
            tempTextInputAddTodo: ''
        })
    }

    render() {
        const wrapToProps = {
            tempTextInputAddTodo: this.state.tempTextInputAddTodo,
            changeInputAddTodo: this.changeInputAddTodo,
            saveAddTodo: this.saveAddTodo,
            children: <TodoListContainer />
        }
        return <div>{Todo(wrapToProps)}</div>
    }
}

const mapDispatchToProps = {
    ...todoAction
}

export default connect(
    null,
    mapDispatchToProps
)(TodoContainer)
