import { makeStyles } from '@material-ui/core/styles';
// import img from "../../assets/pizza-1.jpg";
export default makeStyles((theme) => ({
  // background: {
  //   backgroundImage: `url(${img})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover'
  // },
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));
