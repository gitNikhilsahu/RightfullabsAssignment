import React, { Component, Fragment } from 'react'
import { Dispatch } from 'redux'
import { connect  } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';

import {getDropdownListAction} from 'src/actions/dropdownActions'
import {ListDropdownMenu} from 'src/components'


interface ComponentProps {
    dropdown?: any
    // dispatch?: Dispatch<any>
    getDropdownList?: any
}

interface ComponentState {
    label: any
}

interface MapStateToPropsTypes {
}

interface MapDispatchToPropsTypes {
}

class DropDownList extends Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            label: '',
        };
    }

    componentDidMount() {
        // this.props.getDropdownList()
    }

    handleClickOnDropdown =(data:any)=>{
        this.setState({label: data})
    }
    
    render() {
        const {dropdown, message, loading} = this.props.dropdown
        console.log('getting-dropdown-list' + message)
        return (
            <Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div style={{paddingTop: '20%'}}>
                            {loading ? 'loading...' : <ListDropdownMenu dropdown={dropdown} handleClickOnDropdown={this.handleClickOnDropdown} />}
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{paddingTop: '20%'}}>
                            {this.state.label !== '' ? <Alert severity="success">{this.state.label}</Alert> : <Alert severity="info">Please Select Dropdown Item</Alert> }
                        </div>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        dropdown: state.dropdown,
    }
  }
  
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
    //   dispatch,
        getDropdownList: () => { dispatch(getDropdownListAction()) },
    }
}
  
export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(mapStateToProps, mapDispatchToProps)(DropDownList);
  