import React, { Component, Fragment } from 'react'
import { Dispatch } from 'redux'
import { connect  } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';

import {postDataAction} from 'src/actions/dropdownActions'
import {PostDataFrom} from 'src/components'


interface ComponentProps {
    postData?: any
    dropdown?:any
}

interface ComponentState {
    // label: any
}

class PostData extends Component<ComponentProps, ComponentState> {
    // constructor(props: ComponentProps) {
    //     super(props);
    //     this.state = {
    //         label: '',
    //     };
    // }

    // handleClickOnDropdown =(data:any)=>{
    //     this.setState({label: data})
    // }
    
    render() {
        return (
            <Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div style={{paddingTop: '20%'}}>
                            <PostDataFrom dropdown={this.props.dropdown} postData={this.props.postData}/>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{paddingTop: '20%'}}>
                            {this.props.dropdown.message !== '' ? <Alert severity="success">{this.props.dropdown.message}</Alert> : null }
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
        postData: (dataObj:any) => { dispatch(postDataAction(dataObj)) },
    }
}
  
export default connect<any,any>(mapStateToProps, mapDispatchToProps)(PostData);
  