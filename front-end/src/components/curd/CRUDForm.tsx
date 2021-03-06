import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    button: {
        margin: theme.spacing(1),
    },
  }),
);

interface Props {
    state?:any
    handleChange?:any
    handleSubmitCreateForm?:any
    handleSubmitUpdateForm?:any
    setstate?:any
}

const CRUDForm = ({state, setstate, handleChange, handleSubmitCreateForm, handleSubmitUpdateForm}:Props) => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                {state.toggleCreateForm ? "Update":"Add"} Employee Form
            </Typography>
            {state.toggleCreateForm ? "please add all field to update form": null} <br /><br />
            <form className={classes.root} noValidate autoComplete="off">
            <TextField name="full_name" value={state.full_name} label="Enter Full Name .." variant="outlined" onChange={handleChange}/>
            <TextField name="email" value={state.email} label="Email .." variant="outlined" onChange={handleChange}/>
            <TextField name="phone_number" value={state.phone_number} label="Phone Number .." variant="outlined" onChange={handleChange}/>
            <TextField name="salary" value={state.salary} label="Salary .." variant="outlined" onChange={handleChange}/>
            <TextField name="detail" value={state.detail} label="Detail .." variant="outlined" onChange={handleChange}/>

            {state.profile_image && state.toggleCreateForm ? <img src={state.profile_image} alt="image" />:null}
            <input type="file"
                   name="profile_image"
                   accept="image/png, image/jpeg" onChange={setstate} required/>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                    onClick={state.toggleCreateForm ? handleSubmitUpdateForm : handleSubmitCreateForm}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default CRUDForm
