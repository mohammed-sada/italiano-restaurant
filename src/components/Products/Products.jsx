import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';
import Loading from '../Loading';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();


  if (!products.length) return <Loading subject="قائمة الطعام" />

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <h2 className="hint">
        اضغط على الأيقونة أسفل الوجبة لاضافتها الى طلباتك
          </h2>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

