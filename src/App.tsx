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
    const [color, setColor] = useState('no color set bru');

    useEffect(() => {
        chrome.storage.sync.get('color', function(data) {
            setColor(data.color)
        });
    }, [])

    return (
        <div className={classes.root}>
            {color}
        </div>
    );
}

export default App;
