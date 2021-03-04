import React, {useState} from 'react'
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

const PostDataFrom = ({postData,dropdown}:any) => {
    const classes = useStyles();
    const [label, setLabel] = useState('')
    const [uploadFile, setUploadFile] = useState(null as any)

    const handleSubmit =()=>{
        if(label.length > 0 ){
            // postData({"label":label, "uploadFile":uploadFile})
            let form_data = new FormData();
            form_data.append('label', label);
            form_data.append('uploadFile', uploadFile);
            postData(form_data)
        } else (
            alert("Please Enter data")
        )
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Post Data Form
            </Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField required name="label" label="Enter Label Name .." variant="filled" onChange={(e:any) => setLabel(e.target.value)}/>
                {/* <TextField name="uploadFile" variant="filled" type="file" onChange={(e:any) => setUploadFile(e.target.files[0])}/> */}

                <input type="file"
                   name="uploadFile"
                   accept="image/png, image/jpeg"  onChange={(e:any) => setUploadFile(e.target.files[0])} required/>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                    onClick={handleSubmit}
                    disabled={dropdown.loading }
                >
                    Upload
                </Button>
            </form>
        </div>
    )
}

export default PostDataFrom
