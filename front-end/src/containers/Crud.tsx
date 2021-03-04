import React, { Component, Fragment } from 'react'
import { Dispatch } from 'redux'
import { connect  } from 'react-redux';
import Grid from '@material-ui/core/Grid';
// import Alert from '@material-ui/lab/Alert';

import {getDATAListAction,getDATADetailAction,createDATAAction,updateDATAAction,deleteDATAAction} from 'src/actions/crudActions'
import {ListCard, DetailCard, CRUDForm} from 'src/components'


interface ComponentProps {
    crud?: any
    getDATAList?: any
    getDATADetail?: any
    createDATA?: any
    updateDATA?: any
    deleteDATA?: any
}

interface ComponentState {
    toggle: boolean
    Slug:any
    toggleCreateForm:boolean
    full_name: string
    email: string
    phone_number: any
    salary: any
    detail: any
}

interface MapStateToPropsTypes {
}

interface MapDispatchToPropsTypes {
}

class Crud extends Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            toggle: false,
            Slug: '',
            toggleCreateForm: false,
            
            full_name: "",
            email: "",
            phone_number: "",
            salary: "",
            detail: ""
        };
    }

    componentDidMount() {
        this.props.getDATAList()
    }


    handleChange=(evt:any)=> {
        const value = evt.target.value;
        this.setState({
          ...this.state,
          [evt.target.name]: value
        });
    }

    handleSubmitCreateForm=()=>{
        this.props.createDATA({"full_name":this.state.full_name,"email":this.state.email,"phone_number":this.state.phone_number,"salary":this.state.salary,"detail":this.state.detail})
    }
    handleSubmitUpdateForm=()=>{
        this.props.updateDATA(this.state.Slug,{"full_name":this.state.full_name,"email":this.state.email,"phone_number":this.state.phone_number,"salary":this.state.salary,"detail":this.state.detail})
    }
    
    render() {
        const {loading, message, dataLists, dataList} = this.props.crud
        console.log('getting-dropdown-list' + message)
        return (
            <Fragment>
                <div style={{paddingTop: '5%'}}>
                    <CRUDForm state={this.state} handleChange={this.handleChange} handleSubmitCreateForm={this.handleSubmitCreateForm} handleSubmitUpdateForm={this.handleSubmitUpdateForm}/>
                </div>
                <Grid container spacing={2}>
                    <>
                        {!this.state.toggle? 

                            dataLists.map((item:any,i:any) => {
                                return (
                                    <Grid key={i} item xs={12} lg={3}>
                                        <ListCard loading={loading} dataList={item} deleteDATA={this.props.deleteDATA} handleToggle={()=>this.setState({toggle: !this.state.toggle})} toggleCreateForm={()=>this.setState({toggleCreateForm: true})} 
                                        setSlug={(slug:string)=>this.setState({Slug: slug})} 
                                        setMyState={(data:any)=> this.setState({full_name:data.full_name,email:data.email,phone_number:data.phone_number,salary:data.salary,detail:data.detail})}/>
                                    </Grid>
                                )
                            })
                        
                        : 
                        <Grid item xs={12}>
                            <DetailCard Slug={this.state.Slug} getDATADetail={this.props.getDATADetail} loading={loading} dataList={dataList} handleToggle={()=>this.setState({toggle: !this.state.toggle})}/>
                        </Grid>
                        }
                    </>
                </Grid>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        crud: state.crud,
    }
  }
  
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        getDATAList: () => { dispatch(getDATAListAction()) },
        getDATADetail: (SLUG:any) => { dispatch(getDATADetailAction(SLUG)) },
        createDATA: (dataObj:any) => { dispatch(createDATAAction(dataObj)) },
        updateDATA: (SLUG:any,dataObj:any) => { dispatch(updateDATAAction(SLUG,dataObj)) },
        deleteDATA: (SLUG:any) => { dispatch(deleteDATAAction(SLUG)) },
    }
}
  
export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(mapStateToProps, mapDispatchToProps)(Crud);
  