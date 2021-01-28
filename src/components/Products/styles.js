import { makeStyles } from '@material-ui/core/styles';
import img from "../../assets/pizza-3.jpg";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundImage: `url(${img})`,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

  root: {
    flexGrow: 1,
  },
}));
