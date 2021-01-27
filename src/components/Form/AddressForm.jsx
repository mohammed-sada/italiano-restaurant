import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.css'
import { Button, Grid, Typography, Paper } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';

const AddressForm = ({ checkoutToken, refreshCart }) => {
    const [checked, setChecked] = useState(true)
    const classes = useStyles();
    const history = useHistory();
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_y103ppg', 'template_z239ljn', e.target, 'user_0MaypXwg4IdHkqbWPMFKz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setTimeout(() => {
            history.push('/end')
            refreshCart();
        }, 1000);
    }

    return (
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
                    <div className={classes.toolbar} />
                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" gutterBottom>معلومات التوصيل</Typography>
                            <form onSubmit={sendEmail}>
                                <div className="form-group">
                                    <input type="name" name="name" placeholder="الاسم" className="form-control" required />
                                    <input type="text" name="phoneNumber" placeholder="رقم التواصل" className="form-control" required />
                                    <input type="checkbox" onChange={() => setChecked(!checked)} /> التوصيل للمنزل ؟
                                    <input disabled={checked} required={!checked} type="text" name="address1" placeholder="عنوان التوصيل" className="form-control" required />
                                    <textarea name="notes" className="form-control" rows="5" placeholder="ملاحظات" ></textarea>
                                </div>
                                {checkoutToken !== null &&
                                    checkoutToken.live.line_items.map(product => (
                                        <div key={product.name} >
                                            <input hidden defaultValue={`(${product.name} عدد: ×${product.quantity})`} name="mealName" />
                                        </div>
                                    ))
                                }
                                <input hidden defaultValue={checkoutToken.live.subtotal.formatted_with_symbol} name="total" />
                                <br />
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button component={Link} variant="outlined" to="/cart">الرجوع للخلف</Button>
                                    <Button type="submit" variant="contained" color="primary">ارسال الطلب</Button>
                                </div>
                            </form>
                        </Paper>
                    </main>
                </div>
            </Grid>
        </>
    );
};

export default AddressForm;
