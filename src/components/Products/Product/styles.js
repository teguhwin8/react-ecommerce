import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    justifyContent: 'space-between',
  },
  cardContentTitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkitLineClamp': '1' /* number of lines to show */,
    '-webkitBoxOrient': 'vertical',
  },
  cardContentPrice: {},
  productDescription: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkitLineClamp': '3' /* number of lines to show */,
    '-webkitBoxOrient': 'vertical',
  }
}))
