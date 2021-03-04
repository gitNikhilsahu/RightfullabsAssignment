import React, {useEffect} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import Moment from 'react-moment';
import Button from '@material-ui/core/Button';


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
      height: 290,
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


const DetailCard =({ loading, Slug, dataList, getDATADetail, handleToggle }: any)=> {
  const classes = useStyles();
  const [Loading, setLoading] = React.useState(true);


  setTimeout(() => {
      setLoading(loading? true: false)
  }, 2000)


  useEffect(() => {
    getDATADetail(Slug);
  }, [getDATADetail,Slug])


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

        <Button variant="outlined" color="secondary" onClick={handleToggle} style={{ marginTop: 20 }}>
          Back ..
        </Button>
      </CardContent>
    </Card>
    </>
  );
}

export default DetailCard;
