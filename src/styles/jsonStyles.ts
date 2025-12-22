import {makeStyles} from '@material-ui/core';
import {theme} from "./index";

export default makeStyles(() => ({
    root: {
        whiteSpace: 'pre-line',
    },
    page: {
        color: '#AF75FF',
    },
    project: {
        color: '#F54E4E',
    },
    info: {
        color: '#FABC37',
    },
    text: {
        color: '#b9db51',
    },
    code: {
        color: 'white',
    },
    codeBlock: {
        fontFamily: '"Fira Code", monospace',
        fontSize: theme.typography.pxToRem(18),
        lineHeight: 1.7,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',

        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem',
            lineHeight: 1.6,
        },

        [theme.breakpoints.down('xs')]: {
            fontSize: '0.85rem',
        },
    },
    jsonBlock: {
  display: 'block',
  whiteSpace: 'pre-wrap',      // allows wrapping
  wordBreak: 'break-word',     // breaks long words
  paddingLeft: '4ch',          // one tab = 4ch
  textIndent: '-4ch',          // negative indent pulls first line left
},

}));
