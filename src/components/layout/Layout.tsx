import React, {PropsWithChildren} from 'react';
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";

import {makeStyles} from '@mui/styles';
import {Theme} from "@mui/material"

const useStyle = makeStyles(({}: Theme) => ({
    root: {height: '100vh', display: "flex", flexDirection: 'column'},
    container: {
        marginTop: 65, flex: 1, paddingTop: 20, paddingBottom: 20, paddingLeft: 8, paddingRight: 8
    }
}));
export const Layout = ({children}: PropsWithChildren<unknown>) => {
    const classes = useStyle();
    return (<div className={classes.root}>
        <Header/>
        <div className={classes.container}>
            {children}
        </div>
        <Footer/>
    </div>);
};
