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
    const [uploadfile, setUploadFile] = useState()

    const handleSubmit =()=>{
        postData({"label":label, "uploadFile":uploadfile})
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Post Data Form
            </Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField name="label" label="Enter Label Name .." variant="filled" onChange={(e:any) => setLabel(e.target.value)}/>
                <TextField name="uploadfile" variant="filled" type="file" onChange={(e:any) => setUploadFile(e.target.files[0])}/>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                    onClick={handleSubmit}
                    disabled={dropdown.loading}
                >
                    Upload
                </Button>
            </form>
        </div>
    )
}

export default PostDataFrom
