import React from 'react';
import { Typography, List, ListItem, ListItemText, CssBaseline, Button } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';


const Review = ({ checkoutToken }) => {
    const classes = useStyles();


    return (
        <>
            {checkoutToken ?
                <div className="contact-page">
                    <div className="contact-form">
                        <div>
                            <CssBaseline />
                            <div className={classes.toolbar} />
                            <Typography variant="h6" gutterBottom>ملخص الطلب</Typography>
                            <List disablePadding>
                                {checkoutToken.live.line_items.map((product) => (
                                    <ListItem style={{ padding: '10px 0' }} key={product.name}>
                                        <ListItemText primary={product.name} secondary={`عدد: ${product.quantity}`} />
                                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                                    </ListItem>
                                ))}
                                <ListItem style={{ padding: '10px 0' }}>
                                    <ListItemText primary="المبلغ الكلي" />
                                    <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                                        {checkoutToken.live.subtotal.formatted_with_symbol}
                                    </Typography>
                                </ListItem>
                            </List>
                            <Button component={Link} to="/address" size="large" type="button" variant="contained" color="primary">التالي</Button>
                        </div>
                    </div>
                </div> : <div>loading ...</div>}

        </>
    );

}
export default Review;
