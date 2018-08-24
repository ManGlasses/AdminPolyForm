import React, { Component } from 'react'
import AdminPolyContainer from './AdminPolyContainer'
import SetAdminPolyContainer from './SetAdminPolyContainer'
import AdminPolyForm from '../../presentationals/AdminPolyForm/AdminPolyForm'
import DisplayAdminPolyForm from '../../presentationals/AdminPolyForm/DisplayAdminPolyForm'

export class AdminPolyFormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayAdminPolyForm: false,
            setAdminPoly: false,
            dataSource: {
                provId: '',
                provName: '',
                ampId: '',
                ampName: '',
                tamId: '',
                tamName: ''
            },
            selectValue: {
                selectProvValue: '-1',
                selectAmpValue: '-1',
                selectTamValue: '-1'
            }
        }
    }

    onClickAdminPolyGetValue = dataSource => {
        this.setState({
            displayAdminPolyForm: true,
            dataSource: {
                ...dataSource
            }
        })
    }

    onClickAdminPolySetValue = () => {
        this.setState({
            setAdminPoly: true
        })
    }

    swapDisplaySetAdminPoly = () => {
        this.setState({
            displayAdminPolyForm: false,
            setAdminPoly: false
        })
    }

    onClickSetAdminPolySave = (inputProv, inputAmp, inputTam) => {
        inputProv = inputProv === '' ? -1 : inputProv
        inputAmp = inputAmp === '' ? -1 : inputAmp
        inputTam = inputTam === '' ? -1 : inputTam
        this.setState({
            selectValue: {
                selectProvValue: inputProv,
                selectAmpValue: inputAmp,
                selectTamValue: inputTam
            }
        })
    }

    render() {
        const wrapToPropsDisplayAdminPolyForm = {
            dataSource: this.state.dataSource
        }
        const wrapToPropsAdminPolyForm = {
            children: (
                <div>
                    {this.state.setAdminPoly ? (
                        <SetAdminPolyContainer
                            swapDisplaySetAdminPoly={
                                this.swapDisplaySetAdminPoly
                            }
                            onClickSave={this.onClickSetAdminPolySave}
                        />
                    ) : (
                        <AdminPolyContainer
                            selectValue={this.state.selectValue}
                            onClickGetValue={this.onClickAdminPolyGetValue}
                            onClickSetValue={this.onClickAdminPolySetValue}
                        />
                    )}
                    {this.state.displayAdminPolyForm &&
                        !this.state.setAdminPoly &&
                        DisplayAdminPolyForm(wrapToPropsDisplayAdminPolyForm)}
                </div>
            )
        }
        return <div>{AdminPolyForm(wrapToPropsAdminPolyForm)}</div>
    }
}

export default AdminPolyFormContainer
