import React, { Component, Fragment } from 'react'
import { Dispatch } from 'redux'
import { connect  } from 'react-redux';
import Grid from '@material-ui/core/Grid';
// import Alert from '@material-ui/lab/Alert';

import {postDataAction} from 'src/actions/dropdownActions'
import {PostDataFrom} from 'src/components'


interface ComponentProps {
    postData?: any
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
                            {/* {loading ? 'loading...' : <ListDropdownMenu dropdown={dropdown} handleClickOnDropdown={this.handleClickOnDropdown} />} */}
                            <PostDataFrom postData={this.props.postData}/>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{paddingTop: '20%'}}>
                            {/* {this.state.label !== '' ? <Alert severity="success">{this.state.label}</Alert> : <Alert severity="info">Please Select Dropdown Item</Alert> } */}
                        </div>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

  
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
    //   dispatch,
        postData: (dataObj:any) => { dispatch(postDataAction(dataObj)) },
    }
}
  
export default connect<null,any>(null, mapDispatchToProps)(PostData);
  