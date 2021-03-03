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

const PostDataFrom = ({postData}:any) => {
    const classes = useStyles();
    const [label, setLabel] = useState('')
    const [uploadfile, setUploadFile] = useState('')

    const handleLabelOnChange=(evt:any)=> {
        setLabel(evt.target.value)
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Post Data Form
            </Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField name="label" label="Enter Label Name .." variant="filled" onChange={handleLabelOnChange}/>
                <TextField name="uploadfile" label="" variant="filled" />

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload
                </Button>
            </form>
        </div>
    )
}

export default PostDataFrom
