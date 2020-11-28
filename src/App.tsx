import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useAppContext} from './context/App';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default
    }
}))

function App() {
    const classes = useStyles();
    const {appContextLoading} = useAppContext();

    if (appContextLoading) {
        return (
            <div className={classes.root}>
                loading...
            </div>
        )
    }

    return (
        <div className={classes.root}>
            Ready to go!
        </div>
    );
}

export default App;
