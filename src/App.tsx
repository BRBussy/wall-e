import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        width: 300,
        height: 200
    }
}))

function App() {
    const classes = useStyles();
    const [setColor, color] = useState('asdf');

    useEffect(() => {
        chrome.storage.sync.get('color', function(data) {
        });
    }, [])

    return (
        <div className={classes.root}>
            {color}
        </div>
    );
}

export default App;
