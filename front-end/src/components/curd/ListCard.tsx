import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import Moment from 'react-moment';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      // maxWidth: 345,
      margin: theme.spacing(2),
      "&:hover": {
        boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.5)',
        // backgroundColor: 'rgb(7, 177, 77, 0.42)'
      }
    },
    media: {
      height: 190,
    },
    showLogo: {
      marginLeft: 'auto',
      marginRight: '0px'
    },
    btns: {
      float: 'right',
    },
  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const ListCard =({ loading, dataList, deleteDATA, handleToggle, setSlug, toggleCreateForm, setMyState }: any)=> {
  const classes = useStyles();
  const [Loading, setLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  setTimeout(() => {
      setLoading(loading? true: false)
  }, 2000)

  return (
    <>
    <Card className={classes.card}>
      {Loading ? (
        <Skeleton animation="wave" variant="rect" className={classes.media} />
      ) : (
        <CardMedia
          className={classes.media}
          image={dataList.profile_image}
          title=""
        />
      )}
      <CardContent>
        {Loading ? (
          <Box pt={0.5}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
        </Box>
        ) : (
          <Box pr={1}>
          <Typography gutterBottom variant="h4" style={{fontWeight: 'bold'}}>
            Name: {dataList.full_name}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="h6">
            Email: {dataList.email}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="h6">
            Phone Number: {dataList.phone_number}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="h6">
            Salary: {dataList.salary}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            {dataList.detail}
          </Typography>
          <div className={classes.showLogo}>
          </div>
          <Typography variant="caption" color="textSecondary">
            <span style={{ fontWeight: "bold" }}>Updated on </span> 
            <Moment style={{ fontFamily: 'cursive', fontWeight: "bold" }}>{dataList.updated_at}</Moment> • <Moment fromNow style={{ fontWeight: "bold" }}>{dataList.updated_at}</Moment>
          </Typography>
        </Box>
        )}

        <div className={classes.btns}>
            <Tooltip title="Delete.." enterDelay={200} leaveDelay={200}>
                <IconButton 
                  aria-label="see"
                  color="secondary"
                  onClick={handleClickOpen}
                >
                    <DeleteIcon />
                </IconButton>
              </Tooltip>
            <Tooltip title="Edit.." enterDelay={200} leaveDelay={200}>
                <IconButton 
                  aria-label="see"
                  color="primary"
                  onClick={()=> {setSlug(dataList.slug); setMyState(dataList); toggleCreateForm();}}
                >
                    <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="View.." enterDelay={200} leaveDelay={200}>
                <IconButton 
                  aria-label="see"
                  color="secondary"
                  onClick={()=> {setSlug(dataList.slug); handleToggle();}}
                >
                    <OpenInBrowserIcon />
                </IconButton>
              </Tooltip>
          </div>
      </CardContent>
    </Card>

    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Delete Blog Post confirmation?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Delete Data confirmation to Delete employee click on delete button other wise click in cancel button.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{deleteDATA(dataList.slug); handleClose();}} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
  
    </>
  );
}

export default ListCard;
