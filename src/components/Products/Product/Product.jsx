import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='subtitle1' gutterBottom className={classes.cardContentTitle}>
            {product.name}
          </Typography>
          <Typography variant='h6' className={classes.cardContentPrice}>{product.price.formatted_with_symbol}</Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html:product.description }} variant='body2' color='textSecondary' className={classes.productDescription} />
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label='Add to card'>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default Product
