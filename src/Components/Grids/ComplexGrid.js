import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});
class ComplexGrid extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        const { classes,
        nom,
        prix,
        entree,
        plat,
        dessert} = this.props;
        return (
            <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={16}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                        {nom}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2">{entree}</Typography>
                        <Typography gutterBottom variant="subtitle2">{plat}</Typography>
                        <Typography gutterBottom variant="subtitle2">{dessert}</Typography>
                    </Grid>
                    <Grid item>
                        <Button color="primary" style={{cursor: 'pointer' }}>Commander</Button>
                    </Grid>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle1">{prix}</Typography>
                    </Grid>
                </Grid>
                </Grid>
            </Paper>
            </div>
        );
    }
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);