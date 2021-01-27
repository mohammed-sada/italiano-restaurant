import { Button, Divider, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
import React from 'react'

const End = () => (
    <>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <div>
                <Typography variant="h5">  .شكرا لتعاملك معنا, طلبك قيد التنفيذ </Typography>
                <Divider />
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" style={{ textDecoration: 'none' }} >الرجوع للصفحة الرئيسية</Button>
        </Grid>
    </>
);

export default End
