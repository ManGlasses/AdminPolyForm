import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as adminPolyFormAction from '../../actions/adminPolyFormAction'
import DropDown from '../../presentationals/AdminPolyForm/DropDown'
import AdminPoly from '../../presentationals/AdminPolyForm/AdminPoly'

export class AdminPolyContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectProvValue: this.props.selectValue.selectProvValue,
            selectAmpValue: this.props.selectValue.selectAmpValue,
            selectTamValue: this.props.selectValue.selectTamValue
        }
    }

    componentDidMount = () => {
        this.props.loadProv()
        this.props.loadAmp(this.state.selectProvValue)
        this.props.loadTam(
            this.state.selectProvValue,
            this.state.selectAmpValue
        )
        this.provId = this.props.selectValue.selectProvValue
        // this.provName = this.props.adminPolyForm[0]
        this.ampId = this.props.selectValue.selectAmpValue
        // this.ampName = this.props.adminPolyForm[0]
        this.tamId = this.props.selectValue.selectTamValue
        // this.tamName = this.props.adminPolyForm[0]
    }

    onChangeDropDownProv = e => {
        this.props.resetAmp()
        this.props.resetTam()
        this.ampId = ''
        this.tamId = ''
        this.ampName = ''
        this.tamName = ''
        this.props.loadAmp(e.target.value)
        this.provId = e.target.value
        this.provName = e.target.options[e.target.selectedIndex].text
        this.setState({
            selectProvValue: e.target.value,
            selectAmpValue: '-1',
            selectTamValue: '-1'
        })
    }

    onChangeDropDownAmp = e => {
        this.props.resetTam()
        this.tamId = ''
        this.tamName = ''
        this.props.loadTam(this.provId, e.target.value)
        this.ampId = e.target.value
        this.ampName = e.target.options[e.target.selectedIndex].text
        this.setState({
            selectAmpValue: e.target.value,
            selectTamValue: '-1'
        })
    }

    onChangeDropDownTam = e => {
        this.tamId = e.target.value
        this.tamName = e.target.options[e.target.selectedIndex].text
        this.setState({
            selectTamValue: e.target.value
        })
    }

    onClickGetValue = () => {
        const dataSource = {
            provId: this.provId,
            provName: this.provName,
            ampId: this.ampId,
            ampName: this.ampName,
            tamId: this.tamId,
            tamName: this.tamName
        }
        this.props.onClickGetValue(dataSource)
    }

    onClickSetValue = () => {
        this.props.onClickSetValue()
    }

    render() {
        const wrapToPropsDropDownProv = {
            topic: 'จังหวัด',
            selectValue: this.state.selectProvValue,
            dataSource: this.props.adminPolyForm.provData,
            onChangeDropDown: this.onChangeDropDownProv
        }
        const wrapToPropsDropDownAmp = {
            topic: 'อำเภอ',
            selectValue: this.state.selectAmpValue,
            dataSource: this.props.adminPolyForm.ampData,
            onChangeDropDown: this.onChangeDropDownAmp
        }
        const wrapToPropsDropDownTam = {
            topic: 'ตำบล',
            selectValue: this.state.selectTamValue,
            dataSource: this.props.adminPolyForm.tamData,
            onChangeDropDown: this.onChangeDropDownTam
        }
        const wrapToPropsAdminPoly = {
            onClickGetValue: this.onClickGetValue,
            onClickSetValue: this.onClickSetValue,
            children: (
                <div>
                    <div>{DropDown(wrapToPropsDropDownProv)}</div>
                    <div>{DropDown(wrapToPropsDropDownAmp)}</div>
                    <div>{DropDown(wrapToPropsDropDownTam)}</div>
                </div>
            )
        }
        return <div>{AdminPoly(wrapToPropsAdminPoly)}</div>
    }
}

const mapStateToProps = state => ({
    adminPolyForm: state.adminPolyForm
})

const mapDispatchToProps = {
    ...adminPolyFormAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminPolyContainer)
