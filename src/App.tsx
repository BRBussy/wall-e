import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        width: 200,
        height: 100
    }
}))

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            le app...
        </div>
    );
}

export default App;
