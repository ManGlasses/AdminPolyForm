import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as todoAction from '../../actions/todoAction'
import TodoItem from '../../presentationals/Todo/TodoItem'
import EditTodoItem from '../../presentationals/Todo/EditTodoItem'

export class TodoItemContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tmpName: this.props.name,
            isClickedEdit: false
        }
    }

    onClickEdit = e => {
        this.setState(prevState => ({
            isClickedEdit: !prevState.isClickedEdit
        }))
        e.stopPropagation()
    }

    onChangeInputEdit = e => {
        this.setState({
            tmpName: e.target.value
        })
    }

    onKeyPressInputEdit = e => {
        if (e.key === 'Enter') {
            this.setState(prevState => ({
                isClickedEdit: !prevState.isClickedEdit
            }))
            this.props.updateTodo(this.props.id, this.state.tmpName)
        }
    }

    onClickDelete = e => {
        this.props.deleteTodo(this.props.id)
        e.stopPropagation()
    }

    onClickDiv = () => {
        this.props.updateStatus(this.props.id)
    }

    render() {
        const wrapToPropsTodoItem = {
            name: this.props.name,
            styleWhenIsComplete: this.props.isComplete ? 'line-through' : '',
            onClickEdit: this.onClickEdit,
            onClickDelete: this.onClickDelete,
            onClickDiv: this.onClickDiv
        }
        const wrapToPropsEditTodoItem = {
            name: this.props.name,
            onChangeInputEdit: this.onChangeInputEdit,
            onKeyPressInputEdit: this.onKeyPressInputEdit
        }
        return (
            <div>
                {this.state.isClickedEdit ? EditTodoItem(wrapToPropsEditTodoItem) : TodoItem(wrapToPropsTodoItem)}
            </div>
        )
    }
}

const mapDispatchToProps = {
    ...todoAction
}

export default connect(
    null,
    mapDispatchToProps
)(TodoItemContainer)
