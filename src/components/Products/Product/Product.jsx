import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';

import useStyles from './styles';


const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ₪{product.price.formatted}
          </Typography>
        </div>
        <Typography style={{ textAlign: "right" }} dangerouslySetInnerHTML={{ __html: product.description }} variant="h6" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <LocalPizzaIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

