import React from 'react';
import {CircularProgress, Theme} from "@mui/material";
import {getNSTrans} from "../functions/getNsTrans";
import {makeStyles} from '@mui/styles';

const useStyle = makeStyles(({}: Theme) => ({
    root: {
        height: '100%',
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        paddingLeft: 15,
        fontSize:18,
        lineHeight: '40px',
        textTransform: 'uppercase'
    },
    container: {
        display: "inline-flex",
    }
}));
const Trans = getNSTrans('chunk-loading')

export const Loading = () => {
    const classes = useStyle();
    return (<div className={classes.root}>
        <div className={classes.container}>
            <CircularProgress/>
            <div className={classes.text}><Trans>loading</Trans> ...</div>
        </div>
    </div>);
};
