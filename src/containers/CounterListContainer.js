import React, { Component } from 'react'
import uniqid from 'uniqid'
import { connect } from 'react-redux'
import * as counterAction from '../actions/counterAction'
import CounterRemove from '../presentationals/CounterRemove'
import CounterContainer from './CounterContainer'
import CounterList from '../presentationals/CounterList'

export class CounterListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            tmpDefaltCount: 1
        }
    }

    addList = () => {
        this.setState(prevState => ({
            list: [...prevState.list, uniqid('CountList-')]
        }))
    }

    deleteList = id => {
        this.setState(prevState => ({
            list: prevState.list.filter(item => {
                return item !== id
            })
        }))
    }

    changeInputDefaltCount = e => {
        this.setState({
            tmpDefaltCount: e.target.value
        })
    }

    setDefaltCount = () => {
        this.props.updateDefaultCount(this.state.tmpDefaltCount || 1)
    }

    render() {
        const wrapToProps = {
            addList: this.addList,
            changeInputDefaltCount: this.changeInputDefaltCount,
            setDefaltCount: this.setDefaltCount,
            children: this.state.list.map(item => (
                <div key={item}>
                    {CounterRemove({
                        id: item,
                        deleteList: this.deleteList,
                        children: <CounterContainer />
                    })}
                </div>
            ))
        }
        return <div>{CounterList(wrapToProps)}</div>
    }
}

const mapDispatchToProps = {
    ...counterAction
}

export default connect(
    null,
    mapDispatchToProps
)(CounterListContainer)
