import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as counterAction from '../actions/counterAction'
import Counter from '../presentationals/Counter'

export class CounterContainer extends Component {
    calculate = value => {
        this.props.counterAction.updateValue(value)
    }

    render() {
        const wrapToProps = {
            calculate: this.calculate,
            valueNumber: this.props.counter.value
        }
        return <div>{Counter(wrapToProps)}</div>
    }
}

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = dispatch => ({
    counterAction: bindActionCreators(counterAction, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer)
