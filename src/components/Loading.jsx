import { CircularProgress } from '@material-ui/core'
import React from 'react'
import useStyles from './Form/styles';

const Loading = ({ subject }) => {
    const classes = useStyles();
    return (
        <div style={{ marginTop: "200px", textAlign: 'center' }} className={classes.toolbar}>
            <h3> ...  يتم تحميل {subject}, يرجى الانتظار</h3>
            <div className={classes.spinner}>
                <CircularProgress style={{ color: "#e31836" }} />
            </div>
        </div>
    )
}

export default Loading
