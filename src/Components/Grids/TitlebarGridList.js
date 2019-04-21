import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
import tileData from './../../tileData';

import {insertOrder} from './../../store/actions/orderActions';
import {connect} from 'react-redux';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class TitlebarGridList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { classes , plats, insertOrder} = this.props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {plats.map(plat => (
          <GridListTile key={plat.photo}>
            <img src={process.env.PUBLIC_URL + "plats/" + plat.photo} alt={plat.nom} />
            <GridListTileBar
              title={plat.prix + " " + plat.nom }
              subtitle={<span>{plat.description}</span>}
              actionIcon={
                <IconButton onClick={()=>insertOrder(plat)} className={classes.icon}>
                  <AddIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
    }
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertOrder:(order) => dispatch(insertOrder(order))
  }
};

export default withStyles(styles)(connect(null,mapDispatchToProps)(TitlebarGridList));