import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import Loading from '../Loading';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">,انت لم تطلب شيئا بعد
      <br />
      <Link className={classes.link} to="/">! اضافة طلب</Link>
    </Typography>
  );

  if (!cart.line_items) return <Loading subject="الطلبات" />

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">{cart.subtotal.formatted_with_symbol}:المبلغ الكلي</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>حذف الكل</Button>
          <Button className={classes.checkoutButton} component={Link} to="/review" size="large" type="button" variant="contained" color="primary">التالي</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container className={classes.background}>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>طلباتي</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart()}
      <div style={{ marginBottom: '25px' }} />
    </Container>
  );
};

export default Cart;
