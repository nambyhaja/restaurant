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
  }
  routeChange(path) {
    this.props.history.push(path);
  }

    render(){

      Accueil.propTypes = {
        classes: PropTypes.object.isRequired,
      };
      const { classes } = this.props;
      const isMenuOpen = true;
      const restaurants = require('./base.json');
      console.log(restaurants[1].nom);
    const tiers = [
        {
          title: 'Free',
          price: '0',
          description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
          buttonText: 'Sign up for free',
          buttonVariant: 'outlined',
        },
        {
          title: 'Pro',
          subheader: 'Most popular',
          price: '15',
          description: [
              '20 users included',
              '10 GB of storage',
              'Help center access',
              'Priority email support',
          ],
          buttonText: 'Get started',
          buttonVariant: 'contained',
        },
        {
          title: 'Enterprise',
          price: '30',
          description: [
              '50 users included',
              '30 GB of storage',
              'Help center access',
              'Phone & email support',
          ],
          buttonText: 'Contact us',
          buttonVariant: 'outlined',
        },
        {
          title: 'Enterprise',
          price: '30',
          description: [
              '50 users included',
              '30 GB of storage',
              'Help center access',
              'Phone & email support',
          ],
          buttonText: 'Contact us',
          buttonVariant: 'outlined',
        },
        {
          title: 'Enterprise',
          price: '30',
          description: [
              '50 users included',
              '30 GB of storage',
              'Help center access',
              'Phone & email support',
          ],
          buttonText: 'Contact us',
          buttonVariant: 'outlined',
        },
        {
          title: 'Enterprise',
          price: '30',
          description: [
              '50 users included',
              '30 GB of storage',
              'Help center access',
              'Phone & email support',
          ],
          buttonText: 'Contact us',
          buttonVariant: 'outlined',
        },
        {
          title: 'Enterprise',
          price: '30',
          description: [
              '50 users included',
              '30 GB of storage',
              'Help center access',
              'Phone & email support',
          ],
          buttonText: 'Contact us',
          buttonVariant: 'outlined',
        },
        {
          title: 'Enterprise',
          price: '30',
          description: [
              '50 users included',
              '30 GB of storage',
              'Help center access',
              'Phone & email support',
          ],
          buttonText: 'Contact us',
          buttonVariant: 'outlined',
        }
    ];
    const infos = {
        title : 'Recherchez un restaurant',
        searchPlaceholder : 'Recherche...',
        description: 'Find Resto est une application web qui permet de vous chercher un restaurant du type de cuisine que vous voulez.',
        restaurantList: 'Les restaurants disponibles'

    }
  
        return (
          <React.Fragment>
            <Navbar></Navbar>
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
                {restaurants.map(restaurant => (
                  // Enterprise card is full width at sm breakpoint
                  <Grid item key={restaurant.nom} xs={12} sm={6} md={3}>
                    <Card className={classes.card} onClick={()=>this.routeChange("/restaurant/"+restaurant.index)}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={process.env.PUBLIC_URL + "restaurants/"+ restaurant.photo}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {restaurant.nom}
                          </Typography>
                          <Typography component="p">
                            {restaurant.description}
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
            <Footer></Footer>
          </React.Fragment>
        );
    }
}
export default withStyles(styles)(Accueil);