import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as todoAction from '../../actions/todoAction'
import TodoList from '../../presentationals/Todo/TodoList'
import TodoItemContainer from './TodoItemContainer'

export class TodoListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isClickAll: true,
            isClickCompleted: false,
            isClickActive: false
        }
    }

    setAllIsClick = click => {
        this.setState({
            isClickAll: false,
            isClickCompleted: false,
            isClickActive: false,
            ...click
        })
    }

    onClickAll = () => {
        this.setAllIsClick({ isClickAll: true })
    }

    onClickCompleted = () => {
        this.setAllIsClick({ isClickCompleted: true })
    }

    onClickActive = () => {
        this.setAllIsClick({ isClickActive: true })
    }

    onClickClearCompleted = () => {
        this.props.clearCompleted()
    }

    render() {
        const showCildren = () => {
            if (this.state.isClickAll) {
                return this.props.todo.map(item => (
                    <div key={item.id}>
                        <TodoItemContainer id={item.id} name={item.name} isComplete={item.isComplete} />
                    </div>
                ))
            } else if (this.state.isClickCompleted) {
                return this.props.todo.filter(item => item.isComplete).map(item => (
                    <div key={item.id}>
                        <TodoItemContainer id={item.id} name={item.name} isComplete={item.isComplete} />
                    </div>
                ))
            } else if (this.state.isClickActive) {
                return this.props.todo.filter(item => !item.isComplete).map(item => (
                    <div key={item.id}>
                        <TodoItemContainer id={item.id} name={item.name} isComplete={item.isComplete} />
                    </div>
                ))
            }
        }
        const wrapToProps = {
            onClickAll: this.onClickAll,
            onClickCompleted: this.onClickCompleted,
            onClickActive: this.onClickActive,
            onClickClearCompleted: this.onClickClearCompleted,
            children: showCildren()
        }
        return <div>{TodoList(wrapToProps)}</div>
    }
}

const mapStateToProps = state => ({
    todo: state.todo
})

const mapDispatchToProps = {
    ...todoAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListContainer)
