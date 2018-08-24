import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as adminPolyFormAction from '../../actions/adminPolyFormAction'
import SetAdminPoly from '../../presentationals/AdminPolyForm/SetAdminPoly'

export class SetAdminPolyContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tmpInputProv: '',
            tmpInputAmp: '',
            tmpInputTam: ''
        }
    }

    onChangeInputProv = e => {
        this.setState({
            tmpInputProv: e.target.value
        })
    }

    onChangeInputAmp = e => {
        this.setState({
            tmpInputAmp: e.target.value
        })
    }

    onChangeInputTam = e => {
        this.setState({
            tmpInputTam: e.target.value
        })
    }

    onClickSave = () => {
        this.props.onClickSave(
            this.state.tmpInputProv,
            this.state.tmpInputAmp,
            this.state.tmpInputTam
        )
        this.props.swapDisplaySetAdminPoly()
    }

    onClickCancel = () => {
        this.props.swapDisplaySetAdminPoly()
    }

    render() {
        const wrapToProps = {
            onChangeInputProv: this.onChangeInputProv,
            onChangeInputAmp: this.onChangeInputAmp,
            onChangeInputTam: this.onChangeInputTam,
            onClickSave: this.onClickSave,
            onClickCancel: this.onClickCancel
        }
        return <div>{SetAdminPoly(wrapToProps)}</div>
    }
}

const mapDispatchToProps = {
    ...adminPolyFormAction
}

export default connect(
    null,
    mapDispatchToProps
)(SetAdminPolyContainer)
