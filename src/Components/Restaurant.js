import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Navbar from './../Navigation/Navbar';
import Footer from './../Navigation/Footer';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './../tileData.json';

//for Table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//import Full Width Tabs
import FullWidthTabs from './FullWidthTabs';

//import Complex Grid
import ComplexGrid from './Grids/ComplexGrid';

import {connect} from 'react-redux';
import base from './../base';

import { insertOrder } from './../store/actions/orderActions';
const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: '50%',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    marginBottom: '15px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 200,
  },
  //for plats css
  gridList: {
    height: 800,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  root:{
    height:600,
    overflow: 'scroll'
  }
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class Restaurant extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      restaurants:{},
      restaurant: {},
      inputValue:""
    }
  }
  routeChange(path) {
    this.props.history.push(path);
  }
  total(orders){
    let somme = 0;
    orders.forEach(element => {
      somme +=Number(element.prix.split('$')[1]);
    });
    return somme;
  }
    render(){
      const { match: { params }, classes , insertOrder, orders} = this.props;
      Restaurant.propTypes = {
        classes: PropTypes.object.isRequired,
      };
      console.log("orders "+ orders);
          const infos = {
        title : 'Recherchez un restaurant',
        searchPlaceholder : 'Recherche...',
        description: 'Find Resto est une application web qui permet de vous chercher un restaurant du type de cuisine que vous voulez.',
        restaurantList: 'Les restaurants disponibles'

    }
    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    let id = 0;
    function createData(name, calories, fat, carbs, protein) {
      id += 1;
      return { id, name, calories, fat, carbs, protein };
    }
    
    let restaurantsList =  this.state.restaurants;
    let restaurant = restaurantsList.find(restaurant => restaurant.index == params.id);

    //let restaurant =  Object.keys(this.state.restaurant);

  
        return (
          <React.Fragment>
            <Navbar></Navbar>
            <main className={classes.layout}>
              {/* Hero unit */}
              <div className={classes.heroContent}>
                <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                    {restaurant.nom}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textPrimary" gutterBottom>
                    {restaurant.description}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textPrimary" gutterBottom>
                    Cuisine : {restaurant.cuisine}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textPrimary" gutterBottom>
                    Adresse : {restaurant.adresse}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textPrimary" gutterBottom>
                    Téléphone : {restaurant.telephone}
                </Typography>
              </div>
              {/* End hero unit */}
              <Grid container spacing={40} alignItems="flex-start">
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h2" align="center" color="primary" gutterBottom>
                      Menus
                    </Typography>
                    {restaurant.menus.map(row=>(
                      <ComplexGrid
                        menu={row}
                        insert={()=>insertOrder(row)}
                      ></ComplexGrid>
                    ))}
                  </Grid>
                  <Grid item xs={12} sm={6} md={5}>
                    <Typography variant="h2" align="center" color="primary" gutterBottom>
                        Carte
                    </Typography>
                    <FullWidthTabs
                    plats={restaurant.carte.plats}></FullWidthTabs>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h2" align="center" color="primary" gutterBottom>
                      Commande
                  </Typography>
                  <Paper className={classes.root}>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow>
                          <CustomTableCell>Plat</CustomTableCell>
                          <CustomTableCell align="center">Unité</CustomTableCell>
                          <CustomTableCell align="center">Prix</CustomTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {orders.map(row => (
                          <TableRow className={classes.row} key={row.id}>
                            <CustomTableCell component="th" scope="row">
                              {row.nom}
                            </CustomTableCell>
                            <CustomTableCell align="right">1</CustomTableCell>
                            <CustomTableCell align="right">{row.prix}</CustomTableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Paper>
                  <Typography align="right" variant="h5">
                          Total : $ {this.total(orders)}
                  </Typography>
                  </Grid>
              </Grid>
            </main>
          </React.Fragment>
        );
    }
    
  componentWillMount(){
    this.ref = base.syncState("restaurants", {
      context: this,
      state: 'restaurants'
    });
  }
  componentWillUnmount() {
    //console.log("Will unmount")
    base.removeBinding(this.ref);
  }
}

const mapStateToProps = (state, ownProps) => {
  const orders = state.order.orders;
  return{
    orders : orders
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertOrder:(order) => dispatch(insertOrder(order))
  }
};



export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Restaurant));