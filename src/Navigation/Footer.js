import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    footer: {
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`,
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
});
class Footer extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    Footer.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    const { classes } = this.props;

    const footers = [
        {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
        },
        {
        title: 'Features',
        description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
        },
        {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
        },
        {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
        },
    ];

    return (
        <React.Fragment>
            {/* Footer */}
                <footer className={classNames(classes.footer, classes.layout)}>
                <Grid container spacing={32} justify="space-evenly">
                    {footers.map(footer => (
                    <Grid item xs key={footer.title}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                        {footer.title}
                        </Typography>
                        {footer.description.map(item => (
                        <Typography key={item} variant="subtitle1" color="textSecondary">
                            {item}
                        </Typography>
                        ))}
                    </Grid>
                    ))}
                </Grid>
                </footer>
                {/* End footer */}
        </React.Fragment>
    );
  }
}
export default withStyles(styles)(Footer);