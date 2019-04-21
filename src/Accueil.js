import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Navbar from './Navigation/Navbar';
import Footer from './Navigation/Footer';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import PropTypes from 'prop-types';
import base from './base';

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
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: '80%',
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
});

class Accueil extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      restaurants: {},
      inputValue:""
    }
  }
  routeChange(path) {
    this.props.history.push(path);
  }
  filterResto(event){
    this.setState({
      inputValue:event.target.value
    });
  }

    render(){

      Accueil.propTypes = {
        classes: PropTypes.object.isRequired,
      };
      const { classes ,
      } = this.props;
      //const {restaurants} = require('./base.json');
      let restaurantsfiltered =  Object.keys(this.state.restaurants);
      let restaurants = this.state.inputValue != "" ? restaurantsfiltered.filter(key=>this.state.restaurants[key].nom.toLowerCase().includes(this.state.inputValue.toLowerCase())) : restaurantsfiltered;
      
      
      const infos = {
        title : 'Recherchez un restaurant',
        searchPlaceholder : 'Recherche...',
        description: 'Find Resto est une application web qui permet de vous chercher un restaurant du type de cuisine que vous voulez.',
        restaurantList: 'Les restaurants disponibles'

       }
       

  
        return (
          <React.Fragment>
            <Navbar
            ></Navbar>
            <main className={classes.layout}>
              {/* Hero unit */}
              <div className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  {infos.title}
                </Typography>
                
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    onChange={this.filterResto.bind(this)}
                    placeholder={infos.searchPlaceholder}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>

                <Typography variant="h6" align="center" color="textSecondary" component="p">
                  {infos.description}
                </Typography>
              </div>
              {/* End hero unit */}
              

              <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
                  {infos.restaurantList}
              </Typography>
              <Grid container spacing={40} alignItems="flex-end">
                {restaurants.map(key => (
                  // Enterprise card is full width at sm breakpoint
                  <Grid item key={this.state.restaurants[key].nom} xs={12} sm={6} md={3}>
                    <Card className={classes.card} onClick={()=>this.routeChange("/restaurant/"+this.state.restaurants[key].index)}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={process.env.PUBLIC_URL + "restaurants/"+ this.state.restaurants[key].photo}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {this.state.restaurants[key].nom}
                          </Typography>
                          <Typography component="p">
                            {this.state.restaurants[key].description}
                          </Typography>
                          <Typography variant="caption">
                            Cuisine : {this.state.restaurants[key].cuisine}
                          </Typography>
                          <Typography variant="caption">
                            Adresse : {this.state.restaurants[key].adresse}
                          </Typography>
                          <Typography variant="caption">
                            Téléphone : {this.state.restaurants[key].telephone}
                          </Typography>
                        </CardContent>  
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" margin="25px" color="primary">
                          Visiter
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </main>
          </React.Fragment>
        );
    }

    componentWillMount() {
      //alert("toto")
      // this runs right before the <App> is rendered
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
export default withStyles(styles)(Accueil);